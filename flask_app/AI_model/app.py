from flask import Flask, request, jsonify
from langchain.llms import HuggingFaceHub
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from dotenv import load_dotenv
import os
import json
import requests
from datetime import datetime
import spacy
from geopy.geocoders import Nominatim
from geonamescache import GeonamesCache
from flask_cors import CORS  # To enable CORS for your React app

# Load environment variables
load_dotenv()
HUGGINGFACEHUB_API_TOKEN = os.getenv("HUGGINGFACEHUB_API_TOKEN")
VISUAL_CROSSING_API_KEY = os.getenv("VISUAL_CROSSING_API_KEY")


# Initialize the Hugging Face model
llm = HuggingFaceHub(
    repo_id="mistralai/Mistral-Nemo-Instruct-2407",
    model_kwargs={"temperature": 0.7, "max_length": 512},
    huggingfacehub_api_token=HUGGINGFACEHUB_API_TOKEN,
)

# Load the spacy model
nlp = spacy.load("en_core_web_sm")

# Initialize geolocator and GeonamesCache
geolocator = Nominatim(user_agent="city_extractor")
geo_cache = GeonamesCache()

# Define the prompt template
prompt = PromptTemplate(
    input_variables=["destination", "days", "preferences", "start_date", "end_date", "num_people", "budget", "travel_mode"],
    template=(
        "You are a travel itinerary planner. Create a detailed and personalized travel itinerary for {destination} "
        "for a trip lasting {days} days. Consider these preferences: {preferences}. Include daily activities, "
        "recommendations for meals, unique experiences, and ensure to accommodate {num_people} people with a budget (in indian rupees) of {budget}. "
        "Travel mode: {travel_mode}. Start date: {start_date}, End date: {end_date}."
    ),
)

# Initialize the Flask app and enable CORS for React app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from React's port

# Function to validate if a GPE entity is a city using Geonames
def is_city(name):
    try:
        cities = geo_cache.get_cities()
        for city_data in cities.values():
            if city_data['name'].lower() == name.lower():
                return True
    except Exception as e:
        print(f"Error validating city with Geonames: {e}")
    return False

# Function to extract city names using spacy
def extract_city_names(itinerary_text):
    doc = nlp(itinerary_text)
    cities = [ent.text for ent in doc.ents if ent.label_ == "GPE" and is_city(ent.text)]
    return list(set(cities))  # Remove duplicates

# Save city names to a JSON file
def save_cities_to_json(cities, file_path="extracted_cities.json"):
    with open(file_path, "w") as json_file:
        json.dump({"cities": cities}, json_file, indent=4)

# Function to fetch weather data using Visual Crossing API
def fetch_weather_data(city_names, start_date):
    weather_data = []
    for city in city_names:
        try:
            response = requests.get(f"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{city}/{start_date}?key={VISUAL_CROSSING_API_KEY}")
            
            if response.status_code == 200:
                weather_info = response.json()
                
                # Convert Fahrenheit to Celsius
                def fahrenheit_to_celsius(f):
                    return (f - 32) * 5/9
                
                high_temp_f = weather_info["days"][0]["tempmax"]
                low_temp_f = weather_info["days"][0]["tempmin"]
                
                high_temp_c = fahrenheit_to_celsius(high_temp_f)
                low_temp_c = fahrenheit_to_celsius(low_temp_f)
                
                weather_data.append({
                    "location": weather_info["address"],
                    "condition": weather_info["days"][0]["conditions"],
                    "high_temp": f"{round(high_temp_c, 1)}°C",  # Round to 1 decimal place
                    "low_temp": f"{round(low_temp_c, 1)}°C",   # Round to 1 decimal place
                })
            else:
                print(f"Failed to fetch weather data for {city}: {response.status_code} - {response.text}")
        except Exception as e:
            print(f"Error fetching weather data for {city}: {e}")
    return weather_data

@app.route("/generate", methods=["POST"])
def generate_itinerary():
    data = request.json  # Receive data as JSON
    
    destination = data.get("destination")
    days = data.get("days")
    preferences = data.get("preferences")
    start_date = data.get("start_date")
    end_date = data.get("end_date")
    num_people = data.get("num_people")
    budget = data.get("budget")
    travel_mode = data.get("travel_mode")

    # Generate itinerary text
    chain = LLMChain(llm=llm, prompt=prompt)
    itinerary = chain.run({
        "destination": destination,
        "days": days,
        "preferences": preferences,
        "start_date": start_date,
        "end_date": end_date,
        "num_people": num_people,
        "budget": budget,
        "travel_mode": travel_mode
    })
    
    # Split the text at empty lines and take everything after the first empty line
    itinerary_parts = itinerary.strip().split("\n\n", 1)  # Splits into two parts at the first empty line
    itinerary = itinerary_parts[1]  # Take second part if exists
  # Removes any repeated prompt
    itinerary = itinerary.replace("#", "").replace("*", "").replace("_", "").replace("`", "")
    # Extract city names
    city_names = extract_city_names(itinerary)

    # Fetch weather data using start_date
    weather = fetch_weather_data(city_names, start_date)

    # Save city names to JSON
    save_cities_to_json(city_names)
    print(city_names)
    print(start_date)
    return jsonify({"itinerary": itinerary, "weather": weather, "cities_visited": city_names})

@app.route("/")
def home():
    return "Server is running"

if __name__ == "__main__":
    app.run(debug=True,port=5000)

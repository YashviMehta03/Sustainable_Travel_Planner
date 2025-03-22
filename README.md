<h1 align="center">
 Sustainable Travel Planner
</h1>

<div align="center">
   Sustainable Travel Planner - where every step leaves a lighter footprint !
</div>
<hr>

<details>
<summary>Table of Contents</summary>

- [📝Description](#description)
- [🔗Links](#links)
- [🤖Tech-Stack](#tech-stack)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
    - [Database](#database)
    - [API's](#apis)
- [📈Progress](#progress)
- [🔮Future Scope](#future-scope)
- [💸Applications](#applications)
- [🛠Project Setup](#project-setup)

</details>

## 📝Description

The Sustainable Travel Planner is a web-based application that helps users plan customized trips efficiently. It leverages AI, real-time data to suggest an itinerary based on user preferences. Users can also access pre-made itineraries.

The platform integrates live weather updates and carbon footprint analysis to promote eco-friendly travel choices. By encouraging sustainable travel habits, it empowers users to explore destinations while minimizing environmental impact.

## 🔗Links

- [GitHub Repository](https://github.com/YashviMehta03/Sustainable_Travel_Planner)
- [Demo Video](demo_video/travelplanner_demo_video.mp4)
- [Drive Link to Screenshots of your project](https://drive.google.com/drive/folders/1tSXbyG9m7TrjCNUw4z-Ki04_n3MJqJAP)

## 🤖Tech-Stack

#### Front-end
- HTML
- JavaScript
- Tailwind CSS
- React

#### Back-end
- NodeJS
- ExpressJS
- Flask
- LangChain

#### Database
- MongoDB

#### API's
- TripAdvisor API
  
## 📈Progress

Fully-implemented features -
1. Developed an itinerary generator which will design a day-wise custom itinerary for you based on your travel constraints and preferences.

2. Top hotel and restaurant recommendations given to the user. A section for flight bookings is created.

3. A planned itinerary section where users can see pre-planned itineraries for them.

4. A carbon footprint calculator where users can see how much carbon footprint their trip is generating and can compensate using offset.

Partially implemented features-
1. Displaying weather updates of the dates the user is planning the trip for.
## 🔮Future Scope
1. Create a virtual scrapbook for users to store their photos and experiences.

2. Create a travel buddy finder which will help solo travellers find a travel comapanion who matched their travelling spirit.

## 💸Applications
1.  Estimates CO₂ emissions for different travel modes, encouraging users to choose greener alternatives.
  
2.  Allows user to enter their preferred type of travel (nature, hisotrical, adventure,etc) and plans itinerary accordingly

## 🛠Project Setup

For the Web-App 

1.Clone the GitHub repo.
```bash
git clone https://github.com/YashviMehta03/Sustainable_Travel_Planner.git
```
2.Enter the client directory. Install all the required dependencies.
```bash
  cd frontend/travel
  npm install 
  npm start
```

3.To start the backend server:
```bash
  cd backend/files
  npm install --force
  nodemon server.js
```

4.To start flask:
```bash
  cd flask_app/AI_model
```

Create a .env file in this folder in the following format-
```bash
  HUGGINGFACEHUB_API_TOKEN = <your-api-token>
  WEATHER_API_KEY = <your-weather-api-key>
  VISUAL_CROSSING_API_KEY = <your-api-key>
```
Then follow-
```bash
  pip install -r requirements.txt
  python -m spacy download en_core_web_sm
  python app.py
```




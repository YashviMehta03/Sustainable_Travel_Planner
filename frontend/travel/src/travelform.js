import React, { useState } from "react";
import axios from "axios";

const TravelForm = () => {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    start_date: "",
    end_date: "",
    num_people: "",
    budget: "",
    travel_mode: "",
    preferences: "",
  });

  const [itinerary, setItinerary] = useState("");
  const [weather, setWeather] = useState([]);
  const [citiesVisited, setCitiesVisited] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/generate",
        formData
      );
      setItinerary(response.data.itinerary);
      setWeather(response.data.weather);
      setCitiesVisited(response.data.cities_visited);
    } catch (error) {
      console.error("Error generating itinerary:", error);
    }
  };

  return (
    <div>
      <h1>Travel Itinerary Planner</h1>
      <form onSubmit={handleSubmit}>
        <label>Source:</label>
        <input
          type="text"
          name="source"
          value={formData.source}
          onChange={handleChange}
          required
        />
        <br />
        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
        <br />
        <label>Start Date:</label>
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          required
        />
        <br />
        <label>End Date:</label>
        <input
          type="date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
          required
        />
        <br />
        <label>Number of People:</label>
        <input
          type="number"
          name="num_people"
          value={formData.num_people}
          onChange={handleChange}
          required
        />
        <br />
        <label>Budget:</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />
        <br />
        <label>Travel Mode:</label>
        <input
          type="radio"
          name="travel_mode"
          value="couple"
          onChange={handleChange}
          required
        />{" "}
        Couple
        <input
          type="radio"
          name="travel_mode"
          value="friend"
          onChange={handleChange}
          required
        />{" "}
        Friend
        <br />
        <label>Preferences:</label>
        <textarea
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Generate Itinerary</button>
      </form>

      {itinerary && (
        <>
          <h2>Generated Itinerary:</h2>
          <pre>{itinerary}</pre>
        </>
      )}

      {weather.length > 0 && (
        <>
          <h2>Weather Forecast:</h2>
          <table border="1">
            <tr>
              <th>Location</th>
              <th>Condition</th>
              <th>High Temp (°C)</th>
              <th>Low Temp (°C)</th>
            </tr>
            {weather.map((day, index) => (
              <tr key={index}>
                <td>{day.location}</td>
                <td>{day.condition}</td>
                <td>{day.high_temp}</td>
                <td>{day.low_temp}</td>
              </tr>
            ))}
          </table>
        </>
      )}

      {citiesVisited.length > 0 && (
        <>
          <h2>Cities Visited:</h2>
          <ul>
            {citiesVisited.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TravelForm;


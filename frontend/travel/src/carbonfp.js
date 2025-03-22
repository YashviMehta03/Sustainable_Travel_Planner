import React, { useState } from "react";
import backgroundImage from "./assets/googlemap.webp";
import axios from "axios";

const FlightDetails = () => {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    flightClass: "",
  });
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getCoordinates = async (location) => {
    const API_KEY = "7611999249ef4cf5bd5e2b271c0b57e2"; // OpenCage API Key
    const url = `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=${location}`;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const lat = response.data.results[0].geometry.lat;
        const lng = response.data.results[0].geometry.lng;
        return { lat, lng };
      } else {
        throw new Error("Failed to fetch coordinates");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degrees) => degrees * (Math.PI / 180);

    // Convert latitude and longitude from degrees to radians
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);
    const R = 6371; // Radius of the Earth in km
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Distance in kilometers
    const distance = R * c;

    return distance;
  };

  const calculateCarbonFootprint = (
    distance,
    flightClass = "Economy"
  ) => {
    const kerosenePerKm = 4; // in kg (example value)
    const extraKerosene = 1100; // in kg (for takeoff/landing/taxiing)
    const passengers = 150;
    let classMultiplier = 1;
    if (flightClass === "Business") {
      classMultiplier = 1.3; // 30% more fuel per passenger for Business
    } else if (flightClass === "First Class") {
      classMultiplier = 1.5; // 50% more fuel per passenger for First Class
    }

    const totalKerosene =
      distance * kerosenePerKm * classMultiplier + extraKerosene;
    const co2Emitted = totalKerosene * 3.16; // 3.16 kg of CO2 per 1 kg of kerosene
    const personalContribution = co2Emitted / passengers; // per person
    return { totalCo2: co2Emitted, personalContribution };
  };


  const handleCalculate = async () => {
    if (!formData.source || !formData.destination) {
      alert("Please enter both source and destination.");
      return;
    }

    try {
      
      const { lat: lat1, lng: lon1 } = await getCoordinates(formData.source);
      console.log("here1");
      console.log(lat1,lon1);
      const { lat: lat2, lng: lon2 } = await getCoordinates(
        formData.destination
      );
      console.log("here2");
      console.log(lat2,lon2);

      if (lat1 && lat2) {
        const distance = calculateDistance(lat1, lon1, lat2, lon2);
        console.log(distance);
        const { totalCo2, personalContribution } = calculateCarbonFootprint(
          distance,
          formData.flightClass
        );
        setCarbonFootprint({ totalCo2, personalContribution });
      } else {
        alert("Could not fetch coordinates. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while calculating the carbon footprint.");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-3/4 bg-white bg-opacity-90 rounded-lg shadow-lg p-8 flex transform transition-transform duration-300 hover:scale-105">
        {/* Left Half */}
        <div className="w-1/2 border-r-2 border-gray-200 pr-8">
          <h2 className="text-2xl font-semibold mb-4">Flight Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="source">
                Source
              </label>
              <input
                type="text"
                id="source"
                name="source"
                value={formData.source}
                onChange={handleInputChange}
                placeholder="Enter source"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="destination">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="Enter destination"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1" htmlFor="flightClass">
                Class
              </label>
              <select
                id="flightClass"
                name="flightClass"
                value={formData.flightClass}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Select class</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleCalculate}
              className=" w-full bg-blue-500 text-white text-xl py-2 px-4 rounded-lg hover:bg-blue-600 "
            >
              Calculate Carbon Footprint
            </button>
          </form>
        </div>

        {/* Right Half */}
        <div className="w-1/2 pl-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Carbon Footprint :</h2>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">
                  {formData.source || "Source.."}
                </h3>
                {/* <p className="text-gray-500">8:00 PM</p> */}
              </div>
              <div className="text-center">
                <span className="text-xl">✈️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {formData.destination || "Destination.."}
                </h3>
                {/* <p className="text-gray-500">10:15 PM</p> */}
              </div>
            </div>
            <hr className="my-4" />
            {carbonFootprint && (
              <>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">
                    Your contribution to Co2 emissions of your flight
                  </p>
                  <p className="text-lg font-bold text-blue-500">
                    {(carbonFootprint.personalContribution / 1000).toFixed(2)}{" "}
                    tonnes CO₂
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-gray-600">Offset your CO₂ emissions</p>
                  <div className="flex items-center">
                    <span className="text-green-500 font-semibold">$6.00</span>
                    <label className="ml-3 inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-green-600"
                      />
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;

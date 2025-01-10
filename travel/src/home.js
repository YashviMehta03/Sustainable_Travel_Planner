// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover"
      style={{
        backgroundImage: "url(https://example.com/background-image.jpg)",
      }} // Replace with a valid image URL
    >
      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to Sustainable Travel Planner
      </h1>
      <div className="space-y-4">
        <Link to="/itineraries">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            See Planned Itineraries
          </button>
        </Link>
        <Link to="/trip-planner">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Start Planning Your Trip
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

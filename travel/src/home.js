// Home.js
import React from "react";
import { Link } from "react-router-dom";
import backimg from "./home_img.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover"
      style={{
        backgroundImage: `url(${backimg})`, // Replace with a valid image URL
      }}
    >
      {/* Navbar */}
      <nav className="absolute top-0 right-0 bg-transparent flex justify-end p-4">
        <div className="space-x-4">
          <Link to="/about" className="text-white hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact Us
          </Link>
          <Link to="/login">
            <button className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-700">
              Login
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-700">
              Signup
            </button>
          </Link>
        </div>
      </nav>

      <h1 className="text-6xl font-bold text-white mb-4">
        Sustainable Travel Planner
      </h1>
      <p className="text-white text-2xl text-center mb-6">
        ...where every trip leaves a lighter footprint.
      </p>

      <div className="flex space-x-8 mt-6">
        <Link to="/itineraries">
          <button className="bg-white bg-opacity-30 border-2 border-white text-white py-3 px-8 rounded hover:bg-opacity-50 transition">
            See Planned Itineraries
          </button>
        </Link>
        <Link to="/input">
          <button className="bg-white bg-opacity-30 border-2 border-white text-white py-3 px-8 rounded hover:bg-opacity-50 transition">
            Start Planning Your Trip
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Sustainable Travel Planner! We are dedicated to helping you
          find eco-friendly travel options that allow you to explore the world
          while minimizing your carbon footprint. Our mission is to promote
          sustainable tourism practices and provide travelers with the resources
          they need to make informed decisions.
        </p>
        <p className="text-gray-700 mb-4">
          Join us in our commitment to preserving the environment and supporting
          local communities. Whether you're planning a weekend getaway or an
          extended adventure, we’re here to assist you in creating memorable and
          responsible travel experiences.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing us as your travel partner!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

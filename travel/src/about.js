import React from "react";
import teamImage from "./assets/world.jpg";
const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-6xl bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="text-3xl font-bold text-green-500">
            TravelPlanners
          </div>
          
        </header>

        {/* Main Content */}
        <div className="flex flex-wrap items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-5xl font-extrabold text-black leading-tight">
              About <br /> Us
            </h1>
            <p className="text-lg text-black mt-6 max-w-lg">
              Hello. We’re TravelPlanners. A sustainable travel planning website
              that has got you covered, whereevr you want to go. With
              TravelPlanners, you can plan your dream trip within just a few
              clicks.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={teamImage}
              alt="Team"
              className="rounded-lg shadow-lg w-full  h-auto"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center mt-10 rounded-lg">
          <p className="text-gray-600">©travelplanners</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;

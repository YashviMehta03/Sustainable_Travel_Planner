import React from "react";
import backimg from "./travel_login.jpg";

const Iternary = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-3/4 p-6 bg-white rounded-lg shadow-lg">
        {/* Image Section */}
        <div>
          <img
            src={backimg}
            alt="back"
            className="rounded-lg shadow-md mb-4 h-80 w-full object-cover"
          />
          <p className="text-3xl font-bold mt-4">New York</p>
        </div>

        {/* Hotel Accommodation Heading */}
        <h1 className="text-3xl font mb-4">Hotel Accommodation</h1>

        {/* Horizontal Flex Section */}
        <div className="flex flex-row gap-4">
          {/* Card Component */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-1/5 rounded overflow-hidden shadow-lg bg-gray-50"
            >
              <img
                className="w-full rounded-t-lg"
                src={backimg}
                alt={`Card ${index + 1}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Iternary;

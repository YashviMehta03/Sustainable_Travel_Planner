import React, { useState } from "react";
import backimg from "./travel_login.jpg";

const Iternary = () => {
  // State for flight search
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripType, setTripType] = useState("roundtrip");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSearchFlights = (e) => {
    e.preventDefault();
    console.log(
      "Searching flights from:",
      from,
      "to:",
      to,
      "Trip type:",
      tripType,
      "Depart:",
      departDate,
      "Return:",
      returnDate
    );
  };

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

        {/* Flight Search Box */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-3xl font-bold mb-4">Find Flights</h1>
          <form onSubmit={handleSearchFlights}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="From"
                className="border border-gray-300 rounded p-2"
                required
              />
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="To"
                className="border border-gray-300 rounded p-2"
                required
              />
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    value="roundtrip"
                    checked={tripType === "roundtrip"}
                    onChange={() => setTripType("roundtrip")}
                  />
                  Roundtrip
                </label>
                <label>
                  <input
                    type="radio"
                    value="one-way"
                    checked={tripType === "one-way"}
                    onChange={() => setTripType("one-way")}
                  />
                  One-way
                </label>
              </div>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="border border-gray-300 rounded p-2"
                required
              />
              {tripType === "roundtrip" && (
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="border border-gray-300 rounded p-2"
                  placeholder="Return Date"
                />
              )}
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
              >
                Search Flights ✈️
              </button>
            </div>
          </form>
        </div>

        {/* Hotel Accommodation Heading */}
        <h1 className="text-3xl font-bold mb-4">Hotel Accommodation</h1>

        {/* Horizontal Flex Section for Hotel Cards */}
        <div className="flex flex-row gap-4 mb-6">
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
                <p className="text-gray-700 text-base">Lorem ipsum dolor</p>
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

        {/* Restaurant Section (if you want to add it, you can do the same as the hotel section) */}

        <h1 className="text-3xl font-bold mb-4">Restaurant</h1>
        <div className="flex flex-row gap-4 mb-6">
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
                <p className="text-gray-700 text-base">Lorem ipsum dolor</p>
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

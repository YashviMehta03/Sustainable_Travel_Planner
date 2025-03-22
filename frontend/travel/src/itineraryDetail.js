// import React from "react";
// import { useParams } from "react-router-dom";
// import itineraryDetails from "./assets/itinerarydetails"; // Adjust path as needed

// const ItineraryDetail = () => {
//   const { id } = useParams(); // Fetch the id from the URL
//   const itinerary = itineraryDetails[id]; // Get the corresponding itinerary data

//   if (!itinerary) {
//     return <div>Itinerary not found!</div>; // Show a "not found" message if itinerary doesn't exist
//   }

//   return (
//     <div>
//       <h1>{itinerary.title}</h1>
//       <p>
//         <strong>Destination:</strong> {itinerary.destination}
//       </p>
//       <p>
//         <strong>Duration:</strong> {itinerary.duration}
//       </p>
//       <p>
//         <strong>Cost:</strong> {itinerary.cost}
//       </p>
//       <h3>Itinerary Details:</h3>
//       <ul>
//         {itinerary.details.map((detail, index) => (
//           <li key={index}>{detail}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItineraryDetail;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import top5hotels_1 from "./assets/top5hotels_1.json"; // Import hotels JSON
import top5restaurants_1 from "./assets/top5restaurants_1.json"; // Import restaurants JSON
import itinerary_1 from "./assets/itinerary_1.txt"; // Import itinerary text file
import backimg from "./assets/paris.jpeg"; // Example for background image
import itineraryDetails from "./assets/itinerarydetails";

const ItineraryDetail = () => {
  const { id } = useParams(); // Fetch the id from the URL
  const [itinerary, setItinerary] = useState(); // State to hold itinerary details
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripType, setTripType] = useState("one-way");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
    // const itinerary = itineraryDetails[id];
  useEffect(() => {
    fetchItineraryDetails(); // Fetch itinerary details on mount
  }, []);

  const fetchItineraryDetails = () => {
    fetch(itinerary_1)
      .then((response) => response.text())
      .then((text) => {
        setItinerary(text); // Set itinerary data after fetch
      });
  };

  if (!itinerary) {
    return <div>Itinerary not found!</div>;
  }

  const handleSearchFlights = (e) => {
    e.preventDefault();
    if (!from || !to) {
      alert("Please enter both 'From' and 'To' destinations.");
      return;
    }
    let flightUrl = `https://www.google.com/travel/flights?q=Flights%20to%20${encodeURIComponent(
      to
    )}`;

    if (from) {
      flightUrl = `https://www.google.com/travel/flights?q=Flights%20from%20${encodeURIComponent(
        from
      )}%20to%20${encodeURIComponent(to)}`;
    }
    if (departDate) {
      flightUrl += `%20on%20${encodeURIComponent(departDate)}`;
    }
    if (tripType === "roundtrip" && returnDate) {
      flightUrl += `%20returning%20${encodeURIComponent(returnDate)}`;
    }

    window.location.href = flightUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-3/4 p-6 bg-white rounded-lg shadow-lg">
        <div>
          <img
            src={backimg}
            alt="background"
            className="rounded-lg shadow-md mb-4 h-80 w-full object-cover"
          />
          <div className="flex items-center justify-between mt-4">
            <p className="text-3xl font-bold">
              {itinerary.destination || "Paris,France"}
            </p>
            <Link to="/carbonfp">
              <button className="bg-green-500 text-white text-xl px-6 py-3 rounded hover:bg-green-600">
                Calculate Carbon Footprint
              </button>
            </Link>
          </div>
        </div>

        {/* Display Itinerary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-3xl font-bold mb-4">Planned Itinerary</h1>
          <p className="text-gray-700 text-lg whitespace-pre-line">
            {itinerary.split("\n\n").map((day, index) => (
              <div
                key={index}
                className="border-2 p-4 mb-4 bg-gray-50 rounded-lg shadow-lg shadow-blue-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {day.split("\n").map((line, idx) => (
                  <p
                    key={idx}
                    className={
                      line.match(/Day \d+/)
                        ? "font-bold text-xl text-black-800"
                        : "text-xl"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </p>
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
                value={"Paris"}
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
                  />{" "}
                  Roundtrip
                </label>
                <label>
                  <input
                    type="radio"
                    value="one-way"
                    checked={tripType === "one-way"}
                    onChange={() => setTripType("one-way")}
                  />{" "}
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
                Search Flights ✈
              </button>
            </div>
          </form>
        </div>

        {/* Hotel Accommodation */}
        <h1 className="text-3xl font-bold mb-4">Hotel Accommodation</h1>
        <div className="flex flex-row gap-4 mb-6 overflow-x-auto">
          {top5hotels_1.map((hotel, index) => (
            <div
              key={index}
              className="w-1/5 rounded overflow-hidden shadow-lg bg-gray-50"
            >
              <img
                className="w-full rounded-t-lg"
                src={
                  hotel.image
                    ? hotel.image
                        .replace("{width}", "300")
                        .replace("{height}", "200")
                    : "default_image_url"
                }
                alt={`Hotel ${index + 1}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{hotel.name}</div>
                <p className="text-gray-700 text-base">{hotel.address}</p>
                <p className="text-gray-700 text-base">
                  Rating: {hotel.rating}
                </p>
                <p className="text-gray-700 text-base">
                  Price Range: {hotel.priceRange}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Section */}
        <h1 className="text-3xl font-bold mb-4">Restaurants</h1>
        <div className="flex flex-row gap-4 mb-6 overflow-x-auto">
          {top5restaurants_1.map((restaurant, index) => (
            <div
              key={index}
              className="w-1/5 rounded overflow-hidden shadow-lg bg-gray-50"
            >
              <img
                className="w-full rounded-t-lg"
                src={
                  restaurant.image
                    ? restaurant.image.replace(/\?(w|h)=\d+/g, "?w=300&h=200")
                    : ""
                }
                alt={`Restaurant ${index + 1}`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{restaurant.name}</div>
                <p className="text-gray-700 text-base">
                  {restaurant.userReviewCount !== "N/A"
                    ? `${restaurant.userReviewCount} Reviews`
                    : "No reviews available"}
                </p>
                <p className="text-gray-700 text-base">
                  Rating:{" "}
                  {restaurant.averageRating === -1
                    ? "N/A"
                    : restaurant.averageRating}{" "}
                  / 5
                </p>
                {restaurant.menuUrl !== "N/A" && (
                  <a
                    href={restaurant.menuUrl}
                    className="text-purple-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Menu
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetail;



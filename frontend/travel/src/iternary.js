import React, { useState, useEffect } from "react";
import backimg from "./assets/travel_login.jpg";
import { Link, useLocation } from "react-router-dom";
import hotelData from "./hotel_data.json";
import restaurantData from "./restaurant_data.json";

const Iternary = () => {
  const location = useLocation();

  // State for flight search
  const [from, setFrom] = useState(location.state?.source || "");
  const [to, setTo] = useState(location.state?.destination || "");
  const [tripType, setTripType] = useState("roundtrip");
  const [departDate, setDepartDate] = useState(
    location.state?.departDate || ""
  );
  const [returnDate, setReturnDate] = useState(
    location.state?.returnDate || ""
  );
  const [tripClass, setTripClass] = useState("economy");
  // States for hotel and restaurant data from localStorage or default data
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [itinerary, setItinerary] = useState(null);

  // Effect to retrieve top5 hotels and restaurants from localStorage on mount
  useEffect(() => {
    const savedHotels = JSON.parse(localStorage.getItem("top5Hotels"));
    const savedRestaurants = JSON.parse(
      localStorage.getItem("top5Restaurants")
    );
    const savedItinerary = JSON.parse(localStorage.getItem("travelData"));
    console.log(savedRestaurants);
    console.log(savedHotels);
    console.log(savedItinerary);

    if (savedHotels && savedHotels.length > 0) {
      setHotels(savedHotels);
    } else {
      setHotels(hotelData.slice(0, 5)); // Default to top 5 from hotelData
    }

    if (savedRestaurants && savedRestaurants.length > 0) {
      setRestaurants(savedRestaurants);
    } else {
      setRestaurants(restaurantData.slice(0, 5)); // Default to top 5 from restaurantData
    }
    if (savedItinerary) {
      setItinerary(savedItinerary.itinerary);
    }
  }, []);

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
            <p className="text-3xl font-bold">{to || "No Destination"}</p>
            <Link to="/carbonfp">
              <button className="bg-green-500 text-white text-xl px-6 py-3 rounded hover:bg-green-600">
                Calculate Carbon Footprint
              </button>
            </Link>
          </div>
        </div>
        {/* Display Itinerary */}
        {itinerary && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <h1 className="text-3xl font-bold mb-4">Your Itinerary</h1>
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
        )}
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
          {hotels.map((hotel, index) => (
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
          {restaurants.map((restaurant, index) => (
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

export default Iternary;

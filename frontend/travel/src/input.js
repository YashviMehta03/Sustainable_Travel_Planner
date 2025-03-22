// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import axios from "axios";

// const apikey = "b3925f9af9msh77ac7225ac30bb9p1cd674jsnae2aa492fa1b";

// const Input = () => {
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [numPeople, setNumPeople] = useState(1);
//   const [budget, setBudget] = useState("");
//   const [travelMode, setTravelMode] = useState("");
//   const [preferences, setPreferences] = useState("");
//   const [itinerary, setItinerary] = useState(null);
//   const [weather, setWeather] = useState([]);
//   const [citiesVisited, setCitiesVisited] = useState([]);

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (
//       source &&
//       destination &&
//       startDate &&
//       endDate &&
//       numPeople > 0 &&
//       budget &&
//       travelMode
//     ) {
//       try {
//         const formData = {
//           source,
//           destination,
//           startDate: startDate.toISOString(),
//           endDate: endDate.toISOString(),
//           numPeople,
//           budget,
//           travelMode,
//           preferences,
//         };

//         const response = await axios.post(
//           "http://localhost:5000/generate",
//           formData,
//           {
//             headers: { "Content-Type": "application/json" },
//           }
//         );
//         console.log("API Response:", response.data);
//         localStorage.setItem("travelData", JSON.stringify(response.data));
//         // setItinerary(response.data.itinerary);
//         // setWeather(response.data.weather);
//         // setCitiesVisited(response.data.citiesVisited);
//         // const response2 = await axios.get(
//         //   "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation",
//         //   {
//         //     params: { query: destination },
//         //     headers: {
//         //       "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
//         //       "X-RapidAPI-Key": apikey,
//         //     },
//         //   }
//         // );

//         // const firstGeoId = response2.data.data[0]?.geoId;
//         // if (!firstGeoId) {
//         //   console.log("No geoId found for the destination.");
//         //   return;
//         // }

//         // // Fetch hotels using geoId
//         // const hotelResponse = await axios.get(
//         //   "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels",
//         //   {
//         //     params: {
//         //       geoId: firstGeoId,
//         //       checkIn: startDate.toISOString().split("T")[0],
//         //       checkOut: endDate.toISOString().split("T")[0],
//         //       adults: numPeople,
//         //       pageNumber: 1,
//         //       currencyCode: "USD",
//         //     },
//         //     headers: {
//         //       "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
//         //       "X-RapidAPI-Key": apikey,
//         //     },
//         //   }
//         // );

//         // const top5Hotels = hotelResponse.data.data.data
//         //   .slice(0, 5)
//         //   .map((hotel) => ({
//         //     name: hotel.title,
//         //     address: hotel.secondaryInfo,
//         //     rating: hotel.bubbleRating?.rating || "N/A",
//         //     priceRange: hotel.priceForDisplay || "N/A",
//         //     image: hotel.cardPhotos?.[0]?.sizes?.urlTemplate || "N/A",
//         //   }));

//         // localStorage.setItem("top5Hotels", JSON.stringify(top5Hotels));

//         // // Fetch restaurants
//         // const restaurantResponse = await axios.get(
//         //   "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
//         //   {
//         //     params: { locationId: firstGeoId },
//         //     headers: {
//         //       "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
//         //       "X-RapidAPI-Key": apikey,
//         //     },
//         //   }
//         // );

//         // const top5Restaurants = restaurantResponse.data.data.data
//         //   .slice(0, 5)
//         //   .map((restaurant) => ({
//         //     name: restaurant.name,
//         //     averageRating: restaurant.averageRating || "N/A",
//         //     userReviewCount: restaurant.userReviewCount || "N/A",
//         //     menuUrl: restaurant.menuUrl || "N/A",
//         //     image: restaurant.heroImgUrl || "N/A",
//         //   }));

//         // localStorage.setItem(
//         //   "top5Restaurants",
//         //   JSON.stringify(top5Restaurants)
//         // );
//         // navigate("/newitinerary");
//         navigate("/newitinerary", {
//           state: {
//             // top5Hotels,
//             // top5Restaurants,
//             source,
//             destination,
//             startDate: startDate.toString(),
//             endDate: endDate.toString(),
//           },
//         });
//       } catch (error) {
//         console.error("Error:", error.message);
//         alert(
//           "An error occurred while generating the itinerary. Please try again."
//         );
//       }
//     } else {
//       alert("Please fill all fields before submitting.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Travel Itinerary Planner</h1>
//       <form onSubmit={handleSubmit}>
//         <label className="block mb-2">Source:</label>
//         <input
//           type="text"
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           required
//           className="border p-2 w-full mb-4"
//         />

//         <label className="block mb-2">Destination:</label>
//         <input
//           type="text"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           required
//           className="border p-2 w-full mb-4"
//         />

//         <label className="block mb-2">Start Date:</label>
//         <DatePicker
//           selected={startDate}
//           onChange={setStartDate}
//           required
//           className="border p-2 w-full mb-4"
//         />

//         <label className="block mb-2">End Date:</label>
//         <DatePicker
//           selected={endDate}
//           onChange={setEndDate}
//           required
//           className="border p-2 w-full mb-4"
//         />

//         <label className="block mb-2">Number of People:</label>
//         <input
//           type="number"
//           value={numPeople}
//           onChange={(e) => setNumPeople(e.target.value)}
//           min="1"
//           required
//           className="border p-2 w-full mb-4"
//         />

//         <label className="block mb-2">Budget:</label>
//         <input
//           type="number"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//           required
//           className="border p-2 w-full mb-4"
//         />

//         <label className="block mb-2">Travel Mode:</label>
//         <div className="mb-4">
//           <input
//             type="radio"
//             id="couple"
//             name="travelMode"
//             value="couple"
//             onChange={(e) => setTravelMode(e.target.value)}
//             required
//           />
//           <label htmlFor="couple" className="ml-2">
//             Couple
//           </label>
//           <input
//             type="radio"
//             id="friend"
//             name="travelMode"
//             value="friend"
//             onChange={(e) => setTravelMode(e.target.value)}
//             className="ml-4"
//             required
//           />
//           <label htmlFor="friend" className="ml-2">
//             Friend
//           </label>
//         </div>

//         <label className="block mb-2">Preferences:</label>
//         <textarea
//           value={preferences}
//           onChange={(e) => setPreferences(e.target.value)}
//           rows="4"
//           className="border p-2 w-full mb-4"
//         ></textarea>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 w-full rounded"
//         >
//           Generate Itinerary
//         </button>
//       </form>

//       {/* {itinerary && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">Generated Itinerary:</h2>
//           <pre>{itinerary}</pre>
//         </div>
//       )} */}

//       {/* {weather.length > 0 && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">Weather Forecast:</h2>
//           <table className="border w-full mt-2">
//             <thead>
//               <tr>
//                 <th className="border p-2">Location</th>
//                 <th className="border p-2">Condition</th>
//                 <th className="border p-2">High Temp (°C)</th>
//                 <th className="border p-2">Low Temp (°C)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {weather.map((day, index) => (
//                 <tr key={index}>
//                   <td className="border p-2">{day.location}</td>
//                   <td className="border p-2">{day.condition}</td>
//                   <td className="border p-2">{day.high_temp}</td>
//                   <td className="border p-2">{day.low_temp}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )} */}

//       {/* {citiesVisited.length > 0 && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">Cities Visited:</h2>
//           <ul>
//             {citiesVisited.map((city, index) => (
//               <li key={index}>{city}</li>
//             ))}
//           </ul>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Input;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./styles.css"; // Import your custom CSS for animations

const apikey = "105c741c6amsh4f62426d29db085p1da291jsn8a920f7c118f";
const Input = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numPeople, setNumPeople] = useState(1);
  const [budget, setBudget] = useState("");
  const [travelMode, setTravelMode] = useState("");
  const [preferences, setPreferences] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      source &&
      destination &&
      startDate &&
      endDate &&
      numPeople > 0 &&
      budget &&
      travelMode
    ) {
      try {
        const formData = {
          source,
          destination,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          numPeople,
          budget,
          travelMode,
          preferences,
        };

        const response = await axios.post(
          "http://localhost:5000/generate",
          formData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        console.log("API Response:", response.data);
        localStorage.setItem("travelData", JSON.stringify(response.data));

        const response2 = await axios.get(
                  "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation",
                  {
                    params: { query: destination },
                    headers: {
                      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
                      "X-RapidAPI-Key": apikey,
                    },
                  }
                );

                const firstGeoId = response2.data.data[0]?.geoId;
                if (!firstGeoId) {
                  console.log("No geoId found for the destination.");
                  return;
                }

                // Fetch hotels using geoId
                const hotelResponse = await axios.get(
                  "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels",
                  {
                    params: {
                      geoId: firstGeoId,
                      checkIn: startDate.toISOString().split("T")[0],
                      checkOut: endDate.toISOString().split("T")[0],
                      adults: numPeople,
                      pageNumber: 1,
                      currencyCode: "USD",
                    },
                    headers: {
                      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
                      "X-RapidAPI-Key": apikey,
                    },
                  }
                );

                const top5Hotels = hotelResponse.data.data.data
                  .slice(0, 5)
                  .map((hotel) => ({
                    name: hotel.title,
                    address: hotel.secondaryInfo,
                    rating: hotel.bubbleRating?.rating || "N/A",
                    priceRange: hotel.priceForDisplay || "N/A",
                    image: hotel.cardPhotos?.[0]?.sizes?.urlTemplate || "N/A",
                  }));

                localStorage.setItem("top5Hotels", JSON.stringify(top5Hotels));

                // Fetch restaurants
                const restaurantResponse = await axios.get(
                  "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
                  {
                    params: { locationId: firstGeoId },
                    headers: {
                      "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
                      "X-RapidAPI-Key": apikey,
                    },
                  }
                );

                const top5Restaurants = restaurantResponse.data.data.data
                  .slice(0, 5)
                  .map((restaurant) => ({
                    name: restaurant.name,
                    averageRating: restaurant.averageRating || "N/A",
                    userReviewCount: restaurant.userReviewCount || "N/A",
                    menuUrl: restaurant.menuUrl || "N/A",
                    image: restaurant.heroImgUrl || "N/A",
                  }));

                localStorage.setItem(
                  "top5Restaurants",
                  JSON.stringify(top5Restaurants)
                );
                // navigate("/newitinerary");
                navigate("/newitinerary", {
                  state: {
                    top5Hotels,
                    top5Restaurants,
                    source,
                    destination,
                    startDate: startDate.toString(),
                    endDate: endDate.toString(),
                  },
                });
      } catch (error) {
        console.error("Error:", error.message);
        alert(
          "An error occurred while generating the itinerary. Please try again."
        );
      }
    } else {
      alert("Please fill all fields before submitting.");
    }
  };

  return (
    <div className="min-h-screen moving-background flex items-center justify-center">
      <div className="w-[90%] md:w-[60%] mx-auto p-6 bg-white bg-opacity-50 rounded-lg shadow-lg fade-in">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Travel Itinerary Planner
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-black font-semibold mb-1">
              Source:
            </label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              required
              className="border border-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your source"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Destination:
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="border border-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your destination"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Start Date:
            </label>
            <DatePicker
              selected={startDate}
              onChange={setStartDate}
              required
              className="border border-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              End Date:
            </label>
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
              required
              className="border border-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Number of People:
            </label>
            <input
              type="number"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
              min="1"
              required
              className="border border-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Budget:
            </label>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className="border border-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Travel Mode:
            </label>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="couple"
                name="travelMode"
                value="couple"
                onChange={(e) => setTravelMode(e.target.value)}
                required
                className="mr-2"
              />
              <label htmlFor="couple" className="text-gray-700">
                Couple
              </label>
              <input
                type="radio"
                id="friend"
                name="travelMode"
                value="friend"
                onChange={(e) => setTravelMode(e.target.value)}
                className="ml-4 mr-2"
                required
              />
              <label htmlFor="friend" className="text-gray-700">
                Friend
              </label>
              <input
                type="radio"
                id="family"
                name="travelMode"
                value="family"
                onChange={(e) => setTravelMode(e.target.value)}
                required
                className="mr-2"
              />
              <label htmlFor="couple" className="text-gray-700">
                Family
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Preferences:
            </label>
            <textarea
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              rows="4"
              className="border border-black rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg w-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Generate Itinerary
          </button>
        </form>
      </div>
    </div>
  );
};

export default Input;

import React from "react";
import { useNavigate } from "react-router-dom";
import hawaiiimage from "./assets/hawai.jpg";
import japanimage from "./assets/japan.jpeg";
import switzerlandimage from "./assets/switzerland.webp";
import indiaimage from "./assets/india.jpg";
import australiaimage from "./assets/australia.webp";
import panamaimage from "./assets/panama.jpeg";
import italyimage from "./assets/italy.jpeg";
import egyptimage from "./assets/egypt.jpg";
import indonesiaimage from "./assets/indonesia.webp";
import malaysiaiimage from "./assets/malaysia.webp";
import parisimage from "./assets/paris.jpeg";

// Sample itinerary data
const itineraries = [
  {
    id: 1,
    title: "Beach Vacation in Hawaii",
    destination: "Hawaii",
    startDate: "2023-12-01",
    endDate: "2023-12-10",
    image: hawaiiimage,
  },
  {
    id: 2,
    title: "Trip to Paris",
    destination: "Paris",
    startDate: "2024-01-15",
    endDate: "2024-01-22",
    image: parisimage,
  },
  {
    id: 3,
    title: "Adventure in the Swiss Alps",
    destination: "Switzerland",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: switzerlandimage,
  },
  {
    id: 4,
    title: "Spirituality in India",
    destination: "India",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: indiaimage,
  },
  {
    id: 5,
    title: "Australian Getaway",
    destination: "Australia",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: australiaimage,
  },
  {
    id: 6,
    title: "Peace in Panama",
    destination: "Panama",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: panamaimage,
  },
  {
    id: 7,
    title: "Italian grace",
    destination: "Italy",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: italyimage,
  },
  {
    id: 8,
    title: "Egyptian Mystery",
    destination: "Egypt",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: egyptimage,
  },
  {
    id: 9,
    title: "Paradise of Indonesia",
    destination: "Indonesia",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: indonesiaimage,
  },
  {
    id: 10,
    title: "Malaysian escape",
    destination: "Malaysian",
    startDate: "2024-02-05",
    endDate: "2024-02-12",
    image: malaysiaiimage,
  },
  // Add more itineraries as needed
];

const PlannedItineraries = () => {
  const navigate = useNavigate();

  const handleItineraryClick = (id) => {
    navigate(`/itinerary/${id}`); // Navigate to the detailed itinerary page
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Planned Itineraries
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {itineraries.map((itinerary) => (
          <div
            key={itinerary.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleItineraryClick(itinerary.id)}
          >
            <img
              src={itinerary.image}
              alt={itinerary.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{itinerary.title}</h2>
              <p className="text-gray-600">{itinerary.destination}</p>
              <p className="text-gray-500">
                {itinerary.startDate} - {itinerary.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlannedItineraries;

import React from "react";
import { Link } from "react-router-dom";
import backimg from "./assets/home_img.jpg"; // Imported background image
import dubaiImg from "./assets//dubai.webp"; // Import Dubai image
import europeImg from "./assets/europe.jpg"; // Import Europe image
import thailandImg from "./assets/thailand.webp"; // Import Thailand image
import singaporeImg from "./assets/singapore.avif"; // Import Singapore image
import baliImg from "./assets/bali.jpg"; // Import Bali image
import bhutanImg from "./assets/bhutan.jpg"; // Import Bhutan image
import georgiaImg from "./assets/georgia.jpg"; // Import Georgia image
import laoImg from "./assets/lao.jpg"; // Import Lao PDR image
import mongoliaImg from "./assets/mongolia.jpg"; // Import Mongolia image
import eswatiniImg from "./assets/eswatini.jpg"; // Import Eswatini image
import icelandImg from "./assets/iceland.jpg"; // Import Iceland image
import madagascarImg from "./assets/madagascar.jpg"; // Import Madagascar image
import kyrgyzstanImg from "./assets/kyrgyzstan.jpg"; // Import Kyrgyzstan image
import malawiImg from "./assets/malawi.jpg"; // Import Malawi image

const Home = () => {
  const destinations = [
    { name: "Dubai", tagline: "THE CITY OF LIFE", image: dubaiImg },
    { name: "Europe", tagline: "OLD WORLD CHARM", image: europeImg },
    { name: "Thailand", tagline: "THE KINGDOM OF", image: thailandImg },
    { name: "Singapore", tagline: "THE LION CITY", image: singaporeImg },
    { name: "Bali", tagline: "CULTURAL PARADISE", image: baliImg },
  ];

  const nicheDestinations = [
    { name: "Bhutan", image: bhutanImg },
    { name: "Georgia", image: georgiaImg },
    { name: "Lao PDR", image: laoImg },
    { name: "Mongolia", image: mongoliaImg },
    { name: "Eswatini", image: eswatiniImg },
    { name: "Iceland", image: icelandImg },
    { name: "Madagascar", image: madagascarImg },
    { name: "Kyrgyzstan", image: kyrgyzstanImg },
    { name: "Malawi", image: malawiImg },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-fixed">
      {/* Background image */}
      <div
        className="h-[90vh] flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backimg})`, // Background image
        }}
      >
        {/* Navbar */}
        <nav className="absolute top-0 right-0 bg-transparent flex justify-end p-4 w-full">
          <div className="space-x-4">
            <Link
              to="/about"
              className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-700"
            >
              Contact Us
            </Link>
            <Link to="/login?mode=login" state={{ mode: "login" }}>
              <button className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-700">
                Login
              </button>
            </Link>
            <Link to="/login?mode=signup" state={{ mode: "signup" }}>
              <button className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-700">
                Signup
              </button>
            </Link>
          </div>
        </nav>

        <h1 className="text-6xl font-bold text-white mb-4 text-center">
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
          <Link to="/login">
            <button className="bg-white bg-opacity-30 border-2 border-white text-white py-3 px-8 rounded hover:bg-opacity-50 transition">
              Start Planning Your Trip
            </button>
          </Link>
        </div>
      </div>

      {/* Scrollable Popular Destinations Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Popular Destinations
        </h2>

        <div className="flex overflow-x-scroll space-x-4 px-8 scrollbar-hide">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image for each destination */}
              <img
                src={dest.image} // Using the imported images
                alt={dest.name}
                className="h-48 w-full object-cover"
              />
              <div className="bg-white p-4 text-center">
                <p className="text-gray-600 uppercase text-xs tracking-wide mb-1">
                  {dest.tagline}
                </p>
                <h3 className="text-lg font-semibold">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scrollable Niche Destinations Section with Circles */}
      <section className="bg-gray-200 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Unique & Underrated Destinations
        </h2>

        <div className="flex justify-center space-x-4 px-8 overflow-x-scroll scrollbar-hide">
          {nicheDestinations.map((dest, index) => (
            <div>
              <div
                key={index}
                className="flex-shrink-0 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg text-center"
              >
                {/* Circular Image for each niche destination */}
                <img
                  src={dest.image} // Using the imported images
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                {/* Destination Name */}
              </div>
              <p className="text-black mt-2 text-xl text-center py-2">
                {dest.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

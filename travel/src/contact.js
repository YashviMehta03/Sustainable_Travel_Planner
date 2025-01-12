// Contact.js
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/background/20240801/pngtree-world-map-doodle-with-suitcases-and-airplanes-travel-illustration-image_16124677.jpg")`, // Replace with the path to your image
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>{" "}
      {/* Overlay for readability */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105 z-10"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-black">
          Contact Us
        </h2>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            placeholder="Write your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 w-full transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

// Contact.js
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!"); // Placeholder for form submission logic
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

        <div className="mb-4">
          <input
            type="text"
            required
            className="border border-gray-300 rounded p-2 w-full mb-2"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            required
            className="border border-gray-300 rounded p-2 w-full mb-2"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <textarea
            required
            className="border border-gray-300 rounded p-2 w-full mb-2"
            rows="4"
            placeholder="Your Message"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

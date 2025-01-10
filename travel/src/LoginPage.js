// src/LoginPage.js
import React, { useState } from "react";
import backgroundImage from "./travel_login.jpg"; // Ensure this path is correct

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    //e.preventDefault();
    if (isLogin) {
      console.log("Logging in:", { username, password });
    } else {
      console.log("Signing up:", { username, email, password });
    }
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Wrapper for both Quote and Login Form */}
      <div className="flex w-full bg-black bg-opacity-40">
        {/* Left Side for Quote */}
        <div className="w-1/2 flex items-center justify-center">
          <h1 className="font-dancing text-white text-5xl md:text-7xl font-bold italic text-center p-10">
            "Travel not to find yourself, but to remember who you've been all
            along...."
          </h1>
        </div>

        {/* Right Side for Login Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-white bg-opacity-30 p-12 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-4xl font-bold mb-8 text-center text-black-800">
              {isLogin ? "Login" : "Sign Up"}
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-medium text-black-700">
                  Username
                </label>{" "}
                {/* Increased font size */}
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" // Light gray background for input
                  required
                />
              </div>
              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-lg font-medium text-black-700">
                    Email
                  </label>{" "}
                  {/* Increased font size */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" // Light gray background for input
                    required
                  />
                </div>
              )}
              <div className="mb-6">
                <label className="block text-lg font-medium text-black-700">
                  Password
                </label>{" "}
                {/* Increased font size */}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-4 border border-gray-300 rounded-md w-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" // Light gray background for input
                  required
                />
              </div>
              <button
                //type="submit"
                className="w-full bg-blue-500 text-white text-xl py-3 rounded-md hover:bg-blue-600 transition duration-200"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
              <p className="mt-4 text-center text-xl text-black-600">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-800 hover:underline text-xl"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Welcome Heading */}
      {/*<div className="absolute top-10 left-10">
        <h1 className="text-white text-5xl font-bold">
          Sustainable Travel Planner
        </h1>
      </div>*/}
    </div>
  );
};

export default LoginPage;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Iternary from "./iternary";
import Input from "./input";
import Itineraries from "./itineraries";
import Carbonfp from "./carbonfp";

var ReactDOM = require("react-dom");
//import ReactDOM from "react-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newitinerary" element={<Iternary />} />
        <Route path="/input" element={<Input />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/carbonfp" element={<Carbonfp />} />
      </Routes>
    </Router>
  );
};

export default App;

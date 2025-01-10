import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-autocomplete";
import Select from "react-select";

const Input = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [budget, setBudget] = useState("");
  const [travelMode, setTravelMode] = useState(null);

  const destinations = ["Paris", "London", "New York", "Tokyo", "Dubai"];

  const travelModes = [
    { value: "couple", label: "Couple" },
    { value: "family", label: "Family-friendly" },
    { value: "friends", label: "Friends trip" },
    { value: "solo", label: "Solo" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      destination,
      startDate,
      endDate,
      numberOfPeople,
      budget,
      travelMode,
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Travel Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Destination:</label>
          <Autocomplete
            getItemValue={(item) => item}
            items={destinations.filter((item) =>
              item.toLowerCase().includes(destination.toLowerCase())
            )}
            renderItem={(item, isHighlighted) => (
              <div
                key={item}
                className={`p-2 ${
                  isHighlighted ? "bg-blue-500 text-white" : "bg-white"
                }`}
              >
                {item}
              </div>
            )}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onSelect={(val) => setDestination(val)}
            inputProps={{
              className: "border border-gray-300 rounded p-2 w-full",
              placeholder: "Type a destination",
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border border-gray-300 rounded p-2 w-full"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border border-gray-300 rounded p-2 w-full"
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Number of People:</label>
          <input
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            min="1"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Budget:</label>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="Enter your budget"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Travel Mode:</label>
          <Select
            value={travelMode}
            onChange={setTravelMode}
            options={travelModes}
            className="basic-single"
            classNamePrefix="select"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;

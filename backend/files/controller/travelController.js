const Itinerary = require("../models/travelModel"); // Adjusted to match the terminology
const asyncHandler = require("express-async-handler");

// @desc Get all itineraries
// @access Public
// @route GET /api/travel
const getItineraries = asyncHandler(async (req, res) => {
  const itineraries = await Itinerary.find();
  res.status(200).json(itineraries);
});

// @desc Create a new itinerary
// @access Public
// @route POST /api/travel
const createItinerary = asyncHandler(async (req, res) => {
  try {
    const {
      destination,
      startDate,
      endDate,
      numberOfPeople,
      budget,
      travelMode,
    } = req.body;

    if (
      !destination ||
      !startDate ||
      !endDate ||
      !numberOfPeople ||
      !budget ||
      !travelMode
    ) {
      res.status(400).json({ error: "All fields are mandatory" });
      return;
    }

    const itinerary = await Itinerary.create({
      destination,
      startDate,
      endDate,
      numberOfPeople,
      budget,
      travelMode,
    });

    console.log("Itinerary created successfully:", itinerary);
    res.status(201).json(itinerary);
  } catch (error) {
    console.error("Error in creating itinerary:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// const createItinerary = asyncHandler(async (req, res) => {
//   const {
//     destination,
//     startDate,
//     endDate,
//     numberOfPeople,
//     budget,
//     travelMode,
//   } = req.body;

//   // Check if all required fields are provided
//   if (
//     !destination ||
//     !startDate ||
//     !endDate ||
//     !numberOfPeople ||
//     !budget ||
//     !travelMode
//   ) {
//     res.status(400);
//     throw new Error("All fields are mandatory");
//   }

//   // Create the new itinerary
//   const itinerary = await Itinerary.create({
//     destination,
//     startDate,
//     endDate,
//     numberOfPeople,
//     budget,
//     travelMode,
//   });

//   res.status(201).json(itinerary);
// });

// @desc Get a single itinerary by ID
// @access Public
// @route GET /api/travel/:id
const getItinerary = asyncHandler(async (req, res) => {
  console.log("Received request to get itineraries");
  const itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    res.status(404);
    throw new Error("Itinerary not found");
  }

  res.status(200).json(itinerary);
});

// @desc Update an itinerary
// @access Public
// @route PUT /api/travel/:id
const updateItinerary = asyncHandler(async (req, res) => {
  const itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    res.status(404);
    throw new Error("Itinerary not found");
  }

  // Update the itinerary
  const updatedItinerary = await Itinerary.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedItinerary);
});

// @desc Delete an itinerary
// @access Public
// @route DELETE /api/travel/:id
const deleteItinerary = asyncHandler(async (req, res) => {
  const itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    res.status(404);
    throw new Error("Itinerary not found");
  }

  // Delete the itinerary
  await Itinerary.deleteOne({ _id: req.params.id });

  res.status(200).json({ message: "Itinerary deleted successfully" });
});

module.exports = {
  getItineraries,
  createItinerary,
  getItinerary,
  updateItinerary,
  deleteItinerary,
};

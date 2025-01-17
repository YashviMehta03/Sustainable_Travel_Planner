const Itinerary = require("../models/travelModel"); // Adjusted to match the terminology
const asyncHandler = require("express-async-handler");

// @desc Get all itineraries
// @access private
// @route GET /api/travel
const getItineraries = asyncHandler(async (req, res) => {
  const itineraries = await Itinerary.find();
  res.status(200).json(itineraries);
});

// @desc Create a new itinerary
// @access private
// @route POST /api/travel
const createItinerary = asyncHandler(async (req, res) => {
  const {
    destination,
    startDate,
    endDate,
    numberOfPeople,
    budget,
    travelMode,
  } = req.body;

  // Check if all required fields are provided
  if (
    !destination ||
    !startDate ||
    !endDate ||
    !numberOfPeople ||
    !budget ||
    !travelMode
  ) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // Create the new itinerary
  const itinerary = await Itinerary.create({
    destination,
    startDate,
    endDate,
    numberOfPeople,
    budget,
    travelMode,
    userId: req.user.id, // Assuming user authentication is handled
  });

  res.status(201).json(itinerary);
});

// @desc Get a single itinerary by ID
// @access private
// @route GET /api/travel/:id
const getItinerary = asyncHandler(async (req, res) => {
  const itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    res.status(404);
    throw new Error("Itinerary not found");
  }

  res.status(200).json(itinerary);
});

// @desc Update an itinerary
// @access private
// @route PUT /api/travel/:id
const updateItinerary = asyncHandler(async (req, res) => {
  const itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    res.status(404);
    throw new Error("Itinerary not found");
  }

  // If the user is not the owner of the itinerary, they cannot update it
  if (itinerary.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You can only update your own itinerary");
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
// @access private
// @route DELETE /api/travel/:id
const deleteItinerary = asyncHandler(async (req, res) => {
  const itinerary = await Itinerary.findById(req.params.id);

  if (!itinerary) {
    res.status(404);
    throw new Error("Itinerary not found");
  }

  // If the user is not the owner of the itinerary, they cannot delete it
  if (itinerary.userId.toString() !== req.user.id) {
    res.status(403);
    throw new Error("You can only delete your own itinerary");
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

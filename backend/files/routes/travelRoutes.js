const express = require("express");
const router = express.Router();
const {
  getItinerary,
  getItineraries,
  createItinerary,
  updateItinerary,
  deleteItinerary,
} = require("../controller/travelController");

// Route for fetching all itineraries and creating a new itinerary
router
  .route("/")
  .get(getItineraries) // Get all itineraries
  .post(createItinerary); // Create a new itinerary

// Route for fetching, updating, and deleting a specific itinerary by ID
router
  .route("/:id")
  .get(getItinerary) // Get a specific itinerary by ID
  .put(updateItinerary) // Update a specific itinerary by ID
  .delete(deleteItinerary); // Delete a specific itinerary by ID

module.exports = router;

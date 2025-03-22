const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: [true, "Please add a destination"], // destination for the travel
    },
    startDate: {
      type: Date,
      required: [true, "Please add a start date for the travel"], // start date for the travel
    },
    endDate: {
      type: Date,
      required: [true, "Please add an end date for the travel"], // end date for the travel
    },
    status: {
      type: String,
      enum: ["upcoming", "completed", "cancelled"], // status of the travel
      default: "upcoming",
    },
    cost: {
      type: Number,
      required: [true, "Please add the estimated cost"], // estimated cost of the trip
    },
    details: {
      type: String,
      required: false, // additional notes or details about the trip
    },
  },
  {
    timestamps: true, // automatically creates createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Travel", travelSchema);

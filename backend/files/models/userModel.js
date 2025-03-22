const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
    },

    email: {
      type: String,
      unique: [true, "Email already taken"],
      required: [true, "Please add an email"],
    },

    password: {
      type: String,
      required: [true, "Please add a password"],
    },

    travelPlans: [
      {
        destination: {
          type: String,
          required: [true, "Destination is required"],
        },
        startDate: {
          type: Date,
          required: [true, "Start date is required"],
        },
        endDate: {
          type: Date,
          required: [true, "End date is required"],
        },
        numberOfPeople: {
          type: Number,
          min: [1, "Number of people must be at least 1"],
          required: [true, "Number of people is required"],
        },
        budget: {
          type: String,
          required: [true, "Budget is required"],
        },
        travelMode: {
          type: String,
          enum: ["couple", "family", "friends", "solo"],
          required: [true, "Travel mode is required"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

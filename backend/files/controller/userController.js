const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const TravelPlan = require("../models/travelModel");

// @desc Register a user
// @access public
// @route POST /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
});

// @desc Login a user
// @access public
// @route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password invalid");
  }
});

// @desc Current user info
// @access private
// @route GET /api/users/current
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});
/*
// @desc Create or update user's travel plan
// @route POST /api/users/travelplan
// @access private
const createOrUpdateTravelPlan = asyncHandler(async (req, res) => {
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
    res.status(400);
    throw new Error("All travel fields are mandatory");
  }

  // Check if travel plan exists for the user
  let travelPlan = await TravelPlan.findOne({ user_id: req.user.id });

  if (travelPlan) {
    // Update existing travel plan
    travelPlan.destination = destination || travelPlan.destination;
    travelPlan.startDate = startDate || travelPlan.startDate;
    travelPlan.endDate = endDate || travelPlan.endDate;
    travelPlan.numberOfPeople = numberOfPeople || travelPlan.numberOfPeople;
    travelPlan.budget = budget || travelPlan.budget;
    travelPlan.travelMode = travelMode || travelPlan.travelMode;

    await travelPlan.save();
    res.status(200).json(travelPlan);
  } else {
    // Create new travel plan
    travelPlan = new TravelPlan({
      user_id: req.user.id,
      destination,
      startDate,
      endDate,
      numberOfPeople,
      budget,
      travelMode,
    });

    await travelPlan.save();
    res.status(201).json(travelPlan);
  }
});

// @desc Get user's travel plan
// @route GET /api/users/travelplan
// @access private
const getUserTravelPlan = asyncHandler(async (req, res) => {
  const travelPlan = await TravelPlan.findOne({ user_id: req.user.id });

  if (!travelPlan) {
    res.status(404);
    throw new Error("Travel plan not found");
  }

  res.status(200).json(travelPlan);
});
*/
module.exports = {
  registerUser,
  loginUser,
  currentUser,
  // createOrUpdateTravelPlan,
  // getUserTravelPlan,
};

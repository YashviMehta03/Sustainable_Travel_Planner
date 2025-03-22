const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./config/dbConnection"); // Database connection
const userRoutes = require("./routes/userRoutes"); // User authentication routes
const travelRoutes = require("./routes/travelRoutes"); // Travel-related routes
const errorHandler = require("./middleware/errorHandler"); // Error handler middleware
const validateToken = require("./middleware/validateTokenHandler"); // Token validation middleware
const cors = require("cors");
dotenv.config(); // Load environment variables from .env file
dbConnection(); // Establish database connection

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes); // User routes (register, login, etc.)
app.use("/api/travel", travelRoutes); // Travel routes (requires token validation)

// Error handling middleware
app.use(errorHandler);

// Server setup
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

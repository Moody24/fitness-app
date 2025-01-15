require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const { log } = require("./utils/logger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route for root URL
app.get("/", (req, res) => {
  log("info", "Root route accessed");
  res.send("Fitness Tracker Backend API is running!");
});

// API routes
app.use("/api/workouts", workoutRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => log("info", `Server running on port ${PORT}`));

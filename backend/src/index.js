require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");

// Log the value of the FIREBASE_SERVICE_ACCOUNT environment variable
console.log("Service Account Path:", process.env.FIREBASE_SERVICE_ACCOUNT);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Default route for root URL
app.get("/", (req, res) => {
    res.send("Fitness Tracker Backend API is running!");
  });

// Routes
app.use("/api/workouts", workoutRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

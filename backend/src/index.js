require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/workouts", workoutRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

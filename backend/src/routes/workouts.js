const express = require("express");
const { db } = require("../config/firebase"); // Import Firestore from Firebase configuration
const router = express.Router();

// Test Route: Verify that the route is working
router.get("/test", async (req, res) => {
  try {
    res.status(200).json({ message: "Workout routes are working!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Workouts
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("workouts").get();
    const workouts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a New Workout
router.post("/", async (req, res) => {
  try {
    const { userId, type, duration, date, caloriesBurned } = req.body;

    // Validate request body
    if (!userId || !type || !duration || !date || !caloriesBurned) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newWorkout = {
      userId,
      type,
      duration,
      date,
      caloriesBurned,
      createdAt: new Date(),
    };

    const docRef = await db.collection("workouts").add(newWorkout);
    res.status(201).json({ id: docRef.id, ...newWorkout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a Workout by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await db.collection("workouts").doc(id).delete();
    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a Workout by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    await db.collection("workouts").doc(id).update(updates);
    res.status(200).json({ message: "Workout updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

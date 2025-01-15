const express = require("express");
const { db } = require("../config/firebase"); // Import Firestore from Firebase config
const { formatFirestoreDocs, getFirestoreTimestamp } = require("../utils/firestoreHelpers");
const { validateWorkout } = require("../utils/validators");
const router = express.Router();

// Test Route: Verify that the route is working
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Workout routes are working!" });
});

// Get All Workouts
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("workouts").get();
    const workouts = formatFirestoreDocs(snapshot);
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a New Workout
router.post("/", async (req, res) => {
  const { errors, isValid } = validateWorkout(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const { userId, type, duration, date, caloriesBurned } = req.body;
    const newWorkout = {
      userId,
      type,
      duration,
      date,
      caloriesBurned,
      createdAt: getFirestoreTimestamp(),
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
  const updates = req.body;

  try {
    const { id } = req.params;

    await db.collection("workouts").doc(id).update(updates);
    res.status(200).json({ message: "Workout updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

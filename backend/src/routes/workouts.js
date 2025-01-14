const express = require("express");
const { db } = require("../config/firebase");
const router = express.Router();

// Get all workouts for a user
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query; // Assume userId is passed as a query parameter
    const snapshot = await db.collection("workouts").where("userId", "==", userId).get();
    const workouts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new workout
router.post("/", async (req, res) => {
  try {
    const workout = req.body;
    const docRef = await db.collection("workouts").add(workout);
    res.status(201).json({ id: docRef.id, ...workout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a workout
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("workouts").doc(id).delete();
    res.status(200).json({ message: "Workout deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

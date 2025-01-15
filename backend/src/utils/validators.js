/**
 * Validate workout data.
 * @param {Object} data - Workout data.
 * @returns {Object} - Validation result with errors and validity.
 */
const validateWorkout = (data) => {
    const errors = {};
    if (!data.userId) errors.userId = "User ID is required.";
    if (!data.type) errors.type = "Workout type is required.";
    if (!data.duration || isNaN(data.duration)) errors.duration = "Duration must be a valid number.";
    if (!data.date) errors.date = "Date is required.";
    if (!data.caloriesBurned || isNaN(data.caloriesBurned)) errors.caloriesBurned = "Calories burned must be a valid number.";
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };
  
  module.exports = { validateWorkout };
  
// script.js

// Select elements from the page
const dailyGoalInput = document.getElementById('dailyGoal');
const foodNameInput = document.getElementById('foodName');
const caloriesInput = document.getElementById('calories');
const addFoodButton = document.getElementById('addFood');
const totalCaloriesDisplay = document.getElementById('totalCalories');
const remainingCaloriesDisplay = document.getElementById('remainingCalories');
const resetButton = document.getElementById('reset');

// Variables to track data
let dailyGoal = 0;
let totalCalories = 0;

// Update remaining calories
function updateRemainingCalories() {
    const remaining = dailyGoal - totalCalories;
    remainingCaloriesDisplay.textContent = remaining >= 0 ? remaining : 0;
}

// Event: Set Daily Goal
dailyGoalInput.addEventListener('change', () => {
    dailyGoal = parseInt(dailyGoalInput.value) || 0;
    updateRemainingCalories();
});

// Event: Add Food
addFoodButton.addEventListener('click', () => {
    const foodName = foodNameInput.value.trim();
    const calories = parseInt(caloriesInput.value);

    if (foodName && !isNaN(calories)) {
        totalCalories += calories;
        totalCaloriesDisplay.textContent = totalCalories;
        updateRemainingCalories();
        foodNameInput.value = '';
        caloriesInput.value = '';
    } else {
        alert('Please enter valid food and calorie values!');
    }
});

// Event: Reset
resetButton.addEventListener('click', () => {
    dailyGoal = 0;
    totalCalories = 0;
    dailyGoalInput.value = '';
    totalCaloriesDisplay.textContent = 0;
    remainingCaloriesDisplay.textContent = 0;
});

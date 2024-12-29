function toggleMealPlan() {
    const mealPlanDiv = document.getElementById("meal-plan");
    const button = document.querySelector("button");

    // Toggle the display property
    if (mealPlanDiv.style.display === "none") {
        mealPlanDiv.style.display = "block";
        button.textContent = "Hide Meal Plan"; // Change button text
    } else {
        mealPlanDiv.style.display = "none";
        button.textContent = "Show Meal Plan"; // Change button text
    }
}

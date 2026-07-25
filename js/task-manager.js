   // Weekly Goal: Calculate the total weekly task goal for a user.
    function weeklyGoal(userName, dailyGoal, bonusTasks) {    

        // Output message to console
        console.log("Checking status for: " + userName); 
 
        // Calculate weekly goal based on number of workdays (5) per week
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        let totalGoal = weeklyGoal  + bonusTasks; 
 
        // Output results to web page
        let output = "User: " + userName + ", Total Weekly Goal: " + totalGoal;
        document.getElementById("goal-message").innerHTML = output;
    }
  

    // Add EventListener to btn, get form values and call weeklyGoal function
    const btn = document.getElementById("goal-btn");
    btn.addEventListener("click", function() {
        event.preventDefault(); // Prevent form submission
        let userName = document.getElementById("userName").value;
        let dailyGoal = parseInt(document.getElementById("dailyGoal").value);
        let bonusTasks = parseInt(document.getElementById("bonusTasks").value);
        weeklyGoal(userName, dailyGoal, bonusTasks);
    });

 // Task List Manager
  
// Global array to store tasks
let myTasks = [];

// ======================================
// Create the unordered list dynamically
// ======================================

// Reference the existing task-list div
const taskListDiv = document.getElementById("task-list");

// Create the unordered list
const taskList = document.createElement("ul");

// Give the list an ID
taskList.id = "user-tasks";

// Append the list to the task-list div
taskListDiv.appendChild(taskList);

// ======================================
// Reference existing page elements
// ======================================

const input = document.getElementById("task-value");
const addButton = document.getElementById("add-task");
const clearButton = document.getElementById("clear-list");

// ======================================
// Add Task Button
// ======================================

addButton.addEventListener("click", function () {

    // Get the task entered by the user
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Store the task in the array
    myTasks.push(task);

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = task + " ";

    // Create the Mark Complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Mark Complete";

    // Mark Complete button event
    completeButton.addEventListener("click", function () {
        listItem.style.textDecoration = "line-through";
    });

    // Add the button to the list item
    listItem.appendChild(completeButton);

    // Add the list item to the unordered list
    taskList.appendChild(listItem);

    // Clear the input field
    input.value = "";
    input.focus();
});

// ======================================
// Clear List Button
// ======================================

clearButton.addEventListener("click", function () {

    // Reset the array
    myTasks = [];

    // Remove all list items from the page
    taskList.innerHTML = "";
});
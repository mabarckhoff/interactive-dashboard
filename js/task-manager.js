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

  // ======================================
    // Task List Manager
    // ======================================
    
    // Global array to store tasks
    let myTasks = [];

    // ======================================
    // Reference existing page elements
    // ======================================

    const nameInput = document.getElementById("task-name");
    const priorityInput = document.getElementById("task-priority");
    const importantInput = document.getElementById("task-important");

    console.log(nameInput.value);
 
    // Buttons
    const addButton = document.getElementById("add-task");
    const deleteButton = document.getElementById("delete-list");

    // Event listensers
    addButton.addEventListener("click", function () {
        addTask();
         // Console logging
        console.log(JSON.stringify(myTasks));
    });
    deleteButton.addEventListener("click", function () {
        deleteList();
        
        // Console logging
        console.log(JSON.stringify(myTasks));
    });
   

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
    // Add Task Function
    // ======================================


    function addTask() {
        // Get the task entered by the user
        const task = {
            id: myTasks.length + 1,
            name: nameInput.value,
            priority: priorityInput.value,
            isImportant: importantInput.checked,
            isCompleted: false,
        };

        if (task.name === "" || task.priority === "") {
            alert("Please enter a task and priority.");
            return;
        }

        // Store the task in the array
        myTasks.push(task);

        // Create a new list item
        const listItem = document.createElement("li");
        listItem.id = `task-${task.id}`;
        listItem.textContent = `${task.name} - Priority: ${task.priority} `;

        // Create the Mark Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = task.isCompleted 
            ? "Undo" 
            : "Complete";
        
        // Apply priority styling
        if (task.priority === "High") {
            listItem.style.fontWeight = "bold";
        } 
        else if (task.priority === "Low") {
            listItem.style.fontStyle = "italic";
        }

        // Highlight important tasks in red
        if (task.isImportant == true) {
            listItem.style.backgroundColor = "red";
            listItem.style.fontWeight = "bold";
        }

        // Mark Complete button event
        completeButton.addEventListener("click", function () {
            listItem.style.textDecoration = "line-through";
            task.isCompleted = !task.isCompleted;
        });

        // Add the button to the list item
        listItem.appendChild(completeButton);

        // Add the list item to the unordered list
        taskList.appendChild(listItem);
        
        // Clear form inputs
        nameInput.value = "";
        priorityInput.value = "";
        importantInput.checked = false;
    
    }

    // ======================================
    // Delete List 
    // ======================================

    function deleteList() {
        // Reset te array
        myTasks = [];

        // Remove all list items from the page
        taskList.innerHTML = "";
    }


            
   // Weekly Goal: Calculate the total weekly task goal for a user.
    function weeklyGoal(userName, dailyGoal, bonusTasks) {    
        // Declare variables and values
        //let userName = userName;
        //let dailyGoal = dailyGoal; 
        // FIXED: Changed bonusTasks from string to number for correct arithmetic operation.
        //let bonusTasks = 2; 
 
        // Output message to console
        // FIXED: Added missing parenthesis.
        console.log("Checking status for: " + userName); 
 
        // Calculate weekly goal based on number of workdays (5) per week
        // FIXED: Corrected variable name from 'dialyGoal' to 'dailyGoal' and corrected multiplier from 15 to 5.
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        // Note: Check for data type issues
        // FIXED: Changed minus to plus. 
        let totalGoal = weeklyGoal  + bonusTasks; 
 
        // Output results to web page
        let output = "User: " + userName + ", Total Weekly Goal: " + totalGoal);
        document.getElementById("goal-message").innerHTML = output;
    }

    const btn = document.getElementById("submit-btn");

    // Add EventListener to btn
    btn.addEventListener("click", function () {
        event.preventDefault(); // Prevent form submission
        let userName = document.getElementById("userName").value;
        let dailyGoal = parseInt(document.getElementById("dailyGoal").value);
        let bonusTasks = parseInt(document.getElementById("bonusTasks").value);
        weeklyGoal(userName, dailyGoal, bonusTasks);
    });
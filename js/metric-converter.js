// Metric Converter

let convert_btn = document.getElementById("convert-btn");

// Listen for click event on the convert button
convert_btn.addEventListener("click", function() {
    event.preventDefault(); // Prevent form submission

    let input_value =  document.getElementById("numeric-value").value;
    // convert to numeric value
    input_value = parseFloat(input_value);

    let idx = document.getElementById("conversion-type").selectedIndex;
    let conversion_type = document.getElementsByTagName("option")[idx].value;
    alert(conversion_type);

    // test numeric value
    console.log(input_value);
    console.log(conversion_type);

    let new_value = 0;
    let message = "";

    // Perform conversion based on selected type
    if (conversion_type === "inch_to_cent") {
        new_value = input_value * 2.54;
        message = input_value + " inches is equal to " + new_value + " centimeters.";
    } else if (conversion_type === "foot_to_cent") {
        new_value = input_value * 30.48;
        message = input_value + " feet is equal to " + new_value + " centimeters.";
    } else if (conversion_type === "yard_to_meter") {
        new_value = input_value * 0.91;
        message = input_value + " yards is equal to " + new_value + " meters.";
    } else if (conversion_type === "mile_to_km") {
        new_value = input_value * 1.61;
        message = input_value + " miles is equal to " + new_value + " kilometers.";
    } else if (conversion_type === "cent_to_inch") {
        new_value = input_value * 0.39;
        message = input_value + " centimeters is equal to " + new_value + " inches.";
    } else if (conversion_type === "cent_to_foot") {
        new_value = input_value * 0.0328;
        message = input_value + " centimeters is equal to " + new_value + " feet.";
    } else if (conversion_type === "meter_to_yard") {
        new_value = input_value * 1.09;
        message = input_value + " meters is equal to " + new_value + " yards.";
    } else if (conversion_type === "km_to_mile") {
        new_value = input_value * 0.62;
        message = input_value + " kilometers is equal to " + new_value + " miles.";
    }
    // Show the result
    console.log(new_value);
    document.getElementById("conversion-result").innerHTML = message;
});


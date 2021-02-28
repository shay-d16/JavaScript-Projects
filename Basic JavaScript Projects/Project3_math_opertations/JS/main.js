function addition_Function() { //Create a new function called addition_Function
    var addition = 2 + 2; //Set addition variable to 2 + 2
    document.getElementById("Adding").innerHTML = "2 + 2 = " + addition; // Call the Addition return value to the HTML file
}

function subtraction_Function() { //Create a function that subtractions two numbers and returns the value
    var subtraction = 5 - 2; //Set the return value of 5 - 2 as the subtrattion variable
    document.getElementById("Subtracting").innerHTML = "5 - 2 = " + subtraction; //Call Subtraction return value to the HTML file
}

function multiplication() { //Create a function that multiplies two numbers
    var simple_Math = 6 * 8; //Set the return value of the operation
    document.getElementById("Multiplying").innerHTML = "6 x 8 = " + simple_Math; //Call the function and its return value to the HTML file
}

function division() { //Create a funciton that divides two numbers
    var simple_Math = 48 / 6; //Set the return value
    document.getElementById("Dividing").innerHTML = "48 / 6 = " + simple_Math;
} 




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

function more_Math() { //Create function that can do multiple operations in one variable
var simple_Math = (1 + 2) * 10 / 2 - 5; //Set the variable as the return value of this formula
document. getElementById("More Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; //Display a text description of the formula and its return value
}

function modulus_Operator() { //Create an operation that displays the remainder of two divided numbers
    var simple_Math = 25 % 6; //Set the variable as the return value (remainder)
    document.getElementById("Remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //Call the function and return value to the HTML file
}

function negation_Operation() { //Create a function that returns the opposite or negative form of a variable
    var X = 10; //Set the variable X to 10
    document.getElementById("Negation").innerHTML = -X; //Call the function and return value (-10) to the HTML file
}

var S = 5; // Set the variable 'S' to 5
S++; //Use the increment operator to increase the value of 'S' by 1, the return value being 6
document.write(S); //Print the return value 6 on the .html document

document.write("<br>"); //Create a line break between variables 'S' and 'M'

var M = 5.25; //Set the variable 'M' to 5.25
M--; //Use the decrement operator to reduce 5.25 by 1, the return value being 4.25
document.write(M); //Print return value 4.25 on the .html document
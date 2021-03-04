//BOOLEAN LOGIC
document.write("<h3><u>True or False</u></h3>"); //Underlined heading

document.write("65 is greater than 68: ");
document.write(65 > 68); //Use Boolean logic to determine if the condition is true or false: 'false'
document.write("<br><br><br>"); //Line breaks

document.write("34 is less than 45: ");
document.write(34 < 45); //Use Boolen logic to determine if the condition is true or false: 'true'
document.write("<br><br><br>"); //Line breaks

//DOUBLE EQUAL SIGNS
document.write("74 is equal to 74: ");
document.write(74 == 74); //Utilize == to return "true"
document.write("<br><br><br>"); //Line breaks

document.write("58 is equal to 65: ");
document.write(58 == 65); //Utilize == to return "false"
document.write("<br><br><br>"); //Line breaks

//TRIPLE EQUAL SIGNS
var x = 115; //Assign variable 'x' as a number data type
var y = 115; //Assign variable 'y' as a number data type
document.write("115 and 115 have the same data type and value: ");
document.write(x === y); //Return 'true' by ensuring to match the data type AND value
document.write("<br><br><br>"); //Line breaks

var q = "Twenty"; //Assign variable 'q' as a string data type
var r = 21; //Assign variable 'r' as a number data type
document.write("\"Twenty\" and 21 have the same data type and value: ");
document.write(q === r); //Return 'false' by writing a different data type and different value
document.write("<br><br><br>"); //Line breaks

var a = "32"; //Assign variable 'a' as a string data type
var b = 32; //Assign variable 'b' as a number data type
document.write("\"32\" and 32 have the same data type and value: ");
document.write(a === b); //Return 'false' by displaying a different data type but the same value for both
document.write("<br><br><br>"); //Line breaks

var f = "Duck"; //Assign variable 'f' as a string data type
var g = "Ducks"; //Assign variable 'g' as a string data type
document.write("\"Duck\" and \"Ducks\" have the same data type and value: ");
document.write(f === g); //Return 'false' by writing the same data type but a different value for both
document.write("<br><br><br>"); //Line breaks

//AND OPERATOR
document.write("16 is equal to 16 AND 21 is greater than 17: ")
document.write(16 == 16 && 21 > 17); //Utilize AND operator to return 'true'
document.write("<br><br><br>"); //Line breaks

document.write("200 is less than 100 AND 314 is greater than 214: ")
document.write(200 < 100 && 314 > 214); //Utilize AND operator to return 'false'
document.write("<br><br><br>"); //Line breaks

//OR OPERATOR
document.write("50 is equal to 50 OR 50 is less than 51: ");
document.write(50 == 50 || 50 > 51); //Utilize OR operator to return 'true'
document.write("<br><br><br>"); //Line breaks

document.write("62 is less than 46 OR 62 is greater than 67: ");
document.write(62 < 46 || 62 > 67); //Utilize OR operator to return 'false'
document.write("<br><br><br>"); //Line breaks


//TYPEOF OPERATOR
document.write("<h3><u>Typeof Operator</u></h3>"); //Underlined heading

document.write("What data type is \"heartbeat\": ");
document.write(typeof "heartbeat"); //Display what data type 'heartbeat' is
document.write("<br><br><br>"); //Line breaks


//TYPE COERCION
document.write("<h3><u>Type Coercion</u></h3>"); //Underlined heading

document.write("\"12\" + 4 = ");
document.write("12" + 4); //Utilize type coercion
document.write("<br><br><br>"); //Line breaks

//NOT A NUMBER FUNCTION
function my_Function() { //Test the NaN function to determine if the return value of 0/0 is a number or not
document.getElementById("Test").innerHTML = 0/0; //Diplay return value in the .html file
} //Return value: NaN (Not a Number)

//IS NOT A NUMBER FUNCTION
function isNaN_function1() { //Create a function to ask the computer if it is true or false that '12467' is NOT a number
    document.getElementById("isNaN Test1").innerHTML = isNaN("12467"); //Display return value to the .html file
} //Return value: false

function isNaN_function2() { //Create a function to ask the computer if it is true or false that "Shay was here!" is NOT a number
    document.getElementById("isNaN Test2").innerHTML = isNaN("Shay was here!"); //Diplay return value in the .html file
} //Return value: true

//NOT OPERATOR
function not_Function() { //Create function for NOT operator
    document.getElementById("Not").innerHTML = !(6 > 8); //Utilize the NOT operator to return and display 'true'
}

function not_Function2() { //Create function for NOT operator
    document.getElementById("Not2").innerHTML = !(10 == 10); //Utilize the NOT operator to return and display 'false'
}

//CONSOLE LOG FUNCTION
console.log(12 * 10); //Perform a math operation with the console.log() function

console.log(101 > 103); //Use Boolean Logic and console.log() to display "false" in the console




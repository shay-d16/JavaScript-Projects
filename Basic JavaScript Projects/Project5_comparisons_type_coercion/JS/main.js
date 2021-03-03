document.write(typeof "heartbeat"); //Display what data type 'heartbeat' is

document.write("<br><br><br>") //Line breaks

document.write(65 > 68); // Use Boolean logic to determine if the condition is true or false

document.write("<br><br><br>") //Line breaks

document.write(34 < 45); //Use Boolen logic to determine if the condition is true or false

function my_Function() {//Test the NaN function to determine if the return value of 0/0 is a number or not
document.getElementById("Test").innerHTML = 0/0; //Diplay return value in the .html file
} //Return value: NaN (Not a Number)

function isNaN_function1() { //Create a function to ask the computer if it is true or false that '12467' is NOT a number
    document.getElementById("isNaN Test1").innerHTML = isNaN("12467"); //Display return value to the .html file
} //Return value: false

function isNaN_function2() {//Create a function to ask the computer if it is true or false that "Shay was here!" is NOT a number
    document.getElementById("isNaN Test2").innerHTML = isNaN("Shay was here!"); //Diplay return value in the .html file
} //Return value: true
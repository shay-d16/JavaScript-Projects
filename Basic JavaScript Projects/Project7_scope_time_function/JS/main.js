//GLOBAL VARIABLE
var m = 8; //The variable is located outside of the function, making it a global variable
function Multiply_numbers_1() { //Create a function to multiply numbers
    document.write(m * 100 + "<br>"); 
}
function Multiply_numbers_2() { //Create another function for multiplying the same variable 'm' 
    document.write(m * m * m + "<br>");
}
Multiply_numbers_1(); //Display result
Multiply_numbers_2(); //Display result

//LOCAL VARIABLE
function Divide_numbers_1() { //Create a function for dividing numbers
    var n = 8; //Assign LOCAL variable, within this function
    document.write(480 / n);
}
function Divide_numbers_2() { //Second function, but without an assigned variable
    document.write(n / 2);
}
Divide_numbers_1(); //Display result
Divide_numbers_2(); //Does not display anything because 'n' hasn't yet been defined in this function
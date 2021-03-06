//GLOBAL VARIABLE
document.write("<h3><u>Global and Local Variables</u></h3>")
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
    console.log(n / 2);
}
Divide_numbers_1(); //Display result
Divide_numbers_2(); //Does not display anything because 'n' hasn't yet been defined in this function

//IF AND ELSE STATEMENTS
function Time_function() { //Create a function for constional statements
    var Time = new Date().getHours(); //Assign variable 'Time' as a new Date object
    if( Time < 12 == Time > 0) { //Condition: if the hour in you time zone is less than 12 and greater than 0, execute function
        document.getElementById("Time_of_day").innerHTML = "I hope you are having a wonderful morning, "
        + document.getElementById("firstName").value + "!"; //Print this string plus the input value to the HTML file
        document.body.style.backgroundColor = "#f1d1d6"; //Also, change the background color of the page to a light shade of pink
    }
    else if (Time >= 12 == Time < 18) { //Condition: If the hour is greater than or equal to 12 and less than 18, display these returns instead
        document.getElementById("Time_of_day").innerHTML = "I hope you are having a splendid afternoon, "
        + document.getElementById("firstName").value + "!"; //Condition true, dislay this string and the input value
        document.body.style.backgroundColor = "#f3c7cd"; //Also change the background color
    }
    else { //Condition false, execute this function
        document.getElementById("Time_of_day").innerHTML = "I hope you enjoy the rest of your evening, " 
        + document.getElementById("firstName").value + "!"; //Print this to the HTML file
        document.body.style.backgroundColor = "#d87093"; //Change the background color
    }
}




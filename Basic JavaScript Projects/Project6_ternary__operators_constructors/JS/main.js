//TERNARY OPERATOR
function age_Function() { //Create a function in which you can utilize ternary operators to make a program that outputs whether or not the user is old enough to vote
    var Age, Can_vote; //Assign two variables
    Age = document.getElementById("Age").value; //
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!"; //Using the ternary operator '?' set the condition for the value of the variable
    document.getElementById("Voting Age").innerHTML = Can_vote; //
}


//NESTED FUNCTION
function nestedFunction() { //Create a function containing a nested function
    document.getElementById("Nested_Function").innerHTML = add(); //Call the add() function
    function add() { //Create nested add() function
        var counter = 0; //Set the counter to 0
        function plus() {counter += 1;} //Create another nested function that will add '1' to the counter
        plus();
        return counter; //Display return value
    }
}
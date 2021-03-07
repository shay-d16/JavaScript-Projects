//CONCAT() METHOD
function full_Sentence() { //Create a function
    var part_1 = "A dream "; //Assign four different variables as pars of a whole sentence
    var part_2 = "is a ";
    var part_3 = "wish your ";
    var part_4 = "heart makes!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); /*Set the variable of 'whole_sentence' equal
     to the result of 'part_1' being connected to 'part_2', 'part_3', and 'part_4' using the concat() method */
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//SLICE() METHOD
function slice_Method() { //Create a function that utilizes the slice() method
    var Sentence = "All you need is faith, trust, and pixie dust!"; //Assign 'Sentence' as a string
    var Section = Sentence.slice(34, 45); /* Use the slice() method to extract a section of the string; 
    return the extracted section in a new string*/
    document.getElementById("Slice").innerHTML = Section; //Print the return value, which is equal to the value of 'Section'
}

//UPPERCASE() METHOD
function uppercase_Method() { //Create a function that utilizes the toUpperCase() method
    var str = "Pancakes are delicious!!"; //Assign local variable 'str' to the string 'Pancakes are delicious!'
    var res = str.toUpperCase(); /*Use toUpperCase() method on the 'str' value, then set the value of this
     method equal to the value of the variable 'res' */
    document.getElementById("UpperCase").innerHTML = res; //Print 'res' value to the element id 'UpperCase' on the HTML file
}

//SEARCH() METHOD
function search_Method(){ //Create a function that utilizes the search() method
    var str = "Not the gumdrop buttons!!"; //Assign local variable 'str' as this string
    var h = str.search("gumdrop"); /*The search() method searches for a specified value,
    and returns the position of the match */
    document.getElementById("Search").innerHTML = h; //Display the position of the specified value
}

//TOSTRING() METHOD
function string_Method() { //Create a function that utilizes the toString() method
    var m = 2395; //Assign variable 'm' to the number 2395
    document.getElementById("Numbers").innerHTML = m.toString(); // Use the toString() method to return the number as a string
}

//TOPRECISION() METHOD
function precision_Method() { //Create a function that utilizes the toPrecision() method
    var q = 7539296.8907789655345675091634; //Assign the variable 'q'
    document.getElementById("Precision").innerHTML = q.toPrecision(10); //The toPrecision() method formats a number to a specified length
}

//TOFIXED() METHOD
function toFixed_Method() { //Create a function that utilizes the toFixed() method
    var num = 907.5380563; //Assign the variable 'num' equal to the number
    var n = num.toFixed(2); //Use toFixed() method to convert a number into a string, rounding the number to keep only two decimals
    document.getElementById("To Fixed").innerHTML = n; //Print return value to HTML file
}

//VALUEOF() METHOD
function valueOf_Method() { //Create a function that utlizes the valueOf() method
    var num = 167; //Assign the variable 'y' equal to the number 167
    var y = num.valueOf(); //Use the valueOf() method to display the primitive value of a number
    document.getElementById("Value Of").innerHTML = y; //Print the return value to the HTML file
}
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
function uppercase_Method() { //Converts a string to uppercase letters
    var str = "Pancakes are delicious!!"; //Assign variable 'str' to the string 'Pancakes are delicious!'
    var res = str.toUpperCase(); /*Use toUpperCase() method on the 'str' value, then set the value of this
     method equal to the value of the variable 'res' */
    document.getElementById("UpperCase").innerHTML = res; //Print 'res' value to the element id 'UpperCase' on the HTML file
}

//SEARCH() METHOD

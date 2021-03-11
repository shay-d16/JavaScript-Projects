//WHILE LOOP
function counting_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++; //Use the increment operator (++) to add on in JavaScript
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//FOR LOOP
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//STRING LENGTH
function string_Length_Function() {
    var str = "If you\'re a bird, I\'m a bird.";
    var nb = str.length; //The length property returns the length of a string (number of characters)
    document.getElementById("String_length").innerHTML = nb;
}

//ARRAYS
function cat_pics() {
    var Cat_Picture = []; //'Cat_Picture' is the object
    Cat_Picture[0] = "sleeping"; 
    Cat_Picture[1] = "playing"; //0, 1, 2, and 3 are the indexes
    Cat_Picture[2] = "eating"; 
    Cat_Picture[3] = "purring";
    //'sleeping', 'playing', 'eating', and 'purring' are the properties of the object
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function array_Function() {
    var Emotions = [];
    Emotions[0] = "energetic";
    Emotions[1] = "joyful";
    Emotions[2] = "exhausted";
    Emotions[3] = "disappointed";
    Emotions[4] = "melancholy";
    Emotions[5] = "inspired";
    Emotions[6] = "motivated";
    document.getElementById("Array").innerHTML = "Today I am feeling " + Emotions[0] +
        ", " + Emotions[6] + ", and " + Emotions[5] + "!";
}

//CONST KEYWORD
function constant_function() {
    const Pokemon = {name:"Sylveon", generation:"VI", abilities:"Cute Charm and Pixelate"};
    Pokemon.type = "Fairy-type";
    Pokemon.species = "Eevee";
    document.getElementById("Constant").innerHTML = Pokemon.name + " is my favoite " +
        Pokemon.type + " poke&#769mon! It is an evolved " + Pokemon.species + "!";
}

//LET KEYWORD
function let_function() {
    var 
}

//RETURN STATEMENT
function return_statement_function() {
    var 
}
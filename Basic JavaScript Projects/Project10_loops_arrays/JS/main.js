//WHILE LOOP
function counting_down() {
    var Digit = "";
    var X = 10;
    while (X > 0) {
        Digit += "<br>" + X;
        X--; //Use the decrement operator (--) to subtract one from the variable
    }
    document.getElementById("Counting_down").innerHTML = Digit;
}

//FOR LOOP
var Sailor_scouts = ["Sailor Moon", "Sailor Mercury", "Sailor Mars", "Sailor Jupiter", "Sailor Venus", "Sailor Uranus", "Sailor Neptune", "Sailor Pluto"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Sailor_scouts.length; Y++) {
        Content += Sailor_scouts[Y] + "<br>";
    }
    document.getElementById("List_of_Sailor_scouts").innerHTML = Content;
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
function constant_function() { //The const keyword creates a constant
    const Pokemon = {name:"Sylveon", generation:"VI", abilities:"Cute Charm and Pixelate"};
    Pokemon.type = "Fairy-type";
    Pokemon.species = "Eevee";
    document.getElementById("Constant").innerHTML = Pokemon.name + " is my favoite " +
        Pokemon.type + " poke&#769mon! It is an evolved " + Pokemon.species + "!";
}

//LET KEYWORD
function let_function() { // The let keyword declares variables that can have block scope
    var j = "MIND";
    document.write(j);
    {
        let j = "OVER"; //In this block scope, j is equal to a different string
        document.write("<br>" + j);
    }
    var k = "MATTER";
    document.write("<br>" + k);
}

//RETURN STATEMENT
function return_function(name) {
    return "How are you feeling tonight, " + name;
}
document.getElementById("Return").innerHTML = return_function("Shay") + "?";

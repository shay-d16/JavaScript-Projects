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
    var nb = str.length;
    document.getElementById("String_length").innerHTML = nb;
}
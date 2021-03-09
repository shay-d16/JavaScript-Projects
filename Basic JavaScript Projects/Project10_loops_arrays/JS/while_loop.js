function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++; //Use the increment operator (++) to add on in JavaScript
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
function my_Dictionary() { //Create a Dictionary function
    var Tarot = { //Set the variable to Tarot
        Card: " The High Priestess",
        Category: " Major Arcana",
        Element: " Water",
        Up_Key: " Upright Keywords: Intuition, sacred knowledge, divine feminine, the subconscious mind",
        Rev_Key: " Reversed Keywords: Secrets disconnected from intuition, withdrawl and silence",
    };
    delete Tarot.Element; //Delete this key before the value is displayed
    document.getElementById("Dictionary").innerHTML = Tarot.Card + "<br>" + Tarot.Category + "<br>" + Tarot.Element;
} //Call the function and display each value, Tarot.Element should instead return 'undefined' on the .html file
function my_Dictionary() {
    var Tarot = {
        Card: " The High Priestess",
        Category: " Major Arcana",
        Element: " Water",
        Up_Key: " Upright Keywords: Intuition, sacred knowledge, divine feminine, the subconscious mind",
        Rev_Key: " Reversed Keywords: Secrets disconnected from intuition, withdrawl and silence",
    };
    document.getElementById("Dictionary").innerHTML = Tarot.Card + "<br>" + Tarot.Category;
}
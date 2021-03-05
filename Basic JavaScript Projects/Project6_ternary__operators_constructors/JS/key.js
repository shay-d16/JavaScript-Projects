function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
 document.getElementById("Keywords_and_Constructors").innerHTML = 
 "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufatured in " + Erik.Vehicle_Year
}

//Constructor function for the Film object
function Film(Title, Year, Director, Runtime) {
    this.Film_Title = Title;
    this.Film_Year = Year;
    this.Film_Director = Director;
    this.Film_Runtime = Runtime;
}
var Mummy = new Film("<i>The Mummy</i>", 1999, "Steven Sommers", "2h 4m");
var Thor = new Film("<i>Thor: Ragnarok</i>", 2017, "Taika Waititi", "2h 10m");
var Blonde = new Film("<i>Legally Blonde</i>", 2001, "Robert Luketic", "1h 36m");
var Witch = new Film("<i>The Love Witch</i>", 2016, "Anna Biller", "2h");
var Midsommer = new Film("<i>Midsommer</i>", 2019, "Ari Aster", "2h 28m");
var Practical = new Film("<i>Practical Magic</i>", 1998, "Griffin Dunne", "1h 44m");
function favFilms() {
    document.getElementById("Film_Constructor").innerHTML =
    "One of my favorite films is " + Mummy.Film_Title +
    ", made in " + Mummy.Film_Year + " and directed by " + 
    Mummy.Film_Director + "."
}
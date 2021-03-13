//SWITCH STATEMENT
function Pokemon_type_Function() { //Create a funciton that utilizes the switch statement
    var Type_Output;
    var Types = document.getElementById("Type_Input").value;
    var Type_String = "My favorite type of Poke&#769mon is the ";
    switch(Types) { 
    /*The switch statement performs different actions based on the conditions present;
    it's a type of conditional statement */
        case "Normal": 
    //Inside switch statements are cases, which are the various conditions that are evaluated
            Type_Output = Type_String + "Normal-type!";
        break;
        case "Fire":
            Type_Output = Type_String + "Fire-type!";
        break;
        case "Water":
            Type_Output = Type_String + "Water-type!";
        break;
        case "Grass":
            Type_Output = Type_String + "Grass-type!";
        break;
        case "Electric":
            Type_Output = Type_String + "Electric-type!";
        break;
        case "Ice":
            Type_Output = Type_String + "Ice-type!";
        break;
        case "Fighting":
            Type_Output = Type_String + "Fighting_type!";
        break;
        case "Poison":
            Type_Output = Type_String + "Poison-type!";
        break;
        case "Ground":
            Type_Output = Type_String + "Ground-type!";
        break;
        case "Flying":
            Type_Output = Type_String + "Flying-type!";
        break;
        case "Psychic":
            Type_Output = Type_String + "Psychic-type!";
        break;
        case "Bug":
            Type_Output = Type_String + "Bug-type!";
        break;
        case "Rock":
            Type_Output = Type_String + "Rock-type!";
        break;
        case "Ghost":
            Type_Output = Type_String + "Ghost-type!";
        break;
        case "Dark":
            Type_Output = Type_String + "Dark-type!";
        break;
        case "Dragon":
            Type_Output = Type_String + "Dragon-type!";
        break;
        case "Steel":
            Type_Output = Type_String + "Steel-type!";
        break;
        case "Fairy":
            Type_Output = Type_String + "Fairy-type!";
        break;
    //If there is no case match, the default keyword is used to specify what code to run
        default: //In this case, this string will display if there is no case match
            Type_Output = "Please enter a type exactly as written on the list.";
    }
    document.getElementById("Output").innerHTML = Type_Output;

}

//GRADIENT COLOR
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d"); //The getContext() method returns a drawing context on the canvas
var my_gradient = ctx.createLinearGradient(0, 0, 200, 0); //This method creates a linear gradient object
my_gradient.addColorStop(0, "red"); //This method specifies the colors and position in a gradient object
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient; //fillStyle sets or returns the color, gradient, or pattern to fill the drawing
ctx.fillRect(10, 10, 150, 80); //This method draws a "filled" rectangle

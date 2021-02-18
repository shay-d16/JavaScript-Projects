var X = "Hello, World!" //Define variable X as 'Hello, World!'

window.alert(X); //Create a pop-up alert that displays the value of X

var S = " My name is Shalondra Rossiter, but you can call me Shay. <br><br>" //Give variable S a string value
var S = S.fontcolor("hotpink"); //Use fontcolor method on S variable
document.write(S) //Display S

var I = " \"You must find the place inside yourself where nothing is impossible.\" <br> -Deepak Chopra <br><br>" //Use backslash to display quotation marks
var I = I.fontcolor("mediumslateblue"); //Set font color of I to 'mediumslateblue'

document.write(I) //Display variable I

var B = " \"Within every woman there is a wild and natural creature,"
+ " a powerful force, filled with good instincts,"
+ " passionate creativity, and ageless knowing.\""
+ " -Clarissa Pinkola Estes <br><br>" //Use the + operator to concatenate multiple strings
var B = B.fontcolor("#cd5c5c"); //Use fontcolor method on variable B
document.write(B)

var fourAgreements = "\"The Four Agreements\" <br>", One = " -Be Impeccable With Your Word <br>", Two = " -Don\'t Take Anything Personally <br>", Three = " -Don\'t Make Assumptions <br>", Four = " -Always Do Your Best <br>", fourAgreementsAuthor = " Author: don Miguel Ruiz <br><br>"; //Define 'fourAgreements' family
var fourAgreements = fourAgreements.fontcolor("darkslategrey"); //Use fontcolor method on 'The Four Agreements' text
var One = One.fontcolor("palevioletred"); //Use fontcolor method on each of the elements in this family
var Two = Two.fontcolor("lightcoral");
var Three = Three.fontcolor("cornflowerblue");
var Four = Four.fontcolor("plum");
var fourAgreementsAuthor = fourAgreementsAuthor.fontcolor("darkslategrey");

document.write(fourAgreements) //Display each element in this family
document.write(One)
document.write(Two)
document.write(Three)
document.write(Four)
document.write(fourAgreementsAuthor)

var L = 10; //Define variable L as the number 10
var M = 17; //Define variable M as the number 17
function add(L, M){ //Create add funtion
    return L + M;
}
var sum = add(L, M);
document.write(sum)//Display the sum of L and M




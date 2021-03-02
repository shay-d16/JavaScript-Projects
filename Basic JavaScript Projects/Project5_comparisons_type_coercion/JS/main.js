document.write(typeof "heartbeat");

function my_Function() {
document.getElementById("Test").innerHTML = 0/0;
}

function isNaN_function1() {
    document.getElementById("isNaN Test1").innerHTML = isNaN("12467");
}

function isNaN_function2() {
    document.getElementById("isNaN Test2").innerHTML = isNaN("Shay was here!");
}
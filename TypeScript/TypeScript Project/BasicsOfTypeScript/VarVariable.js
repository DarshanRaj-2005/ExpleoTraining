"use strict";
var value1 = 10;
function myfunc() {
    value1 = 20;
    console.log("The Value is", value1);
}
myfunc();
//Using var as function scoped
function myfun() {
    var value1 = 20;
    console.log("The Value is", value1);
}
myfun();
//Using var as block scoped
function fun() {
    if (true) {
        var value1 = 20;
        console.log("The Value is", value1);
    }
    console.log("The Value is", value1);
}
fun();

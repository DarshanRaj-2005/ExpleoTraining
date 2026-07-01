"use strict";
console.log("Without Optional:", cal(3, 5));
console.log("With Optional:", cal(3, 5, 8));
function cal(num1, num2, num3) {
    if (num3 != undefined) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}

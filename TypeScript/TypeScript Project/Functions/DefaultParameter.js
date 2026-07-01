"use strict";
console.log("With Default Parameter:", sub(10));
console.log("Without Default Parameter:", sub(10, 7));
function sub(num1, num2 = 5) {
    return num1 - num2;
}

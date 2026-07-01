"use strict";
console.log(addition(2, 5));
console.log(addition(2, 5, 3, 4));
function addition(n1, ...n2) {
    let res = n1;
    for (let i = 0; i < n2.length; i++) {
        res += n2[i];
    }
    return res;
}

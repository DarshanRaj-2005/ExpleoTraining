"use strict";
//Using let as global. Const also same as let but it is unchangable
let value = 10;
//let value = 20 can't redeclare because of let, only var can reclare
console.log("The Value is", value);
function myfuncs() {
    value = 20;
    console.log("The Value is", value);
}
myfuncs();
//Using let as function scoped
function myfuns() {
    let value = 20;
    console.log("The Value is", value);
}
myfuns();
//Using let as block scoped
function funs() {
    if (true) {
        let value = 20;
        console.log("The Value is", value);
    }
}
funs();
for (let i = 0; i < 3; i++) {
    let num = 10;
    console.log(num);
}
// console.log(num) get error because it is block scoped

"use strict";
let seccode = Symbol("seccode");
const user = {
    name: "alice",
    age: 20,
    [seccode]: "Hello There"
};
console.log(user.name);
console.log(user[seccode]);

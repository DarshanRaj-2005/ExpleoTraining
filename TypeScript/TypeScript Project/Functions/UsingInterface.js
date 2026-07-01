"use strict";
class sqaure {
    a = 4;
    name;
    constructor(name) {
        this.name = name;
    }
    area() {
        console.log("The Name of the shape is", this.name);
        console.log("The Area of ", Math.round(Math.PI * (this.a ** 2)));
    }
}
let obj1 = new sqaure("square");
obj1.area();

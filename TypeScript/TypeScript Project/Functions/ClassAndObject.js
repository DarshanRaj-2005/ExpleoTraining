"use strict";
class Animal {
    name = "";
    breed = "";
    color = "";
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        console.log("The Color of ", this.name, " is ", this.color);
    }
    sound() {
        console.log(this.name, "Barks");
    }
    breedname() {
        console.log("The breed of ", this.name, " is ", this.breed);
    }
}
let obj = new Animal("Dog", "Shepard");
obj.breedname();
obj.sound();
obj.setColor("red");
obj.getColor();

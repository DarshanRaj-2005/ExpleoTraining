"use strict";
let fruits = ['Apple', 'Orange', 20];
console.log(fruits);
console.log(fruits[2]);
let fruit = ['orange', 'Orange', 'Apple', 'apple'];
console.log(fruits);
console.log(fruits[0]);
//Array methods
//sort
console.log("Sorted Array: ", fruit.sort());
//push
fruit.push("Banana");
console.log("Push:", fruit);
//pop
fruit.pop();
console.log("Pop:", fruit);
//concat
let veg = ['beetroot', 'carrot'];
console.log("Concated Array:", fruit.concat(veg));
//indexof
console.log("Index of:", fruit.indexOf("Apple"));
//copywithin
let numbers = [10, 20, 30, 40, 50];
numbers.copyWithin(0, 3);
console.log("CopyWithin", numbers);
//fill
let number = [1, 2, 3, 4, 5];
number.fill(0);
console.log("Fill:", number);
//shift
console.log("Shift:", fruit.shift());
//unshift
fruit.unshift("Banana", "Grapes");
console.log("Unshift:", fruit);
//splice 
console.log("Splice:", fruit.splice(1, 2));

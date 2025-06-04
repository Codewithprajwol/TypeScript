"use strict";
// example of descriminating unions and exhaustiveness checking
function findShape(shape) {
    switch (shape.shape) {
        case "circle":
            return Math.PI * (shape.radius ** 2);
        case "rectangle":
            return (shape.length * shape.breadth);
        case "square":
            return (shape.side ** 2);
        default:
            const _exhaustive = shape;
            return _exhaustive;
    }
}
const squareResult = findShape({ shape: 'square', side: 2 });
console.log(squareResult);
const dog = {
    name: "dogs",
    barks: true
};
const animal = dog; // here it will not complain because dog is subtype of Animal
const newAnimal1 = function (data) {
    console.log(data.name);
};
const newAnimal = newAnimal1;
newAnimal({ name: "husky", barks: true });
//this is incase of function paramter asking for Dog type but we put Animal type 
//type Narrowing and type widening
const test1 = "hello"; // "hello" literal value 
let test2 = "hi"; //string
//this is type narrowing since test2 is of let so it can be andy value of type string as it can be reassigned but not in constant (test1)
//type narrowing
let test3;
// test3.length// it will give error since test3 can be undefined as well
if (test3) {
    console.log(test3.length); // now we narrow down to the string
}
//now let's talk about totality ..it means in function all the paramater condition have return type (should have all path of return) ...the it's totality and typescript does that
function totalityTest(data) {
    if (typeof data == 'string') {
        return data.length;
    }
    return data.toString().length; // if not return for all path or cases it will return the undefined but we have mentioned that it will return the number so it will ensure totality here
}

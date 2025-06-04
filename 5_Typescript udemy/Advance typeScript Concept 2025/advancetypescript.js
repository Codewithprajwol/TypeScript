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

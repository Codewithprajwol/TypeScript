"use strict";
const data = ['hi', 'how', 'are', 'you'];
const mytuples = ['hello', 'hello'];
// mytuples[0]='kello'//throws an error becasue it's read only property
const testly = {};
const testa = {
    id: 1,
    name: "prajwol",
    lastname: "shrestha",
    hello: "boy"
};
console.log(typeof testa);
const praj = "0";
var direction;
(function (direction) {
    direction[direction["up"] = 7] = "up";
    direction[direction["down"] = 8] = "down";
    direction[direction["left"] = 9] = "left";
    direction[direction["right"] = 10] = "right";
})(direction || (direction = {}));
console.log(direction.down);

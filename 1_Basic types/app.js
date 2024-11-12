"use strict";
let a = 12;
let b = a;
//? b also has 12 since copy has been made and a &b are in different location 
let c = [1, 23, 4, 45, 5];
let d = c;
//? here d is just the reference to c and they are pointing toward the same memory     
let e = 12;
e = 10;
let f = [1, "prajwol", 1];
//? yedi hami array ko type fixed and size fixed garyyau vanya tyo tuple ho
//?enumerations: type to store named constants
var data;
(function (data) {
    data["name"] = "Prajwol";
    data["class"] = "15";
    data[data["status"] = 404] = "status";
})(data || (data = {}));
data.class;
//? any:- when we make variables uing any ..... it means that we are using js simple as that 
//? but when we use unknow you can use any other types but later you have to first check the type to apply some modification to it
let num;
//? we use VOID if function is returning nothing
function test() {
    console.log('host');
}
//? if we use never it says that never return from that function so that other later execution will be stooped.
function fddt() {
    while (true) {
    }
}
// fddt()
console.log("hello world!");

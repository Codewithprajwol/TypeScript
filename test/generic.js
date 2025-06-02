"use strict";
//let's talk about generics
// function test():genericType{
// }
const hest = (test) => {
    return test;
};
const sata = hest('prajwol');
console.log(sata);
// function newTest:genericType(data:T){
//     return data
// }// this is not correct
function newTest(data) {
    return data;
} //now this works fine
const testfunction = function (data) {
    return 'love';
};
const testFunction2 = (data) => {
    return data;
};
// const newTest: genericType = <T>(data: T) => data;

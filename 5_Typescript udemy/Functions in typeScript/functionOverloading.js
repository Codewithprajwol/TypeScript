//? let's see how we can use functionOverloadin in typeScript
var reserve = function (departureDate, returnDateorDepartingFrom, departingFromorDestination, destination) {
    if (returnDateorDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateorDepartingFrom,
            departingFrom: departingFromorDestination,
            destination: destination
        };
    }
    else if (typeof returnDateorDepartingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateorDepartingFrom,
            destination: departingFromorDestination,
        };
    }
    throw new Error('please give the valid information');
};
console.log(reserve(new Date(), new Date(), "NewYork", "Washington"));
console.log(reserve(new Date(), "NewYork", "Washington"));
//! it work fine but there are more advance tool to handle this thing but you can do that to normal and simple funciton ...we use generics to handle these instead of this.
//?let's do some practice question now
//? 1. Delcare a function named greet that takes a string parameter name and returns a gretting message
function greet(greeting) {
    return "".concat(greeting);
}
function getProduct(iid, data) {
    return { id: iid, name: data };
}
var add = function (num1, num2) {
    return num1 + num2;
};
var subtract = function (num1, num2) {
    return num1 - num2;
};
// function add1:Calculator(num1,num2)=>{
//     return num1+num2
// }//! this is not valid ....you can know in detail on readme.md of same folder
//? 4.Create a function named logMessage that takes a string message and logs it to the console, returning void. Aslo, create a function named throwError that takes a string message and throws an error, returning never.
function logMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
throwError('something went wrong');

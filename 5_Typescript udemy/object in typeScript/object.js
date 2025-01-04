var person = {
    name: "prajwol",
    age: 20
};
var car = {
    brand: "BMW",
    color: "Black",
};
//? here we have defined the car as object but in type hierarcy Object is the parent type of many liek array , constructor and other.. so there might be problem we can do like below:-
car = [];
car = function () { };
//? here we expect the car as object and should have two properties (brand and color) but it's an empty array now
var newCar = {
    brand: "BMW",
    color: "Black",
};
newCar = []; // now here it will give error because typescript expect to have (brand and color properties as string)

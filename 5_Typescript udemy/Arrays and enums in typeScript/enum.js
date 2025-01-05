//? enums are quiet frequently used in typeScript code so it's necessay to have complete knowledge of it
var Status_Loading = "loading";
var status_stopped = "stopped";
// Status_Loading="ram"//? it will throw an error since it is a constant
//! here instead of using liek status_loading, status_closed we can use enums and one thing to know is enums are readonly so we cannot assign then so it will work as constant and we don't have to write the long name.
//? like this below:-
// here it will automatically assignes the numeric value as well
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3
})(Direction || (Direction = {}));
Direction[0] === "up";
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
var user = {
    name: "prajwol",
    email: 'hell@gmail.com',
    password: "1234",
    role: Roles.ADMIN
};
//? here enums can be heterogenetic ...what is meant by this is like below:-
var data;
(function (data) {
    data["name"] = "ram";
    data[data["role"] = 12] = "role";
    data["email"] = "ram@love.com";
})(data || (data = {}));
var Direction4;
(function (Direction4) {
    Direction4[Direction4["up"] = 0] = "up";
    Direction4[Direction4["down"] = 1] = "down";
    Direction4[Direction4["left"] = 2] = "left";
    Direction4[Direction4["right"] = 3] = "right";
})(Direction4 || (Direction4 = {}));
var direction3 = 0 /* Direction3.up */;
var dir = Direction4.down;
//? here what you have to understand is that enum created with const will not be compiled to object in javaScript only the variable we created will be compiled but in normal enum whole object will be compiler....const enum is used when you don't want to show the objects in JS.
var oDirection = {
    up: 0,
    down: 1,
    left: 2,
    right: 3
};

//? here now oDirection is exaclty works as enums ...some developer use it like this...

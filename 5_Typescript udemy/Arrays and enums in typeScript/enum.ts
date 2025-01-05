//? enums are quiet frequently used in typeScript code so it's necessay to have complete knowledge of it

const Status_Loading="loading";
const status_stopped="stopped";

// Status_Loading="ram"//? it will throw an error since it is a constant
//! here instead of using liek status_loading, status_closed we can use enums and one thing to know is enums are readonly so we cannot assign then so it will work as constant and we don't have to write the long name.


//? like this below:-
// here it will automatically assignes the numeric value as well
enum Direction{
    up, //0...here if i write up=5 rest will follow this and increments it 
    Down,//1
    Left,//2
    Right//3
}

Direction[0]==="up"

enum Roles{
    ADMIN="admin",
    AUTHOR="author",
    EDITOR="editor"
}

type Person={
    name:string,
    email:string,
    password:string;
    role:Roles;
}

const user:Person={
    name:"prajwol",
    email:'hell@gmail.com',
    password:"1234",
    role:Roles.ADMIN
}

//? here enums can be heterogenetic ...what is meant by this is like below:-
enum data{
    name="ram",
    role=12,
    email="ram@love.com"
}
//? it can be combination of both string and number


//! and one thing to rememeber is that enums are compiled down to the javascript object ...that's why we are getting the Roles.ADMIn, Roles.AUTHOR, Roles.EdITOR in javaScript where other type are not compiled as it is valid in javaScript.

//TODOS: let's learn about Object vs Enums


 
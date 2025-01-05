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

const enum Direction3{
    up,
    down,
    left,
    right
}

enum Direction4{
    up,
    down,
    left,
    right
}

let direction3=Direction3.up
let dir=Direction4.down

//? here what you have to understand is that enum created with const will not be compiled to object in javaScript only the variable we created will be compiled but in normal enum whole object will be compiler....const enum is used when you don't want to show the objects in JS.

const oDirection={
    up:0,
    down:1,
    left:2,
    right:3
} as const;

// oDirection.up="hello"//? it will throw the error as it is only for read properties
//? here now oDirection is exaclty works as enums ...some developer use it like this...

//! let's talk about computed value inside enums
enum AccessPermisssion{
    None=0,
    Read=1,
    Write=2,
    ReadWrite= Read +Write,//it will be 3 here
    Delete=4,
    All=ReadWrite | Delete,// it is union operator so it will be 7
}

//! enums as union and types
enum ShapeKind{
    Circle="circle",
    Square="square"
}

type Circle={
    kind:ShapeKind.Circle;
    radius:number;
}

type Square={
    kind:ShapeKind.Square;
    sideLength:number;
}
 
//? now here kind propeties is a string literal which is strict and cannot be changed
let circle:Circle={
    radius:100,
    // kind:ShapeKind.Square//! it will throw the error 
    kind:ShapeKind.Circle
}


function printShape(shape:ShapeKind/*here typeScript automatically converts enums into union of circle and square */){
    console.log(shape)
}
printShape(ShapeKind.Circle)


//TODOS: let's do some homeworks here aobut enums, array and tuples

//?1.Create an array numbers that only accepts numbers and another array strings that only accepts strings.

const array1:number[]=[1,3,4]
const array2:Array<string>=['a','b','c']

//? 2. Create a tuple person that holds a string (name) and a numer (age).
  let person3:[string,number]=['prajwol',20]

//?3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers(x,y). Attempt to modify their elements and observe the TypeScript error.

const array3:readonly (string)[]=['red','blue','green'];
const point:readonly [number,number]=[1,3];

//?4. create an enum called statusEnum that should have 3 properties Active, Inactive, Pending

enum StatusEnum{
    Active,
    Inactive,
    Pending
}

//?5. Create an object as const called Status with the same structures as an StatusEnum

 const Status={
    Active:true,
    Inactive:false,
    Pending:false
 }as const;

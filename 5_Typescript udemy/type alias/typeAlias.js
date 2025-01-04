var firstname = "Mark";
firstname = 123;
firstname = [];
function returnParam(param) {
    return param;
}
function multiplyByTwo(number) {
    if (typeof (number) === "number") {
        console.log('hey i am running');
        return number * number;
    }
    else {
        console.log('please return the valid number');
    }
}
console.log('hello');
var data = multiplyByTwo(2);
console.log(data);
var lastName = new Error('hello'); //here typeScript is automatically infering as error and saying lastName as error rather than customError
var date = new Date();
var num = 12;
//Duck typing is used by typescript for inference of types
//? If it looks like a duck and quacks like a duck, it's a duck
var love = 'hello'; //here i am anotating love:string as string ...this is called type annotating
function sum(a, b) {
    return a + b;
}
var sum1 = sum(1, 3); // here sum1 is automaticallly saying sum1 is a number ...which is called type inference done by typeScript itself
function params(data) {
    console.log(data);
}
params("love");
// params(false)//it will show error
params(12);
var myData = 'latest';
var val = true; // it is called boolean type literals
var throwErr = function (errMessage) {
    throw new Error(errMessage);
};
var strings = ['a', 'b']; //here in case of string[] we can use Object because array extends Object
var strings1 = ['a', 'b'];
var func1 = function () { return 2; }; //instead of Function we can write Object since it the parent type of function
//?Type Casting
var middleName = "Mark"; // before <any> it was string but when you do <any> it type Cast string to any;
var oneLatName = "Mark"; //same as above is happening it just another method
var user = {
    name: "Mark",
    email: "mark@email.com"
};
function fetchUser() {
    return user;
}
var fetchuser = fetchUser();
//?some practice 
var city = "New York"; //string
var population = 84000000; //number
var age = 27; //27
var oldAge = 49; //49
var newAge = oldAge; //49
console.log('hii');
console.log(typeof (newAge));
var data1 = new Map(); //Map<any,any>
var score = [90, 86, 100]; //number[]
age = 85; //! error
score.push(10); //? no error
score.push("new Score"); //!error
var customAge = 50; //!error
var primitive = new Date(); //!error
var years = []; //?no error

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
params(false); //it will show error
params(12);
var myData = 'latest';
var val = true; // it is called boolean type literals
/*Literal Boolean:


const isOn: true = true; // `isOn` can only ever be `true`.

Literal String:

const status: 'success' = 'success'; // `status` can only be the string `'success'`.

Literal Number:

const count: 42 = 42; // `count` can only be the number `42`.
Union of Literals: You can combine multiple literal types:


// const direction: 'up' | 'down' = 'up'; // `direction` can be either `'up'` or `'down'`
In short, a literal is a fixed, exact value written directly in your code. It represents a specific, unchanging value of a certain type.
 */

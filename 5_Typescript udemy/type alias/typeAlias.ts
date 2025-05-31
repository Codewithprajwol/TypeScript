let firstname:any="Mark";

firstname=123
firstname=[]

function returnParam(param){//here it will give error because we haven't defined the type here
    return param;
}


function multiplyByTwo(number:unknown){
    if(typeof(number)==="number"){
        console.log('hey i am running')
        return number*number;
    }
    else{
        console.log('please return the valid number')
    }
}
console.log('hello')

const data=multiplyByTwo(2)
console.log(data)

//!above example is also called type narrowing

//?Now let's talks about Type Alias
//some of the js types are 
/* data Array , Map, set , promise, RegExp , Error, function ,symbol weakMap weakSet */

type customString=string;   //?the naming convention is to use upperCamel Case or pascal Case

type customNumber=number;// this is called type decleration

type CustomData=Date;

type customError=Error;


let lastName:customError=new Error('hello')//here typeScript is automatically infering as error and saying lastName as error rather than customError
let date:CustomData=new Date()

let num:customNumber=12




//Duck typing is used by typescript for inference of types
//? If it looks like a duck and quacks like a duck, it's a duck


let love:string='hello'//here i am anotating love:string as string ...this is called type annotating

function sum(a:number,b:number){
    return a+b;
}

const sum1=sum(1,3)// here sum1 is automaticallly saying sum1 is a number ...which is called type inference done by typeScript itself

// when ever you think the variable hold the complex type you should annotate the type manually ...but if it simple you can skip that


//?type union
type note=string|number;
type note1=string|undefined;


function params(data:note){
   console.log(data)
}

params("love")
// params(false)//it will show error
params(12)

let myData:note1='latest'



//?Conditional Types

type fire1=string;
type fire2=number;

type water=fire1 extends string ? boolean: string; //here this ternary operator is using to define the type of the water
let val:true=true;// it is called boolean type literals

 

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


//?Type Hirerachy

/* unknow is the most liberal type where as never is most specific types 

in between many other cames so i will give you the example like this:-
  any is the parent type and strin,numeber, boolean are teh sub-type so instead of using sub-type you can use parent type as well

  here array is the subtype of object ...so here object can be used to define array but it's good practice to use the stricted type which is array in case of object and array.
*/
type check=any extends unknown ? true:false;// it returns true

type check1=string extends any? true:false;// returns true

type check2=null extends any? true:false;//return true

type check3=undefined extends void? true:false;//return true

type check4=[] extends object? true:false;//return true 

type check5=Function extends object? true:false;//return true

type check6=object extends Function? true:false;// return false;


const throwErr=(errMessage:string)=>{// it will throw the error and stop the execution of program so it return the never type ...i.e. it will return never (type)
    throw new Error(errMessage)
}


let strings:string[]=['a','b']//here in case of string[] we can use Object because array extends Object

let strings1:Object=['a','b']

const func1:Object=()=>2 //instead of Function we can write Object since it the parent type of function




//?Type Casting
let middleName
=+<any>"Mark";// before <any> it was string but when you do <any> it type Cast string to any;
let oneLatName="Mark" as any; //same as above is happening it just another method

let user={
    name:"Mark",
    email:"mark@email.com"
};

type User={// here when we try to get the data from fetch() if we know the exact object type we can make our custom type alias ...so that we don't have to see the general type. you can hover in line no. 165 without this type User.
    name:string;
    email:string;
}

function fetchUser(){
    return user as User;
}

const fetchuser=fetchUser()

//?some practice 

let city="New York"//string

let population=84000000; //number

const age=27; //27

let oldAge= 49 as const;//49

let newAge=oldAge //49
console.log('hii')
console.log(typeof(newAge))

let data1=new Map(); //Map<any,any>

let score=[90,86,100];//number[]

type primitive=string |number | boolean; //string | number| boolean

type CustomName="John" extends string ? string: "John" // string

type CustomAge=typeof newAge extends number ? 59 :number; //59

type CheckData=typeof data1 extends Object ?true: false; //true

type checkScore=typeof score extends never? {} :[] //[]


age=85;//! error
score.push(10); //? no error
score.push("new Score")//!error
let customAge:CustomAge=50;//!error
let primitive:primitive=new Date();//!error
let years:checkScore=[]//?no error
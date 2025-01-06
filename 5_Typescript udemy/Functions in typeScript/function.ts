//?let talk about how function should be typed in typeScript with different function declearation..

//! function decleration
function printString(name:string,age:number):string{
    return `my name is ${name} and age is ${age}`
}

//! function expression
const printNumber=function(name:string,age:number):number{
    return 123
}

//! Arrow function
const printData=(name:string):string=>{
    return 'hello'
}

//! now let's talk about the optional paramter in function

function countryUser(name:string,age:number,countryName?:string):string{
    if(countryName){
        return 'hello from nepal'
    }
    return 'hello from my country'
}
countryUser('name',12)

//? what you have to understand is that when you use the optional parameter then you should use that paramter a t the end of the function parameter....otherwise it will throw an error



//! now let's talk about custom parameter and custom types in function
enum AgeUnit{
    Years="years",
    Months="months"
}
type greetingFunction=(greeting:string)=>string;

type Person={
    name:string,
    age:number,
    ageUnit:AgeUnit,
    // greet:Function;// this is also possible but it is not strictly typed
    // greet:(greeting:string)=>string //? this is called the function call signature
    greet:greetingFunction;//? you can type this as above
}

const person:Person={
    name:'hero',
    age:12,
    ageUnit:AgeUnit.Years,
    greet:(helo)=>{
           return `${helo}`
    }
}


function convertAgeToMonths(person:Person):Person{
    if(person.ageUnit===AgeUnit.Years){
        person.age=person.age*12;
        person.ageUnit=AgeUnit.Months;
    }
    return person
}


//? function call signature

//? lets talk about how anymous function behaves and how typescript infere the paramtere of anymous function

const students:string[]=["hello",'ram','sam']


students.map((student)=>{
    console.log(student)
})
students.map(function(student){
    console.log(student)
})
//! here in anymous function in map ...student parameter inside anymous function is properly type..which means typeScript can infere the type of the student properly


//! now lets see how to type the funciton which doesnot return anything and about never

//? to said this function return nothing you can use void 

//?for never let's take a example below:-
function throwError():never{ //? here instead of never you can use void but never is good bcz it more stricted version
    throw new Error('someThing went wrong')
}

//? you can check here
type test=never extends void? true :false;//return true
type test2=void extends never? true:false;//return false


//! let's see how we can strictly type async function in typescript

async function retPromise(data:string):Promise<any>{

}

const testing=async function (id:number):Promise<any>{}

const testing2=async (id:number):Promise<string>=>{//? we can use Promise inbuilt anotation which is generic in this case...for simple it's good but for long long object it might get cluttery...so we can use type here like below
    return Promise.resolve('helloo')
}

type User={
    name:string,
    age:number
}
const heroUser={
    name:'hero',
    age:12
}

async function helloUser (user:User):Promise<User>{
      return Promise.resolve(user)
}  


//! now let's talk how can we use rest paramter along with funciton in typeScript
function multiplyBy(by:number,...numbers:number[]){
    return numbers.map((number)=>by*number)
}
console.log(multiplyBy(2,1,2,3,4,5,5,6,7,9))


//? so if i want only two number in the array then,

const args=[2,3]
// const angle=Math.atan2(...args)//! it will throw an error since multiple value can be there

const args1=[4,5] as const;

const angle1=Math.atan2(...args1)//? now here typeScript will not throw error because we have done [4,5] as constant so it's readonly and only two value should be defined here...

//? you can do same thing like this using tuples

const args2:[number,number]=[1,5]
const angle2=Math.atan2(...args2)


//! now let's talk about parameter destructuring in typeScript

type NumberOK={
    a:number,
    b:number,
    c:number
}

const numberObject={
    a:12,
    b:13,
    c:15
}

function sum({a,b,c}:NumberOK):number{
    return a+b+c
}

sum(numberObject)
//? here typeScript can see it's NumberOK then and while function call it will have the properties a,b,c with number type so typeScript will refer it as number ...if we sent something as string it will throw an error as below:-

// sum({a:12, b:14,c:"hello form nepal"})//! it will throw an error since c is a string 





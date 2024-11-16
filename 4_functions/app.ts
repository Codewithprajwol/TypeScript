function abcd(name:string,cb:(data:string)=>string):string{
    console.log(cb("data"))
    return 'hey'
}
abcd("prajwol",(value:string)=>{
   console.log(value)
   return 'solved'
})

//?function Overloading

// function fun(a:string):void;
// function fun(a:string, b:number):number;

// function fun(a:any,b?:any){
//     if(typeof a==="string" && typeof b==="undefined")
//     {
//         console.log("hey")
//     }
//     else if(typeof a==="string" && typeof b==="number"){
//         return 123;
//     }
//     else throw new Error('something went wrong');
// }

// fun("love")
// fun("love",23)

//? Generic Function
function logger<T>(a:T){
    
}
logger<string>('hey')
logger<number>(12)
logger<boolean>(true)

//?Interface Generics

interface user<T>{
    name:string;
    age:number;
    key:T
}
function personalInfo(obj:user<string>):string{
    console.log(obj)
    return 'hey'
}
personalInfo({name:'Prajwol',age:20,key:"Shrestha"})

//? class Generics
class BottleMaker<T>{
    constructor(public name:T){}
}
let b1=new BottleMaker('love')
let b2=new BottleMaker(12)

console.log(b1,b2)

//? type Assertion
let p:any=12;

// (p as number).toString()
(<number>p).toString()

//? type Casting

let z:number=Number("12")
console.log(z)

//? Not-null assertion operator
//! if we put ! sign in any variable we are telling typeScript that we are sure it not going to be null or undefined

let a:undefined|null |number

a!=12

//? type narrowing
function love(arg:number | string){
    if(typeof arg === "number") return "number"
    else if(typeof arg=="string") return "string"
    else{
        throw new Error('kuch to huwa hyaa ...kuch ho gaya hai');
    }
}
console.log(love(17))
console.log(love("love"))

//? type guards -> type narrowing

//! now lets talk about type narrwoing in class using typegauard

class tvRemote{
    switchOffTv(){
        console.log('Tv switched off');
    }
}

class carRemote{
    switchOffCar(){
        console.log('Car switched off');
    }
}
let r1=new tvRemote()
let c1=new carRemote()

function switchOff(device:tvRemote | carRemote ){
    if(device instanceof tvRemote){
        device.switchOffTv()
    }
    else if( device instanceof carRemote){
        device.switchOffCar()
    }
    else{
        throw new Error('kuch toh huwa hai ....kuch ho gaya hai')
    }
}
switchOff(r1)
switchOff(c1)
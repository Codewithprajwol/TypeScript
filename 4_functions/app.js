function abcd(name, cb) {
    console.log(cb("data"));
    return 'hey';
}
abcd("prajwol", function (value) {
    console.log(value);
    return 'solved';
});
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
function logger(a) {
}
logger('hey');
logger(12);
logger(true);
function personalInfo(obj) {
    console.log(obj);
    return 'hey';
}
personalInfo({ name: 'Prajwol', age: 20, key: "Shrestha" });
//? class Generics
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker('love');
var b2 = new BottleMaker(12);
console.log(b1, b2);
//? type Assertion
var p = 12;
// (p as number).toString()
p.toString();
//? type Casting
var z = Number("12");
console.log(z);
//? Not-null assertion operator
//! if we put ! sign in any variable we are telling typeScript that we are sure it not going to be null or undefined
var a;
a != 12;
//? type narrowing
function love(arg) {
    if (typeof arg === "number")
        return "number";
    else if (typeof arg == "string")
        return "string";
    else {
        throw new Error('kuch to huwa hyaa ...kuch ho gaya hai');
    }
}
console.log(love(17));
console.log(love("love"));
//? type guards -> type narrowing
//! now lets talk about type narrwoing in class using typegauard
var tvRemote = /** @class */ (function () {
    function tvRemote() {
    }
    tvRemote.prototype.switchOffTv = function () {
        console.log('Tv switched off');
    };
    return tvRemote;
}());
var carRemote = /** @class */ (function () {
    function carRemote() {
    }
    carRemote.prototype.switchOffCar = function () {
        console.log('Car switched off');
    };
    return carRemote;
}());
var r1 = new tvRemote();
var c1 = new carRemote();
function switchOff(device) {
    if (device instanceof tvRemote) {
        device.switchOffTv();
    }
    else if (device instanceof carRemote) {
        device.switchOffCar();
    }
    else {
        throw new Error('kuch toh huwa hai ....kuch ho gaya hai');
    }
}
switchOff(r1);
switchOff(c1);

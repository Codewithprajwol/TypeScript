const a:number[]=[1,2,3]//? type of the number then []

const b:Array<string>=["a","b","c"]//? we can define like this 

const c:Array<string | number>=["1",1]//? we can define like this as generic
const d:(string| number)[]=["1",1]//?  we can define like that also


type Aeroplanes=Aeroplane[];
type Caterer={
    name:string,
    address:string,
    phone:number
 }
 type Seates={
    [key:string]:string;
 }
type Aeroplane={
    model:string,
    flightNumber:string,
    timeOfDeparture:Date,
    timeOfArrival:Date,
    caterer:Caterer,
    seates:Seates
}

let airplane:Aeroplanes=[{
    model:'Airbus A380',
    flightNumber:"A2201",
    timeOfDeparture:new Date(),
    timeOfArrival:new Date(),
    caterer:{
        name:"special food ltd",
        address:'484, some street, new York',
        phone:9860611070,
    },
    seates:{
        A1:'prajwol shrestha',
        A2:'sajit Maharjan',
        A3:'my lord ',
    }
}]

//? now let's talk about the tuples 

//! first why its necessary look below

let person:(string|number)[]=["prajwol","shrestha",21]
//? here if i want this person array to have only 3 values like above ...but if we set the type of person like above we can add multiple value again like ["prajwol","shrestha",21,23,"ram"] and more so if you want only three value to exist tuples come into play:

let person1:[string,string,number,string?]=["prajwol","shrestha",21,'shresthaprajwol161@gmail.com']//? now it's a tuple

//? we can make type also of tupples

type Data=[string, string,number,string?]

const userData:Data=["prajwol","shrestha",21,"here this string is optional"]


type ListOfStudents=[string, boolean,...string[]]//? here if i do ...string[] or ...number[] it will throw error because typescript doesnot know how many string is going to be used here AND when you use rest operator typescript automatically infer as optional type and the order of rest operation can be anywhere inside tuples


const passsingStudents:ListOfStudents=["classIII",true,"ram","sam","hari","here more and more can come"];

type stringBooleanAndNumber=[...number[],string, boolean ]//? here tyepscript first looks the string and boolean is there or not and then see the number array..which can be of any length

const mix:stringBooleanAndNumber=[1,3,3,4,'love',true]//? it is valid here

//! now let's talk about readOnly arrays and tuples in typeScript

let num:readonly number[]=[1,3,4,4]

// num[2]=5;//! there it will give the error as it's used readOnly here
// num.push(4)//! it will also give error

//? same goes for tuples like this:-
type TestTuple= readonly[string, string, boolean]

const testing:TestTuple=["ram","sam",true]

// testing[0]="sam"//! it will throw error bcz it's readOnly property

//? so for array you can use like that
type a=Readonly<string[]>;
type b=ReadonlyArray<(string|number)>;

const data3:b=['ram',1]
// data3[1]="sam"//? it will throw an error

//?another method of assigning  readOnly tuple //..remember in above we are using small readonly but now we are using Readonly

type g=Readonly<[string,string]>


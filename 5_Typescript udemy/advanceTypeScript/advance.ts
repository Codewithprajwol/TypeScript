//? in advance we have to understand what are subtype or supertype .....

//? here we can say array is the subtype of the object and object is the supertype of the array

//?You can think of B as a general blueprint and A as a more detailed version of that blueprint.
//?If something works with the general blueprint (B), it will also work with the more detailed version (A).

//! let's talk about how typeScript checks compability
// let numbers:number[]=[1,2,3,4,5,6];

//? here we know this above array of number we define can be replaced by 'object' since array of number is subtype of the object.

let numbers:object=[1,2,3,4,5,6];//? it will not throw array

let num=[1,34,5]//?if we don't give any type typeScript infere as number[]....so how and what it does is , it uses assignment as well as subtypes and tries to narrow down to the perfect assignment.we keep going further down the tree to reach the subtypes that fits our requirement perfeclty.

//? we want to put array of numbers instead of object because as a developer we want our type to be more strict and as close as possible to represent the value that will be saved in our variable.

//? to make our life easy while infering a type, typeScript leans towards assigning more general and closest type possible to a value rather that stricted and rigid value.

let x='y'//string and not literal value

const y='ram'//it assigns y as string literal

let z=78;

var c=false;//it give a value of boolean

var d=null;// it gives any and it because in tsconfig.json there we have strictnullchecks:true (commented)

const p={
    x:12
}//here x is not number literal it's number since object value can be changed

enum Roles{
    admin='admin',
    author='author'
}

let user=Roles.admin//here when it is let typescript infere ohh... it user in let so it can be changed ot the type of user will be Roles...it can be Roles.admin or Roles.author later also ...but when we declear as cont user=Roles.admin....it will be Roles.admin...bcz value cannot be changed in const.

const data=Roles.admin//here type of data is Role.admin which is 'admin' string literal


//! Type Casting

// const num1=<const>{
//     x:10,
//     y:{
//         z:12
//     }
// };// here we can use this const keyword or <const> above 

const num1={
    x:10,
    y:{
        z:12
    }
}as const;// here we can use this const keyword or <const> above 

// num1.x=12//? it's read only properties

let firstNameField=<HTMLInputElement>document.querySelector('#input')! // it says firstNameField as element or null
firstNameField.value//? here it will give error since typescript is infere this element as only normal element not a HtmlInputElement.so to prevent that we can do typeCasting like above or you can use 'as' keyword here

//?here ! sign refer this above element will be not be null 

//! totality is something that provide you to have strict type but also checks the corner cases that help you a lot. For eg.
type Weakdayas= 'mon'| 'tues'|'wednes'|'thursday'|'friday'

type Day=Weakdayas|'sat'|'sun'|undefined

function nextDayForWeekDay(weakday:Weakdayas):Day{
    switch(weakday){
        case "mon":return 'tues';
        case "tues":return 'wednes';
        case "wednes":return 'thursday';
        case "thursday":return "friday";
    }

}//? here all cases will be included otherwise typeScript will throw error because if we haven't included friday...and when we input friday we will get undefined that our retutn says Day so it will throw error ...here if i do undefined here it will not throw error!! that's cool.


//! Descriminated Union

let lastname="shrestha"

console.log(typeof lastname)

type cat={
    type:'cat';
    purrs:boolean;
}
type dog={
    type:'dog';
    barks:boolean;
}
type Animal =cat | dog;

let cat:Animal={
    type:'cat',
    purrs:true
}
let dog:Animal={
    type:'dog',
    barks:true
}

function animalReaction(animal:Animal){
   switch(animal.type){
    case "cat":{
        return 'hi cat'
        }
    case "dog":return 'hi dog'
   }
}
animalReaction(dog)

/*
?This works because TypeScript uses discriminated unions (also known as tagged unions or algebraic data types). Let me explain this step by step in simple terms:

?What is a Discriminated Union?
?A discriminated union is a way to define a type that can be one of several options, where each option has a common property that distinguishes it from the others.

In your code:

?type is the discriminant property: Both cat and dog types have a type property that is a literal string ("cat" or "dog"). This property is used to differentiate between the two.

?Union type: The Animal type is a union of cat | dog. This means a variable of type Animal can either be:

?A cat (with type: 'cat' and purrs: boolean)
?A dog (with type: 'dog' and barks: boolean).
*/






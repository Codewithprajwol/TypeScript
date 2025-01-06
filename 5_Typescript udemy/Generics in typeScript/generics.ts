function returnParam<T>(param:T):T{
    return param
}
const returntype1=returnParam<string>('hello')
const returntype2=returnParam<number>(123)


type genericTypeFunc=<T>(praam:T)=>T;

// const returnFunc:genericTypeFunc=(data)=>{
//     return data
// }
//!without type we can use like this but the good practice is to use genericTypeFunc
const returnFunc:<T>(praam:T)=>T=(data)=>{
    return data
}

returnFunc('mer juta japani')//? it will work fine



//?generics with function expression

const returnAnotherFunc=function <U>(param:U):U{
    return param
}


type ObjectType={
    myParam:<T, X>(param1:T,param2:X)=>X;//? we can use as many generics as we like 
}


//! now lets see how can we use genrics with function declerations

//? A generic function declaration refers to the definition of a function that is designed to work with different data types, rather than being restricted to a single specific type. This allows the function to be used in a more flexible and reusable way across different contexts.

type NewFunc=<T>(array:T[])=>T;


const newFunc:NewFunc=(array)=>{
    return array[0]
}//? it will return the first index 

const result1=newFunc(['1','2','4'])

type NewFunc1<T>=(array:T[])=>T//? now this is called function delecration generics

const newFunc1:NewFunc1<number>=(array)=>{
    return array[0]
}
const result2=newFunc1([1,2,3])


//? Generic and Constraints with Array

type HasLength={
    length:number;
}

function logLength<T extends HasLength>(item:T):void{
    console.log(item)
}
logLength(result1)
logLength({length:12})

//? Control: You ensure that the type passed to a function or class meets specific criteria.
//? Safety: Helps prevent errors by making sure certain properties or methods exist on the type.
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
//let's talk about generics

type genericType=<T>(data:T)=>T;

// function test():genericType{

// }

const hest:genericType=(test)=>{
      
    return test
}

const sata=hest<string>('prajwol')
console.log(sata)


// function newTest:genericType(data:T){
//     return data
// }// this is not correct

function newTest<T>(data:T):T{
            return data
}//now this works fine


type test1=<U>(data:U)=>U;
type test2<U>=(data:U)=>U;



const testfunction=function <u>(data:u):string{
    return 'love'
}

type test5=<U>(data:U)=>U;

const testFunction2:test5=<T>(data:T)=>{
    return data;
}

// const newTest: genericType = <T>(data: T) => data;
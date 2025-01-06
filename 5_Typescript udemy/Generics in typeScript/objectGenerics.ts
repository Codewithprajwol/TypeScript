//? let's see how we can use generic in objects.

type objeGeneric<K,V>={
    key:K,
    value:V
}

const object1:objeGeneric<number,string>={
    key:1234,
    value:'hello'
}

const object2:objeGeneric<string,number[]>={
    key:'hi',
    value:[1,3,4,5,6]
}

//? here we can use constraints in object as well ...here's how

type HasId={
    id:number
}

function printId<T extends HasId>(obj:T):void{
    console.log(obj.id)
}

const user={
    id:12,
    name:'Prajwol from Bhanjyang'
}
const product={
    name:"laptop"
}

printId(user)
printId({id:12,name:"hello"})//?here id must be there
// printId(product)//! here it says id should be decleared here


//now let's talk about key of type operator

type Events={
    id:number;
    date:Date;
    type:"indoor" | 
    "outdoor";
}
//? so now if i want to make the union of these keys of event we can use keyof operator to do so

type unionOfKeysOfEvents=keyof Events //? here what you have to remember is that keyof keyword only takes the type object like Event above...

let idOfEvent:unionOfKeysOfEvents="id";
let dateofEvent:unionOfKeysOfEvents="date"


//! now let's talk about some type of index signatures

//?first type of index signature
type Numeric={
[key:number]:string;
}

type NumericKeyOf=keyof Numeric;//? here typeScript automatically infer that NumericKeyOf is a number

type numberAndString={
    [key:string]:string;//? here the question is like how it's number and string we have implicitly written it is going to be string...but what you have to understand is that javascript treat object key number as string ....that's why when we have to access the properties we do like object_name["number"];
}

type StringKeyOfKeyOf=keyof numberAndString;

//? here is the example
const stringObject:numberAndString={
    0:'ram',//here it will not throw error
    data:'ram'
}

console.log(stringObject["0"])//? it eventually converts into string


//? now the prolem is you have a object and it has four properties and you want to behave that object in such a way that if some person doesnot write some properties it should work ....we can achiever using index signature and keyof Operator...here is the example below:-

type Person={
    name:string,
    age:string,
    address:string,
}
// type test=Person["name"]//? this is also valid okey
type PartialPerson={
    [K in keyof Person]?:Person[K] |null; //? it can also might be undefined like string | null |undefined(...it is set by TypeScript Automatically)
}
const partialPerson:PartialPerson={
    name:"prajwol",//? only this value also works fine
    // age:"12",
    // address:'love'
}


type ServiceList=userDetailsAPIResponse['serviceList']//? this is what we called keying-in or index accessed types in typescript ..we are gone end up using this index accessed types multiples times in our code
type userDetailsAPIResponse={
    id:number;
    name:string;
    serviceList:{
        count:number;
        services:{
            id:number;
            name:string;
            price:number
        }[]
    }
}

function FetchUserDetails(name:string):Promise<userDetailsAPIResponse>{
    return new Promise((res,rej)=>{
        if(name){
            
            res({
                id:23,
                name:'john',
                serviceList:{
                    count:2,
                    services:[
                        {
                            id:1,
                            name:'Accounting',
                            price:48,
                        }
                    ]
                } 
            })
        }
        else rej(new Error('pass a valid name first please'))
    })
}

FetchUserDetails('john').then((res)=>{
    console.log(res)
    printServiceList(res.serviceList)
}).catch((err)=>console.log(err));

function printServiceList(serviceList:ServiceList):void
{
    console.log(serviceList)
}


//? let's talk about the keyof operator in typeScript
type Events={
    id:number;
    data:Date;
    type:'indoor' | 'outdoor';
}

//? here keyof keyword generates the all the union of the keys of Events object written above

type UnionOfKeyOfEvents=keyof Events;
const sata:UnionOfKeyOfEvents='id'
/*If you use UnionOfKeyOfEvents, TypeScript will only ??allow the specific keys that exist in the Events type. It ensures that the variable can only be one of the keys defined in the Events object, and if you try to use any key that doesn't exist in Events, TypeScript will throw an error.*/

type Numeric={
    [key:number]:string;
}

type NumericKeyOf=keyof Numeric;
//? here type of NumericKeyOf is a number

type NumberAndString={
    [key:string]:string;
}

type NumberAndStringKeyOf=keyof NumberAndString//?here it's number and string because this is how javascript object works ...it automatically converts the number into string so..typeScript begin smart suggest it can be string or number. 


//! let talk about tyoe0f operator in typeScript
let greeting="hello world";
let firstName:typeof greeting;//? now it's good if i change the greeting to number the firstName will be number 

const user1={
    name:"prajwol",
    age:21
}

let tom:typeof user1={
    name:'ramam',
    age:12
}

//? we will see the adavance useCase of typeOf operator when we will see the typeGuard.

  
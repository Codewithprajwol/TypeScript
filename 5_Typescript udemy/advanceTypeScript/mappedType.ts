namespace japan{
    type Weakdayas= 'mon'| 'tues'|'wednes'|'thursday'|'friday'

type Day=Weakdayas|'sat'|'sun'|undefined


type NextDays={
    [w in Weakdayas]:Day
}//? this will loop through each Weakdayas and make like this
//? mon:day; tues:day; wednes:day; and more

const nextDay:NextDays={
    mon:'tues',
    tues: 'wednes',
    wednes: 'thursday',
    thursday: 'friday',
    friday: 'sat',
}
console.log(nextDay)
}
namespace mappedTypesinadvance{
    type Artist={
        id:number;
        name:string;
        bio:string;
    }
    // type ArtistForEditing={
    //     id:number;
    //     name?:string;
    //     bio?:string;
    // }//? doing this is a good but first it's like writing same code again and another is it Artist type get large it get difficult to manage... in that case we can use 'mapped' types in typeScript.

    type MappedArtistForEdit={
        [property in keyof Artist]?:Artist[property];
    } & {id:number}; //? here we have used the intersection and tell typeScript that id shoulb be manditory.
    const artist:Artist={
        id:1,
        name:'prajwol',
        bio:'hey, i am prajwol'
    }
    const editedArtist:MappedArtistForEdit={
        id:1,
        bio:'hello, I am Justin'
    }
}
//! let's talk about conditional types in typeScript
namespace conditionalTYpes{

        interface Animal{
            live():void;
        }

        interface Dog extends Animal{
            woof:()=>void;
        }
        type Example=Dog extends Animal? string:number;

       //? we are doing like this
       //? SomeType extends otherTypes ? TrueType:FalseType;

       type isString<T>=T extends string? true:false;//? ohh it's for types we can make types out of it.

       type A=isString<string>;//?returns true
       type B=isString<number>;//? returns false
}

//?let's practice conditional typing
type answer_1 = number extends 56 ? true : false; //false
type answer_2 = 76 extends number ? true : false;// true
type answer_3 = string[] extends any ? true : false;//true
type answer_4 = string[] extends any[] ? true : false;//true
type answer_5 = unknown extends any ? true : false;//true
type answer_6 = any extends any ? true : false;//true
type answer_7 = Date extends { new (...args: any[]): any } ? true : false;//false
type answer_8 = typeof Date extends { new (...args: any[]): any }//true
  ? true
  : false; 

  //?so when i do date only it's only like ():string and whe i do typeof Date then its both ():string and new(...args:any[]):Date


  namespace constrintInConditionalTypes{
    interface User{
        id:number;
        name:string;
        email:string;
    }
    interface WritePermissions{
        write:true
    }
    interface ReadPermissions{
        write:false;
    }
    interface Admin extends User,WritePermissions{

    }
    interface Author extends User,WritePermissions{}
    interface Reader extends User,ReadPermissions{}

    type FilterWritable<T>=T extends {write:true} ? true:false;

    type writable=FilterWritable<Admin>//return true
    type readalbe=FilterWritable<Reader>//return false

  }

namespace inferKeyword{
    type ArrayElementType<T>=T extends (infer E)[] ? E:T;

    type TypeOne = ArrayElementType<string[]>;

//string
    type TypeTwo = ArrayElementType<number[]>;
//number

    type TypeThree = ArrayElementType<(number | string | boolean)[]>;

// number | string | boolean)
    type TypeFour = ArrayElementType<{ name: string }>;

    //{name:string}
    type TypeFive = ArrayElementType<string>;
//string 
}

//! let's learn how to infer the return type of the function..
//? if you are using the function from certain libaray and you don't know the return type of that function ...then you can use infer keyword to work upon these problem
function returnString(){
    return 123// TODO:-if this is string the NewType will be string
}

type FunctionReturnType<T>=T extends ()=>infer R ?R :T;

type NewType=FunctionReturnType<typeof returnString>


//! now infer keyword is used to infer the argument of the function

function person(name:string,age:number){
    return {
        name:name,
        age:age,
    }
}

type GetFirstArgumentOfAnyFunction<T>=T extends (first:infer FirstArgument,...args:any[])=>any? FirstArgument:never; 

type GetSecondArgumentOfAnyFunction<T>=T extends(first:any, second:infer secondArgument,...args:any[])=>any?secondArgument:never;

type FirstArgument =GetFirstArgumentOfAnyFunction<typeof person>//? this infer the name:string parameter

type SecondArgment=GetSecondArgumentOfAnyFunction<typeof person>//? this infer the age:number parameter

//? you will need this when you want to infer the type of other third party functions.
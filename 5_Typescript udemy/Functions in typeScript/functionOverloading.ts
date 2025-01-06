//? let's see how we can use functionOverloadin in typeScript

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

// type Reserve = (
//   departureDate: Date,
//   returnDate: Date,
//   departingFrom: string,
//   destination:string
// ) => Reservation;
//? here what is the problem is that when we use reservation someone might do reservation for going only not return ...so retunDate should be optional ...in that case we can use function overloading ...type managing in typeScript...so we can do like below:-

type Reserve = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date,
     departingFrom: string,
      destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (departureDate,returnDateorDepartingFrom,departingFromorDestination:string,
destination?:string
 ) => {
    if(returnDateorDepartingFrom instanceof Date && destination){
        return {
            departureDate:departureDate,
            returnDate:returnDateorDepartingFrom,
            departingFrom:departingFromorDestination,
            destination:destination
        }
    }
     else if(typeof returnDateorDepartingFrom ==="string"){
        return {
            departureDate,
            departingFrom:returnDateorDepartingFrom,
            destination:departingFromorDestination,
        }
     }
     throw new Error('please give the valid information')
 };

 console.log(reserve(new Date(), new Date(), "NewYork","Washington"))
 console.log(reserve(new Date(),"NewYork","Washington"))
//! it work fine but there are more advance tool to handle this thing but you can do that to normal and simple funciton ...we use generics to handle these instead of this.


//?let's do some practice question now

//? 1. Delcare a function named greet that takes a string parameter name and returns a gretting message

function greet(greeting:string):string{
return `${greeting}`
}

//? 2. Define an type Product with properties id (number) and name (string). Creat a function named getProduct that take an id parameter and returns a Product

type Product ={ 
    id:number;
    name:string
}

function getProduct(iid:number,data:string):Product{
      return {id:iid,name:data}
}

//? 3. Decleare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.

type Calculator=(num1:number,num2:number)=>number


const  add:Calculator=(num1,num2)=>{
   return num1+num2
}
const  subtract:Calculator=(num1,num2)=>{
   return num1-num2
}

// function add1:Calculator(num1,num2)=>{
//     return num1+num2
// }//! this is not valid ....you can know in detail on readme.md of same folder

//? 4.Create a function named logMessage that takes a string message and logs it to the console, returning void. Aslo, create a function named throwError that takes a string message and throws an error, returning never.

function logMessage(message:string):void{
    console.log(message)
}

function throwError(message:string):never{
    throw new Error(message)
}
throwError('something went wrong')

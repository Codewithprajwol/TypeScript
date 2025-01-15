//Required<Type>
namespace requiredUtilityTypes{
interface User{
    name?:string;
    age?:number;
    email?:string;
    address?:string;
}

type strictUser=Required<User>

const person1:strictUser={
    name:'ram',
    age:21,
    email:"SitaRam1@gmail.com",
    address:'golok'
}
//? it makes all the optinal properties to be strict or manditory
}
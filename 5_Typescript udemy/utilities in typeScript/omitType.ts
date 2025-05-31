//Omit<OldType,keys>
namespace utilityTypes{
interface Person{
    name:string,
    age:number,
    email:string
}

type specificUser=Omit<Person,'name'|'age'>

const lovely:specificUser={
    email:'hello@123',
}
}
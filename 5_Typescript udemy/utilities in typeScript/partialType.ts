//Partial<Type>;// it set all the type to optional

namespace utilites{
interface User{
    name:string;
    email:string;
    password:string;
}

function updateUser(user:User,updates:Partial<User>):User{
    return {
        ...user,
        ...updates
    }
}

const user5:User={
    name:'ram',
    email:'ram1@gmail.com',
    password:'12345'
}

const data=updateUser(user5,{email:'SitaRam1@gmail.com'})
console.log(data)

}
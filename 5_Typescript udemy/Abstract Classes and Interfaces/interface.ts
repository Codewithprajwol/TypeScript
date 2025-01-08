//? so about interface huh? what i have learned is that it acts as a guard that first checks ...whether it has the following needed properties or not and we can use the available resources if it's correct.

//! in simple interface is the contract that tells how the object or class should look like.

//? for example for login and singnup ...here userinterface is like first checks whether the admin, user or any guest has properties like email, password and username or not .......and if passes then only we can login or signup....let's see in the code how it's done

interface User{
    name:string,
    email:string,
    login():void;//? we can also define login is a function like this and like below:-
    // login:()=>void;

}

class Admin implements User{
    constructor(public name:string,public email:string){//? here it can have other properties as well ....it's not like it should only have the parameter that is written in the interface.
    }
    login(){
      console.log('this is the admin logged in');
    }
}

class user implements User{
    constructor(public name:string, public email:string){

    }
    login(){
        console.log('this is the user logged in');
    }
}

const user1:user=new user('prajwol','shresthaprajwol161@gmail.com')
const admi:Admin=new Admin('Praju',"stha@gmail.com")

class Auth{
    public static login(user:User){//? here what i said is like this function will take the user that has followed the User interface that we have created above...so we cn directly do user.login() and doesnot give error because typeScript knows that this function is taking the user having User interface so it will have the user.login function definitely.
        user.login()
    }
}
Auth.login(user1)
Auth.login(admi)



//?now let's see how we can extend the interfaces

interface Person{
    name:string,
    phone:number,
    email:string
}
interface PersonWithAddress extends Person{//? we can extend the properties like this if we need that extra properties for specific person only
    address:string
}

enum Role{
    admin="admin",
    user="user",
    editor="editor"
}

enum PermissionList{
    execute="execute",
    read="read",
    write="write"
}

interface PersonRole{
    role:Role;
}
//todo:- here what you have to understand is enum is used for like constant so that only the value we want is to be available other cannot write anything by themselve and other one properties interfaces are to show extending multiple interface ...for e.g. role:'here it going to be Role.author'(it's value comes here which is going to be string literal)
interface PersonPermission{
    permission:PermissionList[];//? it means permission property will have values defined under that enum PermissionList like this ["execute","read","write"]
}

interface Manager extends Person,PersonRole, PersonPermission{
    noofTaskGiven:number;
}

const myManager:Manager={
    name:"hari",
    phone:99999999999,
    email:"myguru@gmail.com",
    role:Role.admin,
    permission:[PermissionList.execute,
        PermissionList.write,
        PermissionList.read,
        PermissionList.execute,//? here any number can be created.
    ],
    noofTaskGiven:2
   
}//? now it doesnot through any error because all fields are used here

const firstPerson:Person={
    name:"prajwol",
    phone:98606011070,
    email:"shresthaprajwol161@gmail.com"
}

const secondPerson:PersonWithAddress={
    name:'ram',
    phone:3423897389,
    email:"jayshreeram1@gmail.com",
    address:"kathamandu"
}
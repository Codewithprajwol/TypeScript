namespace module1{
    enum AutomobileType{
        car='car',
        bus='bus',
        truck='truck',
        bike='bike'
    }
    enum AutomobileBrand{
        ferrari="ferrari",
        proche="proche",
        bmw="BMW",
        honda="honda",
        toyota="toyota"
    }
    
    enum AutomobileColors{
        green="green",
        pink="pink",
        blue="blue",
        yellow="Yellow",
        black="black",
        silver="silver"
    }
    
    
    //? generics along with interfaces
    interface AutoMobiles<Type,Brand,Colors>{//! here generics are used
        name:Type,
        brand:Brand,
        color:Colors[],
        description:string
    }
    
    class car implements AutoMobiles<string,AutomobileBrand,AutomobileColors>{
        public name:string="car";
        constructor(public brand:AutomobileBrand,public color:AutomobileColors[]){

        }
        public description: string="this is a new farrari"
       
    }
    
    const gadi:car=new car(AutomobileBrand.ferrari,[AutomobileColors.black,AutomobileColors.blue])
    console.log(gadi)
}

//? now implementing use of multiple interfaces in classes
namespace module2{
    enum AutomobileType{
        car='car',
        bus='bus',
        truck='truck',
        bike='bike'
    }
    enum AutomobileBrand{
        ferrari="ferrari",
        proche="proche",
        bmw="BMW",
        honda="honda",
        toyota="toyota"
    }
    
    enum AutomobileColors{
        green="green",
        pink="pink",
        blue="blue",
        yellow="Yellow",
        black="black",
        silver="silver"
    }
    
    //? generics along with interfaces
    interface AutoMobiles<Type,Brand,Colors>{//! here generics are used
        name:Type,
        brand:Brand,
        color:Colors[],
        description:string
    }

    interface commercialVehicle{
        capacity:string,
        lisenceRenewDate:Date,
    }
    
    class truck implements AutoMobiles<string,AutomobileBrand,AutomobileColors>,commercialVehicle{
        public name:string="truck";
        public constructor(public brand:AutomobileBrand,public color:AutomobileColors[]){

        }
        public description: string="this is a new truck";
        public capacity: string="five";
        public lisenceRenewDate: Date=new Date();    
    }
    const newTruck:truck=new truck(AutomobileBrand.proche,[AutomobileColors.pink])
    console.log(newTruck)
}

//?how access modifier works in conjuction with the interfaces
//! here one thing to rememeber is that when you make the interface then it only works for public ...which means in class we cannot will be able to make properties or method private that are written in interface


//? interface merging - what is say's is like when we declear the interface multiple times with same name typeScript merge it and treat it as same single interface....below is the code

interface Iuser{
    name:string,
    id:number
}

interface Iuser{
    hashPassword:string;
}

class users implements Iuser{
    constructor(public name:string,public id :number,public hashPassword:string){

    }
}

//TODO: difference between type alias and interfaces:- using type alias we can use intersection i.e. & and union i.e. | .... but interfaces cannot do it ....interfaces can extends with another interfaces 

//?another is we can define tuples inside type alias where as in interfaces we cannot
type TupleExample=[string,number];
//? this is not possible in interfaces
//? another example is we cannot redeclear same type name but in interfaces we can

//TODO:difference between abstract class and interfaces
//? here both provides the binding contract ...like properties or method defined by the user should be present there
//? in abstract class it can have function implementation while in interface only call signature is possible
//? in interface we can implement multiple interface whereas in abstract classes we cannot implement that
//? in abstract we can implement static method but in interface we cannot.

namespace abst{
    abstract class Person{
        public abstract name:string;
        public abstract email:string;
        public abstract phone:number;

        public greeting(){
            console.log(`hello ${this.name}`)
        }
        public static nameClass(){
            return 'this is a Parent class Person'
        }
    }
    class registerPerson extends Person{
      public constructor(public name:string,public email:string,public phone:number){
        super()
       }
    }
    const person:registerPerson=new registerPerson('prajwol','sheresth@gmail.com',8764728293)
    person.greeting()
    console.log(Person.nameClass())
    console.log(person)
}
namespace inter{
    interface Person{
        name:string,
        email:string,
        phone:number
        // greeting():void//? we can only have call signatures
    }
    interface greet{
        greeting:()=>void;
    }
    class registerPerson implements Person,greet{
     constructor(public name:string, public email:string, public phone:number){
     }
     greeting(){
        console.log(`hello ${this.name}`)
     }
    }
    const person:registerPerson=new registerPerson('prajowl','shrestha@gmail.com',9867343768)
    person.greeting()
    console.log(person)
}

    

//? so which one to choose ..if you have to make the methods and static methods then you should consider using abstract class but if you want only to use call signature and you want to bound the class to follow and use certain properties then you should consider using interfaces....BUT the best choices to see the stack overflow and see what other people have used to solve that particular problem that you are looking for.
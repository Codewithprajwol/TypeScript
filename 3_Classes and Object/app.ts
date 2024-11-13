// class bottleMaker{

//     name:string;
//     price:number;
//     constructor( name:string,  price:number){
//         this.name=name;
//         this.price=price;
//     }
// }
//  const bottle1=new bottleMaker("milton",1200)


class BottleMaker{
    // public name;//variable declear va hola and that name inside constructor is paramater 
    //? so what will happen is like this this.name=name;
    constructor(public name:string, public price:number){//?so here what will happen is like this 
              
    }
}

class metalBottleMaker extends BottleMaker{
    constructor(name:string,price:number, public love:string){//?ok so here i have to tell what was the parmeter of later constuctor and provide with super keyword and obviously the new paramater can be made in new constructor
        super(name,price)
    }
}

let bottle2=new metalBottleMaker("Melton",1200,"y")


// class user{
//     constructor(public  name:string){
//    //? here(readonly) can work if you dont want to change the name 
//     }
//     changeName(){
//         this.name='prajwol'
//     }
// }

// let user1=new user("Y")

// user1.changeName()

class person{
    constructor(public _name:string, public age:number){

    }
    get name(){
        return this._name;
    }
    set name(value:string){
        this._name=value
    }
}

 let p1=new person('prajwol',20)

 p1.name 


 //?static
class data{
    static pie=3.122343;

   static getRandomNumber(){
        return Math.PI;
    }

}
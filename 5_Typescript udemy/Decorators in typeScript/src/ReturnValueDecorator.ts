interface MapLocation{
    lat:number,
    long:number
}
function AddLocation(lat:number,long:number){
 return <T extends {new (...args:any[]):{}}>(classConstructor:T)=>{
    return class extends classConstructor{
        public mapLocation:MapLocation;
        constructor(...args:any[]){
            super(...args);
            this.mapLocation={lat,long}
        }
     }
}
}

@AddLocation(1.234,2.334)
class Person{
    constructor(public name:string,public age:number){

    }
}
const person:Person=new Person('ram',12)



// console.log(person)
// type val={
//     length:number;
// }

// function test<T extends {length:number}>( test:T){
//     console.log(test)
// }


// test({length:12,love:'hello'})

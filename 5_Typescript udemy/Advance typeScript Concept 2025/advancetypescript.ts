// example of descriminating unions and exhaustiveness checking


type circle={
      shape:'circle',
      radius:number  
}

type rectangle={
    shape:'rectangle',
    length:number;
    breadth:number
}

type Square={
    shape:'square',
    side:number
}


type shapeUnion=circle | rectangle| Square;


function findShape(shape:shapeUnion){
    switch(shape.shape){
        case "circle":
            return Math.PI* (shape.radius**2)
        case "rectangle":
            return  (shape.length*shape.breadth)
        case "square":
            return (shape.side**2)
        default:
            const _exhaustive:never=shape;
            return _exhaustive;
    }
}

const squareResult=findShape({shape:'square',side:2})
console.log(squareResult)

//subtype and supertype in typescript


type Animal={
    name:string
}

type Dog={
    name:string,
    barks:true
}

type Cat={
    name:string,
    purrs:true
}

const dog:Dog={
    name:"dogs",
    barks:true
}

const animal:Animal=dog// here it will not complain because dog is subtype of Animal


const newAnimal1=function (data:Animal){
    console.log(data.name)
}

const newAnimal:(animal:Dog)=>void=newAnimal1


newAnimal({name:"husky",barks:true});

//this is incase of function paramter asking for Dog type but we put Animal type 



//type Narrowing and type widening

const test1="hello" // "hello" literal value 

let test2="hi" //string

//this is type narrowing since test2 is of let so it can be andy value of type string as it can be reassigned but not in constant (test1)

//type narrowing

let test3:string |undefined;

// test3.length// it will give error since test3 can be undefined as well

if(test3){
    console.log(test3.length) // now we narrow down to the string
}


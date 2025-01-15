    function printStrings(str:string | string[]| null){
        if(typeof str ===null){
            console.log("pass an array of strings or a string array please")
        }else if(str=="string"){
                console.log(str)
        }else if(Array.isArray(str)){
             for(const s of str){
                console.log(s)
             }
        }else{
            console.log('chai peelo guys')
        }
    }

    //? or we can do in this case is this

    //? if(str && typeof str=='object') //now it's only runs when it's not null


//! not let's learn about truthiness Narrowing

//? falsy value are Null, undefined, false, 0, NAN, ''

//? it is the process of refining a type from variable based on the condition that checks if it is truthy or falsy.
type Person={
    name:string;
    age?:number;
};

function printAge(person:Person){
    if(person.age){
        console.log(person.age);
    }else{
        console.log("Age Unknown");
    }
}

printAge({
    age:"john",//? here it says this should be number becaue we have done truthiness narrowing 
    name:"john"
})

//! now equality Narrowing

//? equality Narrowing is the type of narrowing tecnnique that help typeScript compiler infer a more specific type based on the quality checks that are present below:-
//? ===
//? !==
//? ==
//? and !=

type Circle={
    kind:'circle',
    radius:number
}

type Square={
    kind:'sauare',
    sideLength:number;
}

type Shape=Circle | Square;

function getArea(shape:Shape){
    if(shape.kind==='circle'){
        return Math.PI * shape.radius **2;
    }
    else{
        return shape.sideLength **2;
    }
}
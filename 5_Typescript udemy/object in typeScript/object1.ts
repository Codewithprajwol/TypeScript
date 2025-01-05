//!underStanding Object union types
type dog={
    name:string,
    barks:boolean,
    wags:boolean
}
type cat={
    name:string,
    purrs:boolean
}

type catAndDog=dog | cat;


let dog:catAndDog={
    name:'tommy',
    barks:true,
    wags:true,
}//? it can have  properties of dog only

let cat:catAndDog={
    name:'suri',
    purrs:true
}//? it can have single properites of cat only

let animal:catAndDog={
    name:'husky',
    barks:true,
    purrs:false
}//? now it you want all the properties you can obisouly do that but if you want parital of one type and parital of another type is not possible ....on type should be fully taken and other can be partial...you have to remember that... it works in mulitiple union as well same rule will be followed

//! now lets talk about descriminating based on unions 
    type NetworkLoadingState={
        state:'loading'
    }

    type NetworkFailedState={
        state:'failed';
        code:number
    }

    type NewtworkSuccessState={
        state:'success';
        response:{
            title:string,
            duration:number,
            summary:string
        }
    }

    type NetworkState=NetworkLoadingState | NetworkFailedState| NewtworkSuccessState;


function logger(state:NetworkState){
// state.code//? it will throw an error because we have first decleare in which state we are ..it will be valid when we are in failed state
    switch(state.state){
        case "loading":
            return "loading...."
        case "failed":
            return `Error:${state.code}`
        case "success":
            return `Downloading:${state.response.title}`     
    }

}


//! now let's talk about new type called Intersection type
//? from above type

type HybridAnimal=cat & dog;

const hybridAnimal:HybridAnimal={
    name:'tossy',
    purrs:true,
    barks:true,
    wags:false
}

//? so if i have two type a and b and it has some properties and if i make intersection out of it ... and use that intersection to create an object then i have to specify all the properties of type ....it is manditory right in case of intersection


//TODO: let do some practice
 type Caterer={
    name:string,
    address:string,
    phone:number
 }
 type Seates={
    [key:string]:string;
 }
type Aeroplane={
    model:string,
    flightNumber:string,
    timeOfDeparture:Date,
    timeOfArrival:Date,
    caterer:Caterer,
    seates:Seates
}

let airplane:Aeroplane={
    model:'Airbus A380',
    flightNumber:"A2201",
    timeOfDeparture:new Date(),
    timeOfArrival:new Date(),
    caterer:{
        name:"special food ltd",
        address:'484, some street, new York',
        phone:9860611070,
    },
    seates:{
        A1:'prajwol shrestha',
        A2:'sajit Maharjan',
        A3:'my lord ',
    }
}//? now let use type alias to it use typescript here
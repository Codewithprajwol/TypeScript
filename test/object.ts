type User={
 readonly id:number,
 name:string,
 age?:number
 contact:{
     email:string,
     phone:number
 },
 preferences:{
     theme:'light' | 'dark',
     language:'English' | 'Spanish'
 }
 [key:string]:any
}

const user:User={
    id:101,
    name:'prajwol',
    contact:{
        email:"shresthaPrajwol161@gmail.com",
        phone:9860611070
    },
    preferences:{
        theme:"dark",
        language:"English"
    },
    love:"love"
}

console.log(user)



type LoadingState={
    state:"loading"
}

type ErrorState={
   state:"error"
   code:number
}

type SuccessState={
    state:"success",
    response:{
        title:string,
        duration:number,
        summary:string
    }
}


type networkState=ErrorState | LoadingState

const network:networkState={
    state:"loading"
}


// type dog={
//     name:string,
//     barks:boolean,
//     wags:boolean
// }
type cat={
    name:string,
    purrs:boolean
}

// type catAndDog=dog | cat;


function animal(pet:cat){
    return pet
}

// animal({name:'catty',barks:true,wags:false,purrs:false})

const catty:cat={
    name:"cattiiie",
    purrs:false,
    hi:'hello'
}
const testy=animal(catty)
console.log(testy);
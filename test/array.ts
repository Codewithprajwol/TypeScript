const data:Array<string>=['hi','how','are','you'];

const mytuples:readonly[string,string]=['hello','hello']

// mytuples[0]='kello'//throws an error becasue it's read only property




const testly:Object={}


type Testa={
    id:number,
    name:string,
    lastname:string,
    hello:string
}

const testa={
    id:1,
    name:"prajwol",
    lastname:"shrestha",
    hello:"boy"
}



type keys=keyof typeof testa
console.log(typeof testa)

type arrayReadonly=[string,string]// o and 1 is the key here


type testedhello=keyof arrayReadonly

const praj:testedhello="0"

enum direction{
    up=7,
    down,
    left,
    right
}

console.log(direction.down)

const love:string="yashu"

console.log(typeof love)


const roles=["admin","user","guest"]

console.log(typeof roles)


// type checking
type testType=[any] extends [string] ? string:null

let test:testType;
// console.log(test)

let a:any=12;

let b:number=a;

let c:any=b;


// let a:string="hello"

// let b:number=a;

let testvalue:any='hello';

// let hello=(<string>testvalue).length
let hello=(testvalue as string).length
console.log(hello)

let hi='jamu' as const
console.log(typeof hi)

type check=undefined extends any ?true:false
type check1=void extends undefined? true:false

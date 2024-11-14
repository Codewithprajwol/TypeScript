function abcd(name:string,cb:(data:string)=>string):string{
    console.log(cb("data"))
    return 'hey'
}
abcd("prajwol",(value:string)=>{
   console.log(value)
   return 'solved'
})

//?function Overloading

function fun(a:string):void;
function fun(a:string, b:number):number;

function fun(a:any,b?:any){
    if(typeof a==="string" && typeof b==="undefined")
    {
        console.log("hey")
    }
    else if(typeof a==="string" && typeof b==="number"){
        return 123;
    }
    else throw new Error('something went wrong');
}

fun("love")
fun("love",23)
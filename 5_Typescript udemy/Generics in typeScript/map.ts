// const map=(array:any[],Func:(item:any)=>any):any[]=>{
//     if(array.length===0){
//         return array;
//     }
//     const result:any[]=[];
//     for(let i=0;i<array.length;i++){
//         result.push(Func(array[i]))
//     }
//     return result
// }

// const newArray:number[]=[1,2,3,4,5,6]
// console.log(map(newArray,(item:number)=>item.toString()))//? this works fine but it is not stricted type


const map=<T,U>(array:T[],Func:(item:T)=>U):(U|T)[]=>{
    if(array.length===0){
        return array;
    }
    const result:any[]=[];
    for(let i=0;i<array.length;i++){
        result.push(Func(array[i]))
    }
    return result
}

const newArray:number[]=[1,2,3,4,5,6]
console.log(map(newArray,(item:number)=>item.toString()))

//? now this is properly typed and strictly typed.


// type Filter={
//     (array:number[],predicate:(item:number)=>boolean):number[];
//     (array:string[],predicate:(item:string)=>boolean):string[],
//     (array:object[],predicate:(item:object)=>boolean):object[],
// }//? here we do that because we don't know what input we get in this function below so we are saying if string come return string and same for number and objects.
//     const filter=<T>(array:T[],predicate:(item:T)=>boolean):T[]=>{
//          const result:T[]=[];
//         for(let i=0;i<array.length;i++){
//             if(predicate(array[i])){
//                 result.push(array[i])
//             }
//         }
//         return result
//     }
//     const numbers:number[]=[1,2,3,4,5]
//     function predicate(item:number){
//      return item>7;
//     }
//     const animals:string[]=['cat','dog','cat']
//     function predicateCat(item:string){
//         return item==="cat";
//     }
//     const result5=filter<number>(numbers,predicate)
//     console.log(result5)
//     const result6=filter<string>(animals,predicateCat)
//     console.log(result6)
var mapp = function (array, change) {
    var result = [];
    var data = change(array[0]);
    for (var i = 0; i < array.length; i++) {
        result.push(array[i] * data);
    }
    return result;
};
function change(data) {
    return data;
}
var newNumber = [1, 2, 3, 4, 5, 6, 7];
console.log(mapp(newNumber, change));

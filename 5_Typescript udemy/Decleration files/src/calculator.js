export function add(num1,num2){
    if(typeof num1==="string" | typeof num2==="string"){
        return num1.toString()+num2.toString()
    }
    return num1 +num2;
}//? here it can return string or number which depend on the parameter so we have to put all cases in the decleartion type so typeScript can easily infere the type of the parameter as well as the type of the output.

function first(){
    console.log("first():factory evaluated")
    
    return function (classPrototype:Object,methodname:string,descriptor:PropertyDescriptor){
        console.log("first():invoked")
    }
}
function second(){
    console.log("second():factory evaluated")
    
    return function (classPrototype:Object,methodname:string,descriptor:PropertyDescriptor){
        console.log("second():invoked")
    }
}

class exampleClass{
    @first()
    @second()
    method(){}
}
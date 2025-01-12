namespace hero{
    // enum Manufactorer{
    //     boeing="boeing",
    //     airbus="airbus"
    // }
    //? it will take three arguments like classPrototype, methodname,index number
    
    interface Aircraft{
        pilotName:string,
        modelName:string,
        origin?:string,
        type?:string,
        printTire?:()=>void;
        printfire?:()=>void;
        printpilotName:(name:string)=>void;
    }
 
  function parameterDecorator(classPrototype:object,methodname:string,index:number){
    console.log(classPrototype)
    console.log(methodname)
    console.log(index)
    }

    class airplane implements Aircraft{
       constructor(public modelName:string,public pilotName:string){
       }
       public printpilotName(@parameterDecorator name:string){
           console.log(name)
        }
       public printmodelName(){
        console.log(`model is ${this.modelName}`)
       }
    }
    const ariCraft:Aircraft=new airplane('boing123','john')
       ariCraft.printpilotName('hello')
}
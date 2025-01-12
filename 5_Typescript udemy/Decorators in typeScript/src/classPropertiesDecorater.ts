namespace hero{
    // enum Manufactorer{
    //     boeing="boeing",
    //     airbus="airbus"
    // }
    //?here class properties decorator takes two parameters (classPrototype propertyName) where as accessor decorater takes there argumetns prototypeOjbect , propertyName and propertyDescriptor 
    
    interface Aircraft{
        modelName:string,
        origin?:string,
        type?:string,
        printTire?:()=>void;
        printfire?:()=>void;
        printpilotName:(name:string)=>void;
    }
   function propertyDecorator(classPrototype:Object,propertyName:string){
    console.log(classPrototype)
    console.log(propertyName);
   
   }
   function accessorDecorator(classPrototype:Object,accessorName:string,propertyDescriptor:PropertyDescriptor){
    console.log(classPrototype)
    console.log(accessorName)
    console.log(propertyDescriptor)
   }

    class airplane implements Aircraft{
        @propertyDecorator
        public modelName:string;
       constructor(modelName:string){
        this.modelName=modelName;
       }
       public printpilotName(name:string){
           console.log(name)
        }
        @accessorDecorator
       public get printmodelName(){
        return `{this.modelName}`
       }
    }

    const ariCraft:Aircraft=new airplane('boing123')
    ariCraft.printpilotName('hello')
}
enum Manufactorer{
    boeing="boeing",
    airbus="airbus"
}

interface Aircraft{
    pilotName:string,
    modelName:string,
    origin?:string,
    type?:string,
    printTire?:()=>void;
    printfire?:()=>void;
    printpilotName:()=>void;

}
function methodDecorator(classPrototype:Object,methodname:string,descriptor:PropertyDescriptor):void{
    console.log(classPrototype)
    console.log(methodname)
    console.log(descriptor)
    descriptor.writable=false;
    console.log(descriptor)
}
function ManufactorerDecorator(name:string){
    return (target:Function)=>{
       
          if(name === Manufactorer.airbus){
            target.prototype.origin="united state of america";
            target.prototype.type="jet"
            target.prototype.printTire=function (){
                console.log(`${this.pilotName}`)
            }
          }
          else{
            target.prototype.origin='japan';
            target.prototype.type="bus";
            target.prototype.printfire=()=>{
                console.log('bellos')
            }
          }
    }
}
@ManufactorerDecorator('airbus')
class airplane implements Aircraft{
   constructor(public modelName:string,public pilotName:string){
   }
   @methodDecorator
   public printpilotName(){
       console.log(`hello ${this.pilotName}`)
    }
   public printmodelName(){
    console.log(`model is ${this.modelName}`)
   }
}

const ariCraft:Aircraft=new airplane('boing123','john')
ariCraft.printpilotName=()=>console.log('love')
ariCraft.printpilotName()

// ariCraft.printTire? ariCraft.printTire() :console.log('helko')

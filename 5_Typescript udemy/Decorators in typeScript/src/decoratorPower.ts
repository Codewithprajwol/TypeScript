namespace myDecorator{
    enum manufactorers{
        beoing="beoing",
        airbus="airbus"
    }

    interface Aircraft{
        _airCraftModel:string,
        pilot?:string,
        prototype?:any,
        origin?:string,
        manufacturer?:string,
        type?:string,
        beoingMethod?:()=>void,
        airbusMethod?:()=>void
    }

    function Manufactorer(name:string){
        return (target:Function)=>{
            if(name===manufactorers.airbus){
                target.prototype.origin="United States of America";
                target.prototype.manufacturer=manufactorers.airbus;
                target.prototype.type="jet",
                target.prototype.beoingMethod=()=>{
                    console.log('called by beoing method');
                }
            }else{
                target.prototype.origin="France";
                target.prototype.manufacturer=manufactorers.beoing;
                target.prototype.type="jet",
                target.prototype.airbusMethod=()=>{
                    console.log('called by airbus Method');
                }
            }
        }
    }

@Manufactorer("airbus")

class airCraft implements Aircraft{
    public constructor(public _airCraftModel:string,public pilot:string){

    }
    public pilotName(){
        console.log(this.pilot)
    }
    public pilotModel(){
        return this._airCraftModel;
    }
}

@Manufactorer('beoing')
class helicopter implements Aircraft{
    public constructor(public _airCraftModel:string,public pilot:string){

    }
    public pilotName(){
        console.log(this.pilot)
    }
    public pilotModel(){
        return this._airCraftModel;
    }
}

const airplane:Aircraft=new airCraft("Airbus384","ramu");//? here if i do airCraft .... it will said airplane.origin doesnot exists here because we donot have that property in our ariCraft class ....it is in the prototype.
const heli:Aircraft=new helicopter("294","beoing")
console.log(heli)

console.log(airplane)
console.log(airplane.beoingMethod?airplane.beoingMethod() : console.log('method doesnot exist'))
console.log(airplane.origin)
airplane.beoingMethod?airplane.beoingMethod() :console.log('method doesnot exist')
}


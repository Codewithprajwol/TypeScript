namespace myDecorator{
class airCraft{
    public constructor(public _airCraftModel:string,public pilot:string){

    }
    public pilotName(){
        console.log(this.pilot)
    }
    public pilotModel(){
        return this._airCraftModel;
    }
}
}

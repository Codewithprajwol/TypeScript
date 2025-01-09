"use strict";
//? Decorator in TypeScript is a special kind of decleration that can modify classes, methods, properties or parameters, enhancing hteir behaviour or metadata at design time.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//? it can alter the classes.....but one thing to remember is that it cannot be used in function or any other entity inside typeScript
//? decorators run only one time at the execution process.... they are invoked at the run time when that class is invoked by typescript 
//? it is invoked before the object instance created..which means it is invoked when the class is defined not when object is instanciated from that class
//? since decorator function is invoked during compilation...it can change the classes property, method and ,parameters and others by the time javascript start executing it emmitted or written in the typeScript file
function FirstDecorator(name) {
    return (Constructor) => {
        console.log(`${name}. How are you?`);
        console.log(Constructor);
    };
}
let airCraft = class airCraft {
    constructor(_airCraftModel, pilot) {
        this._airCraftModel = _airCraftModel;
        this.pilot = pilot;
    }
    pilotName() {
        console.log(this.pilot);
    }
    pilotModel() {
        return this._airCraftModel;
    }
};
airCraft = __decorate([
    FirstDecorator('helo pilot') //? now we can accept the parameter and do powerful things 
    ,
    __metadata("design:paramtypes", [String, String])
], airCraft);
//? now let's talk about the decorators factories ....which is essentially the function that encapsulates the our decorator function and return our decorator funciton...what does it mean ...look above code actually we return the anymous function so that we we called decorators we can accept the parameters there.

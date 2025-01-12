"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var hero;
(function (hero) {
    // enum Manufactorer{
    //     boeing="boeing",
    //     airbus="airbus"
    // }
    //?here class properties decorator takes two parameters (classPrototype propertyName) where as accessor decorater takes there argumetns prototypeOjbect , propertyName and propertyDescriptor 
    function propertyDecorator(classPrototype, propertyName) {
        console.log(classPrototype);
        console.log(propertyName);
    }
    function accessorDecorator(classPrototype, accessorName, propertyDescriptor) {
        console.log(classPrototype);
        console.log(accessorName);
        console.log(propertyDescriptor);
    }
    class airplane {
        constructor(modelName) {
            this.modelName = modelName;
        }
        printpilotName(name) {
            console.log(name);
        }
        get printmodelName() {
            return `{this.modelName}`;
        }
    }
    __decorate([
        propertyDecorator,
        __metadata("design:type", String)
    ], airplane.prototype, "modelName", void 0);
    __decorate([
        accessorDecorator,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], airplane.prototype, "printmodelName", null);
    const ariCraft = new airplane('boing123');
    ariCraft.printpilotName('hello');
})(hero || (hero = {}));

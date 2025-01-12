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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var hero;
(function (hero) {
    // enum Manufactorer{
    //     boeing="boeing",
    //     airbus="airbus"
    // }
    //? it will take three arguments like classPrototype, methodname,index number
    function parameterDecorator(classPrototype, methodname, index) {
        console.log(classPrototype);
        console.log(methodname);
        console.log(index);
    }
    class airplane {
        constructor(modelName, pilotName) {
            this.modelName = modelName;
            this.pilotName = pilotName;
        }
        printpilotName(name) {
            console.log(name);
        }
        printmodelName() {
            console.log(`model is ${this.modelName}`);
        }
    }
    __decorate([
        __param(0, parameterDecorator),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], airplane.prototype, "printpilotName", null);
    const ariCraft = new airplane('boing123', 'john');
    ariCraft.printpilotName('hello');
})(hero || (hero = {}));

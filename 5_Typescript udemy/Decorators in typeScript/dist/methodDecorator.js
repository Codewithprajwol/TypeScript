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
var Manufactorer;
(function (Manufactorer) {
    Manufactorer["boeing"] = "boeing";
    Manufactorer["airbus"] = "airbus";
})(Manufactorer || (Manufactorer = {}));
function methodDecorator(classPrototype, methodname, descriptor) {
    console.log(classPrototype);
    console.log(methodname);
    console.log(descriptor);
    descriptor.writable = false;
    console.log(descriptor);
}
function ManufactorerDecorator(name) {
    return (target) => {
        if (name === Manufactorer.airbus) {
            target.prototype.origin = "united state of america";
            target.prototype.type = "jet";
            target.prototype.printTire = function () {
                console.log(`${this.pilotName}`);
            };
        }
        else {
            target.prototype.origin = 'japan';
            target.prototype.type = "bus";
            target.prototype.printfire = () => {
                console.log('bellos');
            };
        }
    };
}
let airplane = class airplane {
    constructor(modelName, pilotName) {
        this.modelName = modelName;
        this.pilotName = pilotName;
    }
    printpilotName() {
        console.log(`hello ${this.pilotName}`);
    }
    printmodelName() {
        console.log(`model is ${this.modelName}`);
    }
};
__decorate([
    methodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], airplane.prototype, "printpilotName", null);
airplane = __decorate([
    ManufactorerDecorator('airbus'),
    __metadata("design:paramtypes", [String, String])
], airplane);
const ariCraft = new airplane('boing123', 'john');
ariCraft.printpilotName = () => console.log('love');
ariCraft.printpilotName();
// ariCraft.printTire? ariCraft.printTire() :console.log('helko')

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
var myDecorator;
(function (myDecorator) {
    let manufactorers;
    (function (manufactorers) {
        manufactorers["beoing"] = "beoing";
        manufactorers["airbus"] = "airbus";
    })(manufactorers || (manufactorers = {}));
    function Manufactorer(name) {
        return (target) => {
            if (name === manufactorers.airbus) {
                target.prototype.origin = "United States of America";
                target.prototype.manufacturer = manufactorers.airbus;
                target.prototype.type = "jet",
                    target.prototype.beoingMethod = () => {
                        console.log('called by beoing method');
                    };
            }
            else {
                target.prototype.origin = "France";
                target.prototype.manufacturer = manufactorers.beoing;
                target.prototype.type = "jet",
                    target.prototype.airbusMethod = () => {
                        console.log('called by airbus Method');
                    };
            }
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
        Manufactorer("airbus"),
        __metadata("design:paramtypes", [String, String])
    ], airCraft);
    let helicopter = class helicopter {
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
    helicopter = __decorate([
        Manufactorer('beoing'),
        __metadata("design:paramtypes", [String, String])
    ], helicopter);
    const airplane = new airCraft("Airbus384", "ramu"); //? here if i do airCraft .... it will said airplane.origin doesnot exists here because we donot have that property in our ariCraft class ....it is in the prototype.
    const heli = new helicopter("294", "beoing");
    console.log(heli);
    console.log(airplane);
    console.log(airplane.beoingMethod ? airplane.beoingMethod() : console.log('method doesnot exist'));
    console.log(airplane.origin);
    airplane.beoingMethod ? airplane.beoingMethod() : console.log('method doesnot exist');
})(myDecorator || (myDecorator = {}));

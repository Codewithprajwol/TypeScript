"use strict";
var myDecorator;
(function (myDecorator) {
    class airCraft {
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
    }
})(myDecorator || (myDecorator = {}));

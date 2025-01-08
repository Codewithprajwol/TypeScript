var module1;
(function (module1) {
    var AutomobileType;
    (function (AutomobileType) {
        AutomobileType["car"] = "car";
        AutomobileType["bus"] = "bus";
        AutomobileType["truck"] = "truck";
        AutomobileType["bike"] = "bike";
    })(AutomobileType || (AutomobileType = {}));
    var AutomobileBrand;
    (function (AutomobileBrand) {
        AutomobileBrand["ferrari"] = "ferrari";
        AutomobileBrand["proche"] = "proche";
        AutomobileBrand["bmw"] = "BMW";
        AutomobileBrand["honda"] = "honda";
        AutomobileBrand["toyota"] = "toyota";
    })(AutomobileBrand || (AutomobileBrand = {}));
    var AutomobileColors;
    (function (AutomobileColors) {
        AutomobileColors["green"] = "green";
        AutomobileColors["pink"] = "pink";
        AutomobileColors["blue"] = "blue";
        AutomobileColors["yellow"] = "Yellow";
        AutomobileColors["black"] = "black";
        AutomobileColors["silver"] = "silver";
    })(AutomobileColors || (AutomobileColors = {}));
    var car = /** @class */ (function () {
        function car(brand, color) {
            this.brand = brand;
            this.color = color;
            this.name = "car";
            this.description = "this is a new farrari";
        }
        return car;
    }());
    var gadi = new car(AutomobileBrand.ferrari, [AutomobileColors.black, AutomobileColors.blue]);
    console.log(gadi);
})(module1 || (module1 = {}));

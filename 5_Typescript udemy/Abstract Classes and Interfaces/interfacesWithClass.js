var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//? now implementing use of multiple interfaces in classes
var module2;
(function (module2) {
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
    var truck = /** @class */ (function () {
        function truck(brand, color) {
            this.brand = brand;
            this.color = color;
            this.name = "truck";
            this.description = "this is a new truck";
            this.capacity = "five";
            this.lisenceRenewDate = new Date();
        }
        return truck;
    }());
    var newTruck = new truck(AutomobileBrand.proche, [AutomobileColors.pink]);
    console.log(newTruck);
})(module2 || (module2 = {}));
var users = /** @class */ (function () {
    function users(name, id, hashPassword) {
        this.name = name;
        this.id = id;
        this.hashPassword = hashPassword;
    }
    return users;
}());
//? this is not possible in interfaces
//? another example is we cannot redeclear same type name but in interfaces we can
//TODO:difference between abstract class and interfaces
//? here both provides the binding contract ...like properties or method defined by the user should be present there
//? in abstract class it can have function implementation while in interface only call signature is possible
//? in interface we can implement multiple interface whereas in abstract classes we cannot implement that
//? in abstract we can implement static method but in interface we cannot.
var abst;
(function (abst) {
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.greeting = function () {
            console.log("hello ".concat(this.name));
        };
        Person.nameClass = function () {
            return 'this is a Parent class Person';
        };
        return Person;
    }());
    var registerPerson = /** @class */ (function (_super) {
        __extends(registerPerson, _super);
        function registerPerson(name, email, phone) {
            var _this = _super.call(this) || this;
            _this.name = name;
            _this.email = email;
            _this.phone = phone;
            return _this;
        }
        return registerPerson;
    }(Person));
    var person = new registerPerson('prajwol', 'sheresth@gmail.com', 8764728293);
    person.greeting();
    console.log(Person.nameClass());
    console.log(person);
})(abst || (abst = {}));
var inter;
(function (inter) {
    var registerPerson = /** @class */ (function () {
        function registerPerson(name, email, phone) {
            this.name = name;
            this.email = email;
            this.phone = phone;
        }
        registerPerson.prototype.greeting = function () {
            console.log("hello ".concat(this.name));
        };
        return registerPerson;
    }());
    var person = new registerPerson('prajowl', 'shrestha@gmail.com', 9867343768);
    person.greeting();
    console.log(person);
})(inter || (inter = {}));

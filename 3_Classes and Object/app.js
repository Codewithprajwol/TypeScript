// class bottleMaker{
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
//     name:string;
//     price:number;
//     constructor( name:string,  price:number){
//         this.name=name;
//         this.price=price;
//     }
// }
//  const bottle1=new bottleMaker("milton",1200)
var BottleMaker = /** @class */ (function () {
    // public name;//variable declear va hola and that name inside constructor is paramater 
    //? so what will happen is like this this.name=name;
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var metalBottleMaker = /** @class */ (function (_super) {
    __extends(metalBottleMaker, _super);
    function metalBottleMaker(name, price, love) {
        var _this = _super.call(this, name, price) || this;
        _this.love = love;
        return _this;
    }
    return metalBottleMaker;
}(BottleMaker));
var bottle2 = new metalBottleMaker("Melton", 1200, "y");
// class user{
//     constructor(public  name:string){
//    //? here(readonly) can work if you dont want to change the name 
//     }
//     changeName(){
//         this.name='prajwol'
//     }
// }
// let user1=new user("Y")
// user1.changeName()
var person = /** @class */ (function () {
    function person(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return person;
}());
var p1 = new person('prajwol', 20);
p1.name;
//?static
var data = /** @class */ (function () {
    function data() {
    }
    data.getRandomNumber = function () {
        return Math.PI;
    };
    data.pie = 3.122343;
    return data;
}());

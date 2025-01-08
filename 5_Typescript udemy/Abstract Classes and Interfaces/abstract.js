//? what you have to know is if some properites is defined under the abstract class then each child class should have to implement that properties manditorly.
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
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.addHolidays = function (holidays) {
        if (Array.isArray(holidays)) {
            for (var _i = 0, holidays_1 = holidays; _i < holidays_1.length; _i++) {
                var holiday = holidays_1[_i];
                this.holidays.push(holiday);
            }
        }
    };
    Department.prototype.printHolidays = function () {
        if (this.holidays.length === 0) {
            return console.log('this in no holidays data in this particular department object');
        }
        this.holidays.forEach(function () {
            console.log('hello');
        });
    };
    return Department;
}());
var ItDepartment = /** @class */ (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment() {
        var _this = _super.call(this, "itDepartment") || this;
        _this.holidays = [];
        return _this;
    }
    return ItDepartment;
}(Department));
var adminDepartment = /** @class */ (function (_super) {
    __extends(adminDepartment, _super);
    function adminDepartment() {
        var _this = _super.call(this, "adminDepartment") || this;
        _this.holidays = [];
        return _this;
    }
    return adminDepartment;
}(Department));
// const itDepartment:ItDepartment=new ItDepartment("it Department")
// const accountDepartment:ItDepartment=new  ItDepartment('accout department')//? this is not what we want like this that the reason we make the Department constructor protected.
// const itDepartment:ItDepartment=new ItDepartment()//?oh now let me tell you ...what i have understand when parent constructor is proteced and i have a extend child class of parent class but that child doesnot have it's own constructor then since it inherits the properties of the parent class child class also have protected constructor and it hence we cannot make the object instance out of it.....and now but if i declear the constructor under the child class then we can make instance object out of it right?
//? then we add the holidays to each of the departments
var itHolidays = [
    {
        date: new Date(2024, 12, 2),
        reason: "krishna Jayanti"
    },
    {
        date: new Date(2025, 1, 2),
        reason: "it department day"
    }
];
var adminHolidays = [
    {
        date: new Date(2023, 4, 12),
        reason: "christmas"
    },
    {
        date: new Date(2024, 12, 12),
        reason: "admin day"
    }
];
var itDepart = new ItDepartment();
var adminPart = new adminDepartment();
itDepart.addHolidays(itHolidays);
adminPart.addHolidays(adminHolidays);
itDepart.printHolidays();

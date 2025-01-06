//?let talk about how function should be typed in typeScript with different function declearation..
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//! function decleration
function printString(name, age) {
    return "my name is ".concat(name, " and age is ").concat(age);
}
//! function expression
var printNumber = function (name, age) {
    return 123;
};
//! Arrow function
var printData = function (name) {
    return 'hello';
};
//! now let's talk about the optional paramter in function
function countryUser(name, age, countryName) {
    if (countryName) {
        return 'hello from nepal';
    }
    return 'hello from my country';
}
countryUser('name', 12);
//? what you have to understand is that when you use the optional parameter then you should use that paramter a t the end of the function parameter....otherwise it will throw an error
//! now let's talk about custom parameter and custom types in function
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
var person = {
    name: 'hero',
    age: 12,
    ageUnit: AgeUnit.Years,
    greet: function (helo) {
        return "".concat(helo);
    }
};
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
//? function call signature
//? lets talk about how anymous function behaves and how typescript infere the paramtere of anymous function
var students = ["hello", 'ram', 'sam'];
students.map(function (student) {
    console.log(student);
});
students.map(function (student) {
    console.log(student);
});
//! here in anymous function in map ...student parameter inside anymous function is properly type..which means typeScript can infere the type of the student properly
//! now lets see how to type the funciton which doesnot return anything and about never
//? to said this function return nothing you can use void 
//?for never let's take a example below:-
function throwError() {
    throw new Error('someThing went wrong');
}
//! let's see how we can strictly type async function in typescript
function retPromise(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
var testing = function (id) {
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); });
};
var testing2 = function (id) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, Promise.resolve('helloo')];
    });
}); };
var heroUser = {
    name: 'hero',
    age: 12
};
function helloUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Promise.resolve(user)];
        });
    });
}
//! now let's talk how can we use rest paramter along with funciton in typeScript
function multiplyBy(by) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return numbers.map(function (number) { return by * number; });
}
console.log(multiplyBy(2, 1, 2, 3, 4, 5, 5, 6, 7, 9));

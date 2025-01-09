"use strict";
//? Decorator in TypeScript is a special kind of decleration that can modify classes, methods, properties or parameters, enhancing hteir behaviour or metadata at design time.
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
//? it can alter the classes.....but one thing to remember is that it cannot be used in function or any other entity inside typeScript
//? decorators run only one time at the execution process.... they are invoked at the run time when that class is invoked by typescript 
//? it is invoked before the object instance created..which means it is invoked when the class is defined not when object is instanciated from that class
//? since decorator function is invoked during compilation...it can change the classes property, method and ,parameters and others by the time javascript start executing it emmitted or written in the typeScript file
function FirstDecorator(name) {
    return (Constructor, context) => {
        console.log(`${name}. How are you?`);
        console.log(Constructor);
        console.log(context);
    };
}
let airCraft = (() => {
    let _classDecorators = [FirstDecorator('helo pilot')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var airCraft = _classThis = class {
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
    __setFunctionName(_classThis, "airCraft");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        airCraft = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return airCraft = _classThis;
})();
//? now let's talk about the decorators factories ....which is essentially the function that encapsulates the our decorator function and return our decorator funciton...what does it mean ...look above code actually we return the anymous function so that we we called decorators we can accept the parameters there.

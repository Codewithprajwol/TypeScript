"use strict";
///<reference path="common.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
const common_1 = require("./common");
class MathUtils {
    static add(a, b) {
        common_1.commonUtils.log('hello form MathUtils');
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
}
exports.MathUtils = MathUtils;

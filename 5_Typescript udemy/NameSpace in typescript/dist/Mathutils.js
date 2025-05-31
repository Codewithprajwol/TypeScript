<<<<<<< HEAD
import { commonUtils } from "./common.js";
export class MathUtils {
    static add(a, b) {
        commonUtils.loger('hello form MathUtils');
        return { sum: a + b, name: 'MathUtils' };
=======
"use strict";
///<reference path="common.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
const common_1 = require("./common");
class MathUtils {
    static add(a, b) {
        common_1.commonUtils.log('hello form MathUtils');
        return a + b;
>>>>>>> 7c76aa043256363dff1abef2ab66cd5bd464a54e
    }
    static subtract(a, b) {
        return a - b;
    }
}
<<<<<<< HEAD
=======
exports.MathUtils = MathUtils;
>>>>>>> 7c76aa043256363dff1abef2ab66cd5bd464a54e

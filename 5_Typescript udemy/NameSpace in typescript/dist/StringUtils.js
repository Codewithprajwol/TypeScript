<<<<<<< HEAD
import { commonUtils } from "./common.js";
export class StringUtils {
    static add(a, b) {
        commonUtils.loger('hello');
=======
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
const common_1 = require("./common");
class StringUtils {
    static add(a, b) {
        common_1.commonUtils.log('hello');
>>>>>>> 7c76aa043256363dff1abef2ab66cd5bd464a54e
        return a + b;
    }
    static subtract(a, b) {
        return a.replace(b, "");
    }
}
<<<<<<< HEAD
=======
exports.StringUtils = StringUtils;
>>>>>>> 7c76aa043256363dff1abef2ab66cd5bd464a54e

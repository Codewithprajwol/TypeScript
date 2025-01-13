"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
const common_1 = require("./common");
class StringUtils {
    static add(a, b) {
        common_1.commonUtils.log('hello');
        return a + b;
    }
    static subtract(a, b) {
        return a.replace(b, "");
    }
}
exports.StringUtils = StringUtils;

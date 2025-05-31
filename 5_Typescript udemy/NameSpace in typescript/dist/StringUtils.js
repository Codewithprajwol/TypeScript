import { commonUtils } from "./common.js";
export class StringUtils {
    static add(a, b) {
        commonUtils.loger('hello');
        return a + b;
    }
    static subtract(a, b) {
        return a.replace(b, "");
    }
}

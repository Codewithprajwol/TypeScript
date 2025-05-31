import { commonUtils } from "./common.js";
export class MathUtils {
    static add(a, b) {
        commonUtils.loger('hello form MathUtils');
        return { sum: a + b, name: 'MathUtils' };
    }
    static subtract(a, b) {
        return a - b;
    }
}

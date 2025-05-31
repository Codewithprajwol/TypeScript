import { AddOutput } from "./addInterface.js";
import { commonUtils } from "./common.js";
export class MathUtils {
     static add(a:number,b:number):AddOutput{
        commonUtils.loger('hello form MathUtils')
        return {sum:a+b,name:'MathUtils'}
    }

    static subtract(a:number, b:number){
        return a-b
    }
}
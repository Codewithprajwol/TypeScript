<<<<<<< HEAD
import { AddOutput } from "./addInterface.js";
import { commonUtils } from "./common.js";
export class MathUtils {
     static add(a:number,b:number):AddOutput{
        commonUtils.loger('hello form MathUtils')
        return {sum:a+b,name:'MathUtils'}
=======

import { commonUtils } from "./common";

export class MathUtils{
    static add(a:number,b:number){
        commonUtils.log('hello form MathUtils')
        return a+b;
>>>>>>> 7c76aa043256363dff1abef2ab66cd5bd464a54e
    }

    static subtract(a:number, b:number){
        return a-b
    }
}
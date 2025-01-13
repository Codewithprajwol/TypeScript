///<reference path="common.ts"/>

import { commonUtils } from "./common";

export class MathUtils{
    static add(a:number,b:number){
        commonUtils.log('hello form MathUtils')
        return a+b;
    }

    static subtract(a:number, b:number){
        return a-b
    }
}
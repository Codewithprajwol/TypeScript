import { commonUtils } from "./common.js";

export class StringUtils{
   static add(a:string, b:string){
        commonUtils.loger('hello')
        return a+b;
    }
   static subtract(a:string, b:string){
        return a.replace(b,"")
    }
}
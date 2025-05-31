<<<<<<< HEAD
import { commonUtils } from "./common.js";

export class StringUtils{
   static add(a:string, b:string){
        commonUtils.loger('hello')
        return a+b;
    }
   static subtract(a:string, b:string){
=======
import { commonUtils } from "./common";

export class StringUtils{
    static add(a:string, b:string){
        commonUtils.log('hello')
        return a+b;
    }
    static subtract(a:string, b:string){
>>>>>>> 7c76aa043256363dff1abef2ab66cd5bd464a54e
        return a.replace(b,"")
    }
}
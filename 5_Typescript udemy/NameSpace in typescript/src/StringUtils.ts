import { commonUtils } from "./common";

export class StringUtils{
    static add(a:string, b:string){
        commonUtils.log('hello')
        return a+b;
    }
    static subtract(a:string, b:string){
        return a.replace(b,"")
    }
}

namespace StringUtils{
    export function add(a:string, b:string){
        commonUtils.log('hello')
        return a+b;
    }
    export function subtract(a:string, b:string){
        return a.replace(b,"")
    }
}
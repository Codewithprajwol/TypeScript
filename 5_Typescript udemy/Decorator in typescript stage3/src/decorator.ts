function nameLogger(originalmethod:any,context:any){
    console.log('hello')
    return function methodReplacement(this:any,...args:any[]){
        console.log('greeting calling')
        const result=originalmethod.call(this,args)

    }
}


class person{

    constructor(public name:string){

    }
    @nameLogger
    greet(){
        console.log(`hello, ${this.name}`);
    }
    call(test:any,...args:any[]){

    }
}
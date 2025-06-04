function nameLogger(originalmethod:any,context:any){
    return function methodReplacement(this:any,...args:any[]){
        console.log('greeting calling')
        const result=originalmethod.call(this,args)
        console.log('greeting called')
    }
}


class person{

    constructor(public name:string){

    }
    @nameLogger
    greet(){
        console.log(`hello, ${this.name}`);
    }
}

const person1=new person('prajwol')

person1.greet()
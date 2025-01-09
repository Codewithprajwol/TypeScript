//? Decorator in TypeScript is a special kind of decleration that can modify classes, methods, properties or parameters, enhancing hteir behaviour or metadata at design time.

//? it can alter the classes.....but one thing to remember is that it cannot be used in function or any other entity inside typeScript

//? decorators run only one time at the execution process.... they are invoked at the run time when that class is invoked by typescript 

//? it is invoked before the object instance created..which means it is invoked when the class is defined not when object is instanciated from that class

//? since decorator function is invoked during compilation...it can change the classes property, method and ,parameters and others by the time javascript start executing it emmitted or written in the typeScript file

function FirstDecorator(name:string){//? this is called decorator factory 
    return (Constructor:Function)=>{//? where this is called actual decorator function
        console.log(`${name}. How are you?`);
        console.log(Constructor);
    }
}

@FirstDecorator('helo pilot')//? now we can accept the parameter and do powerful things 
class airCraft{
    public constructor(public _airCraftModel:string,public pilot:string){

    }
    public pilotName(){
        console.log(this.pilot)
    }
    public pilotModel(){
        return this._airCraftModel;
    }
}

//? now let's talk about the decorators factories ....which is essentially the function that encapsulates the our decorator function and return our decorator funciton...what does it mean ...look above code actually we return the anymous function so that we we called decorators we can accept the parameters there.
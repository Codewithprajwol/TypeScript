export declare function add(num1:number, num2:number):number;//? now here typeScript will understand the type of the paramater and the return type of the funciton add.
export declare function add(num1:string, num2:number):string;//? now here typeScript will understand the type of the paramater and the return type of the funciton add.
export declare function add(num1:number, num2:string):string;//? now here typeScript will understand the type of the paramater and the return type of the funciton add.
export declare function add(num1:string, num2:string):string;//? now here typeScript will understand the type of the paramater and the return type of the funciton add.
//! we have to do function overloading here...

//? you just have to declear the file and export it and the typeScript will do the rest for you ...like infereing the type of the add using the decleration written in the .d.ts file 
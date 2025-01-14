type returnUser={
    name:string,
    greeting:string
}
export declare class User{
    public greeting:string;
    user:{name:string; greeting:string};

    constructor(greeting:string)

    showGreeting():void;
    createUser(name:string):returnUser;
}

export declare class AdminUser extends User{
    constructor();
    showGreeting():void;

}
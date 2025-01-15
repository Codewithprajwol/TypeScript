export namespace User{
    interface userProfile{
        id:number;
        name:string;
        status:"inactive"|"active"
    }

    export declare function createUser(id:number,name:string):userProfile
     export declare function updateUser(id:number,user:userProfile):userProfile
}
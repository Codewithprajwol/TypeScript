// interface UserProfile{
//     userId:number,
//     name:string,
//     status:"inactive" | "active";
// }
type UserProfile={

    userId:number,
        name:string,
        status:"inactive" | "active";
}

export declare function userData(Id:number, name:string):UserProfile //? here parameter name can be changed but in app.ts ...it will show the same name as we decleare here....so it's good to keep the same name as in our javaScript file.
//? here declare can be use or ignored ...it will work fine...
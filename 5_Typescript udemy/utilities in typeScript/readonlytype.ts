namespace readonly{
    interface User{
        name:string;
        age:number;
    }

    const user:Readonly<User>={
        name:'prajwol',
        age:12
    }

    // user.name='ram'//? it will going to throw and error
}
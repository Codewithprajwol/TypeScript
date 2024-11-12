   interface user{
    name:string;
    id:number;
    faculty:string;
    gender?:string
   }

   interface Admin extends user{
    email:string;
    password:string;
   }

    function prajwol(obj:Admin):void{
        console.log(obj)
        console.log('hello world !!')
    }

    prajwol({name:'Prajwol',id:12,faculty:'string hunu paryoo',gender:'male',email:'sdfh',password:'sfdh'})


    type value=null | string | number;

    let data:value;

    type pramu={
        name:string;
        email:string;
    }
    type praju= pramu & {
        getDetails(pramu:string):void
    }
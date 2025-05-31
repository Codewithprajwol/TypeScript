let person={
    name:"prajwol",
    age:20
};

let car:Object={
    brand:"BMW",
    color:"Black",
}

//? here we have defined the car as object but in type hierarcy Object is the parent type of many liek array , constructor and other.. so there might be problem we can do like below:-

car=[];
car=()=>{};
//? here we expect the car as object and should have two properties (brand and color) but it's an empty array now


let newCar:{brand:string;color:string}={ //! we can define object like that also  && while defining type of object we can write ; as well it will not throw error
    brand:"BMW",
    color:"Black",
}

// newCar=[];// now here it will give error because typescript expect to have (brand and color properties as string)


//now let't talk about how can we define the type of object here

type Author={
    name:string;
    age:number;
    email:string,
    readonly type:"human" | "ai";
}
type AwardDetail={
    name:string;
    date:Date;
}
type Award={
      [key:string]:AwardDetail; 
}
type Post={
    title:string,
    content:string,
    date:Date,
    // author:{
    //     name:string,
    //     age:number;
    //     email:string
    // }//? we can do like that also but the good practice is to make another type and use it here
    author:Author,
    // awards:{
    //     // [key:string]:{
    //     //     name:string,
    //     //     date:Date
    //     // }//! it can be done like that but if properties are big then it might create the problem so it's good to create the type
    //     [key:string]:AwardDetail;
    // }
    awards:Award;
    categoty?:string;
}
// const post:{title:string,content:string,date:Date}={
//     title:'this is a post title',
//     content:'this is the content of the post',
//     date:new Date(),
// }
// //? this is good but when you have object of many properties it becomes difficult to handle so we can do that
// ! but using type it becomes easy to do and we don't have to declear it again and again

// const post2:Post={
//     title:'hello form nepal',
//     content:'this is the content of nepal',
//     date:new Date()
// }
//? so here we can use Post type any time and anywhere


const post3:Post={
    title:'hello form china',
    content:'content from china',
    date:new Date(),
    author:{
        name:'ram',
        age:12,
        email:'sheresthaprajwol151@gmail.com',
        type: "ai"
    }
}
//! i have been doing in the same file so i am comenting here and changing the type ..if you are reading later you have to figure out by yourself

const post4:Post={
    title:'helel form nepal',
    content:'this is the content from nepal',
    date:new Date(),
    author:{
        name:'krishana',
        age:12,
        email:'hell123@gmail.com',
        type:'human'

    },
    awards:{//? here if awards is object that it's property itself is a object and if we don't know the name we can use something called indexer.
        web:{
            name:'web Award',
            date:new Date()
        },
        web3:{
            name:'web3 Award',
            date:new Date()
        }
    },
}


//! now lets talk about optional properties and read Only properties in typeScript
//? here if we put '?' in the properties of the object typescript assume that it is the optional properties it might exist or not ....typeScript will not throw the error.

//? and there is a keyword called readonly properites which say that it can only be read ...and cannot be changes by the user

post4.author.type="ai"//! it gives error because it says it's a readOnly property





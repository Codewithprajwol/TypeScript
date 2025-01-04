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

newCar=[];// now here it will give error because typescript expect to have (brand and color properties as string)
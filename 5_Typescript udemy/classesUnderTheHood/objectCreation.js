const user=new Object()

user.name="prajwol"
user.email="shresthaprajwol161@gmai.com"
user.category="love"

console.log(user)


//? here when we see the constructor function under the prototype it has following properties ..where most of them are important ...one is propertyDescriptor...and it provides another 


//TODOS- value-> the value of the property
//TODOS- writable(boolean) -> whether this property in question is writable or not
//TODOS- enumerable(boolean)-> whether you can enumerate or loop throught this property.
//TODOS- configurabel(boolean)-> the configurable property tells whether to change the property desciptor such as writable and enumerable settings.

//?lets see what is meant by above things

console.log(Object.getOwnPropertyDescriptors(user))


//? to define the property of object we do like this ....i.e. object_name.key=value;...but there are another method we can use like that..

const person=new Object()

Object.defineProperty(person,'title',{
    value:'lord shree krishna',
    enumerable:true,
    writable:true,
    configurable:true
})

Object.defineProperty(person,'author',{
    value:'krishna',
    enumerable:true,
    writable:false,
    configurable:true
})

person.author="kemresh"//! it will not be changed since writable is false in this person property


console.log(person)
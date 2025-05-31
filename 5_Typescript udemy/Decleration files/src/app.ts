import {add} from './calculator.js'
import { userData } from './user.js'
//? here if you hover over that add then you get the type of num1:any and num2: any and the return type is any as well.... so to do strict typing we will make a declearation file.. it will tell the type of that num1 and num2 and the return type.

//? it is not manditory to have the seperate decleration file but keeping seperate is good option
 console.log(add(1,3))
 console.log(add("1",2))
 const newUser=userData(12,'Prajwol Shrestha');
 console.log(newUser)

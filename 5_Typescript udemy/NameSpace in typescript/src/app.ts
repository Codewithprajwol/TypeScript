/// <reference path="Mathutils.ts" />
///<reference path="StringUtils.ts" />
let sum=MathUtils.add(1,3)
let concatString=StringUtils.add('love','pure')

console.log(sum)
console.log(concatString)
//! after proper configuration in tsconfig.json now ..it's working properly

//? here it's not working in when compiled to js because this reference is not known by js...and to execute the code properly ...all the import file should be in one file the js file runs properly but we are doing differently ....i think that's the problem here.

//? to solve this we will have to give the outdir file name and change the module to AMD type in tsconfig.json

//! one thing to note that if you want to make a js library that is compatiable with the typeScript...then this typeScript nameSpaces will come into handy.

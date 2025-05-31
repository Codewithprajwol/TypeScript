"use strict";
const user = {
    id: 101,
    name: 'prajwol',
    contact: {
        email: "shresthaPrajwol161@gmail.com",
        phone: 9860611070
    },
    preferences: {
        theme: "dark",
        language: "English"
    },
    love: "love"
};
console.log(user);
const network = {
    state: "loading"
};
// type catAndDog=dog | cat;
function animal(pet) {
    return pet;
}
// animal({name:'catty',barks:true,wags:false,purrs:false})
const catty = {
    name: "cattiiie",
    purrs: false,
    hi: 'hello'
};
const testy = animal(catty);
console.log(testy);

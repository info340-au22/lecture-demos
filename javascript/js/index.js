'use strict';

// console.log("Hello world");
// console.log("It's so damn smokey today");

// const airQuality = 'bad';
// //airQuality = 210; //ppm?

// // let freshAir;
// // console.log(freshAir);
// // console.log("undefined");

// const lettersArray = ['a', 'b', 'c'];
// lettersArray[0] = 'A';
// lettersArray[3] = 'd';
// lettersArray[26] = 'z';
// console.log(lettersArray);
// console.log(lettersArray[10]);

// lettersArray + "s";


// console.log('forty' - 4);

// const num = 10
// const str = '10'

// const agesObj = {sarah: 42, amit:35, zhang:13};
// console.log(agesObj);

// const numWords = {1:'one', 2:'two', 3:'three'}
// const keyArray = Object.keys(numWords)
// console.log(keyArray);

// console.log(agesObj['fred']);
// agesObj['fred'] = 19;
// console.log(agesObj);

// const breakfast = { 
//     breakfast: "protein bar", 
//     time: 8,
// }

// const mealsObj = {
//     breakfast: 'cereal',
//     lunch: 'pizza',
//     dinner: 'pizza again'
// }

// const whichMealStr ='lunch';
// console.log(mealsObj.whichMealStr);


// const whenIAte = breakfast['ti'+'me'];
// console.log(breakfast);
// console.log(whenIAte);

const peopleArray = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
]

for(let i=0; i<peopleArray.length; i++){
    console.log(peopleArray[i].name)
}

for(const aPerson of peopleArray) {
    console.log(aPerson.name + ": "+ aPerson.height);
}

//for(String name : peopleArray){}

// console.log(peopleArray[0].name);


function greet(greeting, name){
    return greeting  + ", " + name;
}
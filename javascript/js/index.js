'use strict';

// console.log("Hello world!");
// console.log("My god it's smokey");

// let n = 3;
// n = 4;

// let amountOfBreathableAir;
// console.log(amountOfBreathableAir);

// const lettersArr = ['a', 'b', 'c']
// lettersArr[0] = 'A';
// lettersArr[26] = 'z';

// console.log(lettersArr);
// console.log(lettersArr.length);
// console.log(lettersArr[10]);

// console.log(2 + 'forty');
// console.log('forty' - 2);

// const num = 10
// const str = '10'

// // What are the values of each expression?
// // (they will all be booleans, true/false)
// const compare1 = ('' == 0)
// //                false == false
// console.log(compare1);

// const array = ['a', 'b','c'];
// console.log(array[0])
//array[i+1]


const ages = {sarah:42, amit: 35, zhang: 13};
console.log(ages);

const numWords = {1:'one', 2:'two', 3:'three'}
const keys = Object.keys(numWords) //[ '1', '2', '3' ]
console.log(keys);


const breakfastObj = {
    breakfast: 'protein bar',
    time: 8
}

const whenIAte = breakfastObj.time;
console.log(whenIAte);


const mealsObj = {
    breakfast: 'fruit',
    lunch: 'pizza',
    dinner: 'curry',
    '.lunch': undefined,
}

const whichMeal = 'lunch';
console.log(mealsObj[whichMeal]);


const people = [
    {name: 'Ada', height: 64, weight: 135},
    {name: 'Bob', height: 74, weight: 156},
    {name: 'Chris', height: 69, weight: 139},
    {name: 'Diya', height: 69, weight: 144},
    {name: 'Emma', height: 71, weight: 152}
]

for(let i=0; i<people.length; i++){
    console.log(people[i].name);
}

for(const personObj of people) {
    console.log(personObj.name + ": " + personObj.height);
}

//for(String name : names){}


function greet(greeting, name){
    return greeting  + ", " + name;
}
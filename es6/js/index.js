'use strict';

//named imports
import { otherMessage } from './other.js';

//default import
import otherDefault from './other.js';

const msgElem = <h1 id='hello' className='myClass'>Hello World!</h1>; 


//import ArrayList from './ArrayList.js'

// import * as otherModule from './other.js';

// console.log(otherModule.otherMessage);


// const peopleArray = [
//   {name: 'Ada', height: 64, weight: 135},
//   {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
//   {name: 'Chris', height: 69, weight: 139},
//   {name: 'Diya', height: 69, weight: 144},
//   {name: 'Emma', height: 71, weight: 152}
// ]
// console.log(peopleArray);

// console.log("We're live from index.js");

console.log("Other says: ", otherMessage);

// otherFunc();
otherDefault();

// //what we have: [{name...}, {}, {}]
// //what we want: ["Ada", "", ""]
// function getNameStringFromPeopleObj(peopleObj) {
//   const nameString = peopleObj.name;
//   //return a name String
//   return nameString;
// }

// //                callback function
// const peopleNames = peopleArray.map(({name}) => {
//   const nameString = name;
//   //return a name String
//   return nameString;
// })
// console.log(peopleNames);

// peopleArray.map((peopleObj) => peopleObj.name);


// //calculate the average height/weight ratio
// const ratioTotal = peopleArray.reduce(
//   (oldRunningTotal, peopleObj, idx, array) => {
//     // console.log("oldTotal", oldRunningTotal);
//     const {height, weight} = peopleObj;

//     const ratio = height / weight;
//     // console.log("ratio", ratio);

//     const newRunningTotal = oldRunningTotal + ratio/array.length;
//     // console.log("newTotal", newRunningTotal);
//     return newRunningTotal;
// }, 0);
// console.log(ratioTotal);
// // console.log("average ratio", ratioTotal/peopleArray.length);


// const foo = (params, more) => 'foo '+params;

// console.log(foo("world"));

// const myArray = [1,2,3,4];
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];
// const [x, y, ...theOthers] = myArray;
// console.log(x);
// console.log(y);
// console.log(theOthers);

// //destructuring objects
// // const myObject = {a: 1, b: 2};
// // const {b, a, c, } = myObject; //myObject.a to a, etc.
// // console.log(a); //=> 1
// // console.log(b); //=> 2;
// // console.log(c); //=> 3;


// // const personObj = {first: "Joel", last: "Ross"};

// // function getBMI( {height, weight} ) {

  
// //   return 703*weight/(height*height);
// // }

// // getBMI(personObj)

// const person = {name: 'Ada', height: 64, weight: 135}

// const personWithHat = { hat: "baseball", ...person  }; //clone an object!
// console.log(personWithHat);

// const tallerAda = {...person, height:74 }
// console.log(tallerAda);
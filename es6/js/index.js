'use strict';

//named import
import { sharedMessage as otherMessage } from './other.js'; 

import * as otherCollection from './other.js';

//default import
import otherDefault from './other.js';

//options:
// import ArrayList from './ArrayList.js';
// import { ArrayList } from './ArrayList.js';

const msgElem = <h1 id='hello' className='myClass'>Hello World!</h1>;



const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

console.log("Other says: "+otherMessage);

console.log(otherCollection.sharedMessage);

otherDefault();

// what I have: [{name:'Ada'}, {}, {}]
// what I want: ["Ada", "", ""];
// [] => []


// function transformPersonObjIntoNameString(personObj){
//   //const nameString = personObj.name;
//   return personObj.name;
// }
// peopleArray.map(transformPersonObjIntoNameString);


// const peopleNames = peopleArray.map((personObj) => {
//   const nameString = personObj.name;
//   return nameString;
// });
// console.log(peopleNames);






// const buttonElem = document.querySelector('button');

// function whatToDoOnEvent(event) {
//   console.log("hover!");
// }

// buttonElem.addEventListener('mouseover', (event) => {
//   console.log("hover!");
// });


// const foo = (params, param2) => 'foo '+params;

// console.log(foo("world"));


// // const myObject = {a: 1, b: 2, d:4};
// // const {b, a, c} = myObject; //myObject.a to a, etc.
// // console.log(a); //=> 1
// // console.log(b); //=> 2;
// // console.log(c); //=> 3;

// // const myArray = [1,2,3,4,5,6]
// // const [x, y, ...everything] = myArray;
// // console.log(x)
// // console.log(y)
// // console.log(everything);


// //a function that expects a person object
// function getBMI({height, weight}) {
//   return 703*weight/(height*height);
// }


// const person = { name: 'Ada', height: 64, weight: 135 }
// const adaClone = { hat: "baseball", name:"Ada-Clone", ...person, }
// console.log(adaClone);

// function addWorld(anArray){
//   const newArray = [...anArray, "World"];
//   return newArray
// }

// const myArray = ["Earth", "Moon"];
// const newArray = addWorld(myArray);
// console.log(myArray);
// console.log(newArray);




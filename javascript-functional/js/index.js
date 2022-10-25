'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
// console.log(peopleArray);

// const myArray = [1,2,3];

// const myFunction = function(person) {
//   console.log("Hello, "+person);
// }

// myFunction("Section B");

// const number = 4;

// console.log( number[5] );

// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// function sayGoodbye(name) {
//   console.log("See you later," +name);
// }

// //takes ANOTHER FUNCTION as an arg
// //will call the arg function, 
// //passing it "world"
// function doWorld(aFunction) {
//   aFunction("world");
// }

// //call function and pass value
// doWorld(sayHello); //prints "Hello world"
// doWorld(sayGoodbye);
// doWorld(function(string){
//   console.log("My favorite word is: " + string);
// });
// // const result = doWorld(sayGoodbye);
// // console.log(result);


// const msg = "My name is Joel";
// console.log(msg);

// //doOnClick(changeHTML);

// console.log( Math.round(3.4) );

// function doTogether(firstCallback, secondCallback){
//   firstCallback();  //execute the first function
//   secondCallback();  //execute the second function
//   console.log('at the "same time"!');
// }

// function patHead() {
//   console.log('pat your head');
// }

// function rubBelly() {
//   console.log('rub your belly');
// }

// doTogether(patHead, rubBelly());


//for(item of peopleArray) {... }

// peopleArray.forEach(function(item) {
//   console.log("now processing", item);
//   console.log(item.height);
// });



function square(n) { //a function that squares a number
  return n*n;
}

const numbers = [1,2,3,4,5];  //an initial array

// //transform the numbers using the square() function
// const squares = []; //the transformed array
// for(n of numbers) {
//  const transformed = square(n);
//  squares.push(transformed); //add transformed to array
// }
// console.log(squares); // [1, 4, 9, 16, 25]

//doubles is a newArray
const doubles = numbers.map(function(n) {
  return n*2;
})

console.log(numbers);
console.log(doubles);

const peopleNames = ['Joel', 'Owen', 'Max'];

//for (nameString of peopleNames) {}

const peopleGreetings = peopleNames.map(function(nameString) {
  const transformed = "Hi "+nameString+"!"
  return transformed;
})

console.log(peopleGreetings);
console.log(peopleNames);

const tallPeoplArray = peopleArray.filter(function(personObj){
  return personObj.height > 68;
})
console.log(tallPeoplArray);
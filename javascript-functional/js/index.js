'use strict';

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronoun: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
// console.log(peopleArray);

// const secondPersonObj = peopleArray[1];
// console.log(secondPersonObj.pronoun);
// console.log(peopleArray.name);


// //an array
// const myArray = [1,2,3];
// console.log(myArray);

// console.log([1,2,3]);

// const squareArray = { sideLength: 10 };

// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// const myArray = [1,2,3,4];

// const myFunction = function(person) {
//   console.log("Hello, "+person);
// }

// sayHello = function(otherName){
//   console.log("Howdy, "+otherName);
// }

// sayHello("y'all");

// const other = sayHello;
// other("other");


// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// function sayGoodbye(name){
//   console.log("Goodbye, "+name);

// }

// //takes ANOTHER FUNCTION as an arg
// //will call the arg function, 
// //passing it "world"
// function callWithWorldArgument(aFunction) {
//   aFunction("world");
// }

// callWithWorldArgument(sayHello);
// callWithWorldArgument(sayGoodbye);

// //What we'll do on Thursday
// // doOnClick(changeHTML);

// function sayHello() { //version with no args
//   return "Hello";
// }
// //print out the function
// console.log( sayHello );

// // //resolve the expression, THEN print that out
// console.log( sayHello() ); // logs "Hello", which is 
// //                          // what `sayHello()` resolves to.

// console.log( Math.round(3.4) );

function dther(firstCallback, secondCallback){
  //console.log(firstCallback);
  firstCallback();  //execute the first function
  secondCallback();  //execute the second function
  console.log('at the "same time"!');
}

function patHead() {
  console.log('pat your head');
}

function rubBelly() {
  console.log('rub your belly');
}

// const result = patHead(); //result is a undefined, not a function

// doTogether( patHead , rubBelly());

const printItem = function(item) {
  console.log(item);
}

peopleArray.forEach(function(item) {
  console.log(item);
});

// function(number){
//   return number*2;
// }

const numbers = [1,2,3,4,5];
const newArray = numbers.map(function(number){
  console.log("now mapping ", number);
  return number*2;
});
console.log(newArray);
console.log(numbers);

const peopleNames = ['Joel', 'James', 'Janice'];

//for(name of peopleNames) { ... }

const peopleGreetings = peopleNames.map(function(name) {
  //change the name
  //return the transformed result!
  return "Hi "+name+"!";
})
console.log(peopleGreetings);




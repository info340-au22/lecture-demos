'use strict';

console.log("executing other.js");

const otherSecret = "I am another secret";

export const sharedMessage = "Hello from other.js!";

export default function otherFunction(){
    console.log("I am other! This is my function!");
}

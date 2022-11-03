'use strict';

console.log("executing other.js");

export const otherMessage = "I'm other!";

const privateVar = "I'm a secret";

export default function otherFunc() {
    console.log(privateVar);
}




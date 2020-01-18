"use strict";

let s = "vishal";

console.log(s.toUpperCase());

//it is not recommended to create a primitive type object using New,
//doing so would return a Object not primitive type
let a0 = new Number(10);
let a1 = 10;

console.log(typeof(a0)); //this would print Object
console.log(typeof(a1)); //this would print number

//following statement is risky in nature
let a2 = new Number(0);
let a3 = 0;

if (a2) { //a2 is not a primitive number 0, but its an object so the if condition becomes true.
    console.log("what a wierdo !!!!");
}

if (a3) { //a3 is a primitive number 0, hence if condition becomes false as value is zero.
    console.log("what a wierdo !!!!");
} else {
    console.log("expected result");
}

let a4 = Number('123'); //this is a ideal way of converting one Primitive type to other Primitive type.

//In JS primitive values are not objects, but when we try to call helper methods like toUpperCase, 
//they are converted to object rumtime, and then toUpperCase method of that runtime object gets called. 
//Keeping primitive value intact, after the function call finishes. Onces function call is over dynamically created object is deleted

//'null' & 'undefined' primitive type are exception, it has got no helper methods.

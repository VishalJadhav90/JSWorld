"use strict";

function makeuser(name, age) {
    return {name: name, age: age};
}

function makeusershorthand(name, age) {
    return {name, age};
}

console.log("print hlleo");
console.log(makeuser("vishal", "30"));
console.log(makeusershorthand("vishal", "30"));

let age = 30
let blah = NaN

let dict = {age: "age"};
console.log(dict);

let dict1 = {age, blah}; //property value shorthand
console.log(dict1);

if (dict1.blah == undefined) {
    console.log("means no such property exists !!!");
}

dict1[age] = 'thirty';
console.log(dict1);

//in operator on objects
if (age in dict1) {
    console.log("found "+ age + " in dict1 "+ dict1);
}

"use strict";

// in js you can pass any number of arguments to a function, regardless of how many args it accepts
// in such case extra arguments are simply ignored.
function sum(a, b) {
    return a + b;
}

//console.log(sum(1,2,3,4,5));

function sumAll(...multi) {
    sum = 0;
    for (let arg of multi) {
        sum += Number(arg);
    }
    return sum;
}

console.log(sumAll(1, 2));

function gatherAuthorDetails(firstname, lastname, ...titles) {
    console.log(firstname, lastname);
    for (let title of titles) {
        console.log(title);
    }
}

gatherAuthorDetails('vishal', 'jadhav', 'software testing', 'let us c', 'let us c++');

//function gatherDetails(firstname, ...titles, lastname) { //the rest argument can not stand in middle, this will throw error.
//
//}

// gatherDetails('vishal', 'jadhav', 'ackdf', 'sdkfjlsdf');

// you can capture variable number of agruments in a special variable named arguments

function mapZop() {
    console.log(arguments);
    console.log(typeof(arguments));
}

mapZop("vishal", "jadhav", "surname");

let a = [1,2,3,4];
console.log(typeof a);

// spread turns array into list of arguments
let arr = [3, 8, 1];
let arr1 = [-2, 0, -5];
console.log( Math.max(arr) ); // NaN
console.log( Math.max(3, 5, 1));
console.log( Math.max(...arr, ...arr1));

let s = "vishal";
console.log(...s);
for (let c of s) {
    console.log(c);
}

console.log(Array.from(s));
"use strict";

let a = 1/1000;
let aa = 1e-3;

if (a==aa) {
    console.log("e-3 means 1/1000");
}

//similary
let b = 10000
let bb = 1e4

if (b==bb) {
    console.log("e4 means 1*10000");
}

//hex number is represented with 0x
//binary number is represented with 0b
let he = 0xff; //255
let bi = 0b11111111; //255

//converting a number to hex value or binary value or base 36 value
let d = 255;
console.log(d.toString(16));
console.log(d.toString(2));
console.log(d.toString(36));

//what if you want to convert a number directly to string without storing in a variable
//.. will allow to call helper methods directly on number
console.log(255..toString(16));
console.log((255).toString(2)); // (255) will be treated as an object, hence we would be allowed to call method on it.

// Strange fraction operations
console.log(0.1+0.2);

// whats the solution to above extra pricision ? toFixed call will help you get rounding to precision that you will specify
// in case we specify 5 in toFixed remaining positions are filled with 0
console.log((0.1+0.2).toFixed(2));

//tests: isFinite, isNaN - these tests are performed on numbers (NaN-Not a Number)
console.log(isNaN(NaN));
console.log(isNaN('str')); // here 'str' is converted to an integer first, but obviously that fails hence NaN is returned so true
console.log(isNaN('10'));

//NaN is special, if it is compared with anything result is always False, even if NaN is compared with NaN result is False
if (NaN == NaN) {
    console.log("what a miracle");
} else {
    console.log("told you so");
}

console.log("-----------------------------------")
// isFinite, the argument is first converted to number first
console.log(isFinite(10));
console.log(isFinite(' 10 ')); //if there are spaces at the beginning and end of the string they are ingnored.
console.log(isFinite('str'));//converting str to number fails, hence NaN. And isFinite(NaN) is False
console.log(isFinite(Infinity));
console.log(isFinite(+'      ')); //emptry string or string with just spaces when converted to number give zero


let obj1 = {
    name: 'vishal',
    surname: 'jadhav',
};

let obj2 = {
    name: 'vishal',
    surname: 'jadhav',
};

// to fix the issue of NaN===NaN returning false, there is one reliable method Object.is(v1, v2)
console.log("-----------------------------------")
console.log(obj1 == obj2);
console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj1));
console.log(NaN==NaN);
console.log(Object.is(NaN, NaN));

//parseInt, parseFloat - looks for a interger float value in given string respectively.
//123px or 22.1$ works fine when passed to parseInt or parseFloat - however the moment a letter is detected both method stops
//a123 - returns NaN as 'a' is first letter detected
console.log("-----------------------------------")
console.log(parseInt('0xff')); // here though x is letter, since its 0x its treated as hex identifier.
console.log(parseInt('ff', 16)); //when base is 16, f is valid number representing letter hence this works
console.log(parseInt('ff')); //this returns 0, as in decimal system f is not a valid number presenting letter
console.log(parseInt('2N9C', 36)); // when base is 36, all alphabates represent a valid number, hence this would produce a number
console.log(parseInt('N9C')); // when base is 10 and N is not a number presenting letter in base 10, hence this returns NaN

//Math module has many helper functions
//Math.pow, Math.min, Math.max, Math.random, 
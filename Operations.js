"use strict";

console.log(22+1+"3"); //for plus it wont try to convert "string" into integer

console.log("10" / "2"); //for all other operators other than plus it will try to convert a string into an integer
let s = true;

console.log(+s);

console.log(+"");

let apples = "2";
let oranges = "3";

console.log(apples + oranges);

console.log(+apples + +oranges);
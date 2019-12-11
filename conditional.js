"use strict";
let a = "a" / "b";

let e = ("a" == "b");
console.log(+"a");

if (+"a" == 0) { 
    console.log("wow worked");
}
if (a == true) {
    console.log("true");
} else if (e == false) {
    console.log("false");
} else if (! a ) {
    console.log("no value in a");
}

let result;
let aa;
let bb;
aa = 4;
bb = 1;
console.log((aa+bb)<3 ? "below": "above");

a = a!=e ? "true": "false";
console.log(a);

//assigning output of comparision operation to a variable is also possible
let age = 20;
let allowed = age > 18;
console.log(allowed);

age = prompt("age?", 18);

let message = age < 3 ? "Hi baby": age <18 ? "hello": age<100 ? "greetings": "what an unusual age";
alert(message);

// non traditional use of ?
let company = prompt("which company created javaScript ");
(company == 'netspace') ? alert("Right!"): alert("wrong!");

if ("0") {
    alert("hello");
}

let jsname = prompt("whats official name of javascript");

if (jsname == "ecmascript") {
    alert("correct");
} else {
    alert("wrong");
}

let n = prompt("enter the number:");
//n  = Number(n);
if (n>0) {
    alert("number is greater than zero");
} else if(n<0) {
    alert("number is less than zero");
} else if(n==0) {
    alert("number is zero");
} else {
    alert("invalid number")
}

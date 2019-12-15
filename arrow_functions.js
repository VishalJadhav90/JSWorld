"use strict";

let func = (a, b) => a+b;

console.log(func(1,2));
//alert(func(1, 2))

let square = a => a*a;
console.log(square(10));

//one liners at first wont appear very intuitive to read 
//but are very handy once you get used to it.
let age = +"10";
let a = 10
let resp = (age < 10) ? () => a = a+10 : () => a = a + 20;
alert(a);
let r = resp();
alert(r);
alert(a);

//multiline arrow functions, you will have to write explicit return 
//to if you split expression on multiple lines
let arrow = (a, b) => {
    let result = a + b;
    return result;
}

alert("result of multiline expression in arrow function: "+ arrow(5, 5));




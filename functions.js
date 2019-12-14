"use strict";

function fun() {
    console.log("hello there");
}

fun();

let funVar = function func() {
    console.log("wow this is unique in this language");
};

console.log(funVar); //this does not print function definition

//alert(funVar); //this does print function definition

let myfunc = funVar;

myfunc();
funVar();

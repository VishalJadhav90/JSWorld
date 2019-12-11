"use strict";

let login;

login = "random";

let message = login == "employee" ? "Hello" : login == "director" ? "greetings" : login == "" ? "no login" : "show your id?";

console.log(message);

let value = "wow" || false;

console.log(value);

if (+NaN == 0) { // except for + for all other operations with numeric values it tries to convert others to number
    console.log("I am dumed");
}

console.log(+NaN);

let currentuser = null;
let defaultuser = "john";
let name = currentuser || defaultuser || "unnamed";
console.log(+currentuser);
console.log(name);

//evaluation of or is called short circuit evaluation
let x;
false || (x=1);
console.log(x);

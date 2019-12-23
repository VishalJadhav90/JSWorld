"use strict";

let obj = {};

// or

let nobj = new Object();

obj = {"name": "vishal",
"age": 30}

console.log(obj);

obj['surname'] = "jadhav";

console.log(obj);

obj.isAdmin = true;

console.log(obj);

delete obj.isAdmin

console.log(obj);

let bag = "mice";

let dict = {
    [bag]: "vishal",
    [bag + "-bag"]: "correct",
}

console.log(dict[bag])
console.log(dict[bag + '-bag'])

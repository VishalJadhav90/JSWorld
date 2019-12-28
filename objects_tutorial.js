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

let user = {};
user.name = 'John';
user['surname'] = "Smith";
user.name = 'pete';
delete user.name
console.log(user);

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty({}))

const user11 = {name: 'John'};
user11.name = 'Snow';
user11.surname = "Blah";
console.log(user11);
//user11 = "vishal";

let sum = 0;
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

for (let emp in salaries) {
    sum += salaries[emp];
}
console.log(sum);

for (let emp in salaries) {
    if (typeof(salaries[emp]) == "number") {
        salaries[emp] = salaries[emp] * 2
    } 
}
console.log(salaries);
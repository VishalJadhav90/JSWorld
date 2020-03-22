"use strict";

// one interesting thing about the inner functions is that they can be passed as return value

let x = 1;

function func() {
  console.log(x); // ?
  //let x = 2; // the moment wew put this line, there will be an error
}

func();

let users = [
    {name: "john", age: 40, surname: "Johnson"},
    {name: "vishal", age: 23, surname: "abc"},
    {name: "ann", age: 10, surname: "singer"},
];

users.sort((val1, val2)=> val1.age>val2.age? 1: -1);

console.log(users);

function byField(field) {
    return (val1, val2)=> val1[field]>val2[field]? 1: -1;
}
users.sort(byField('name'));

console.log(users);

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let local_i = i;
        let shooter = function () {
            console.log(local_i);
        }
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();
console.log(army[0]());

console.log(army[5]());

console.log(army[9]());
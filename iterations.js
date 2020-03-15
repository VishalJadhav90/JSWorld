'use strict';

let user = {'name': 'vishal', age: 30};

for (let key of Object.keys(user)) {
    console.log(key);
}

//the diff between map.keys() and Object.keys() is that map.keys() returns a iterable not an Array
//on some browsers Object.values(), Object.entries() - does not work so use obj[key] 


let values = Object.keys(user).map(function (key) {
    return [key, user[key]];
})

console.log(values);

//keys method ingore symbolic keys
let a = {
    [Symbol('id')]: "1234",
    'name': 'vishal',
    'surname': 'jadhav'
}

console.log(Object.keys(a)); //.keys does not return Symbol keys just normal keys are returned


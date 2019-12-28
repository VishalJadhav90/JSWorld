"use strict";

let name = "vishal";
let age = 30;

let dict = {name, age}; 

for (let key in dict) {
    console.log(key + ":" + dict[key]);
}

let array = ['vishal', 'jadhav'];
for (let index in array) {
    console.log(index + ":" + array[index]);
}

//are the properties ordered ? if integer key then sorted for rest creation order
let numdict = {
    "40": "forty",
    "10": "ten",
    "0" : "zero",
    "20": "twenty",
}

numdict.name = name;
numdict.age = age;

for (let key in numdict) {
    console.log(key + " :" + numdict[key]);
}
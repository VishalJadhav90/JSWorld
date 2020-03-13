'use strict';

let john = { name: "John" };

let array = [ john ];

john = null; // overwrite the reference

//john will not be garbage collected as array is pointing to object, despite of setting john reference to null
console.log(array[0]);


john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; // overwrite the reference

//john will be still be accessible from map as john is stored in map as well, despite of setting john reference to null
console.log(map.keys());

//weakmap is something which does not prevent the garbage collection of object

//weakmap can have only object as key, its does not accept primitives as keys
let wm = new WeakMap();
//wm.set('vishal', 'jadhav'); // this gives error - primitive datatypes are not allowed as keys - only objects
console.log(wm);

john = { name: "John" };
wm.set(john, "...");
john = null; //setting objs reference to null will cause garbage collector to collect john, weakmap will also loose that item
//console.log(wm.keys()); //weakmap does not support iterations, like map so keys values entries methods are not allowed
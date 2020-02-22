'use strict';

//the diff between object and map is in map key can be of any type, whereas in objects the key can be only of type string and symbol
let m = new Map();
m.set('name', 'vishal');
console.log(m.get('name'));

//ideally when accessing elements from map dont access them like map['key'] to avoid mistreating it as an object
m['name'] = 'vishal'; //here we are treating this as a object and setting property 'name'
//so m['name'] is not same to m.set('name')

//an object can be a key for map
let john = {'name': 'john'};

let mm = new Map();

mm.set(john, 123);
console.log(mm.get(john));

//map.set call returns map itself so we can chain the set calls.
mm.set('1','one').set('2','two');

console.log(mm);

console.log(mm.keys());
console.log(mm.values());
console.log(mm.entries());

for (let entry of mm.entries()) {
    console.log("key: "+entry[0]);
    console.log("value: "+entry[1]);
}

//map in javascript preserves order, unlike the attributes of the object and dict in python.

for (let entry of mm) { //this will give you an array as response
    console.log(entry);
}


//similar to map even sets are ordered in javascript
let s = new Set();

s.add(10);
s.add(10);

s.forEach((value, sameValue, s) => console.log(value, sameValue, s));

s = new Set([10,10,11,12]);
console.log(s);

let ss = new Set([12,11,10,10]);

console.log(s == ss);

let v = mm.keys(); //this returns an interable not an array. hence we cant use push method 
console.log(typeof(v));
//v.push(12);

//we can convert an array like object or iterable to array using Array.from method
v = Array.from(v);
v.push(12);
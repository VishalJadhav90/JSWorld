'use strict';

let a = [1, 2, 3, 4];

a.splice(0,2,11,22);

console.log(a);

//splice returns array of removed elements 

a = [1,2,3,4];
var removed = a.splice(0,2);
console.log(a);

// using 'delete' we can delete element at an index, however that would keep a empty hole in array
let aa = [1,2,3,4];
delete aa[0];
for (let i of aa) {
    console.log("i " + i);
}
console.log(aa.length);
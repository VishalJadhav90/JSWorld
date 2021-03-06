"use strict";

let a = new Array();
let ab = [];


let aa = new Array('a','b');
let bb = ['a', 'b'];
console.log(aa);
console.log(bb);

//it is not nessesory to have elements of same type in arrays, we can store elements of different type in arrays
aa = ['vishal', 1, {abc:'abc', pqr:'pqr'}]
for (let ele of aa) {
    console.log(ele);
}

//useful methods push/pop, shift/unshift
//push adds in end, pop removes from end
//shift removes from beg, unshift adds at beg

//queue, first in first out 
let q = [1,2,3,4]
q.push(5)
console.log(q);
let v = q.shift();
console.log(q);
console.log(v);

//stack, last in first out
let s = [1,2,3,4]
s.push(5)
console.log(s);
v = s.pop();
console.log(s);

//dequeue - double ended queue
let dq = [1,2,3,4]
dq.push(5)
console.log(dq);
dq.pop()
console.log(dq);
v = dq.shift()
console.log(dq);
dq.unshift(v);
console.log(dq);

//technically Arrays are objects, so we can play with arrays the way we do with objects, but that is going to break system.
dq.vishal = 'Jadhav';
dq[100] = 100;
for (let a of dq) {
    console.log(a);
}

//for--in gives all properties of an Array like object, it could turn out to be problem when dealing with arrays
//for--of is specifically meant to deal with numeric properties of an Array or Array like object
console.log("----------------------");
for (let a in dq) {
    console.log(a);
}


//freaky array lengh property
//its the largest index plus one - not the count of actual elements in array 
//plus its changable - you can change length propery of a array length
//one we truncate the array by setting array length - we loose truncated part permanently 
//if we increase length, then nothing interesting happens
let fa = [1,2,3];
fa.length = 10;
for (let a of fa) { //reads the fa.length property and this loops for 10 times
    console.log(a);
}

console.log("------------------------");
fa.length = 1; //this will truncate last to values of array - and its irreversible
for (let a of fa) {
    console.log(a);
}

console.log("------------------------");
let wa = new Array(3);
console.log(wa.length, wa);

//wierd
let waa = new Array('vishal', 'jadhav', 'blah', 'lbah');
console.log(waa.length, waa);
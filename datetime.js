'use strict';

let d  = new Date();

console.log(d);

//you can also create date by passing milliseconds to datetime object
d = new Date(0);

console.log(d);

d = new Date(60*60*24*365*1000);

console.log(d);

//upon passing negative offset to Date method it will count date backwords

d = new Date(- 24*3600*1000);
console.log(d);

d = new Date("2020-03-21");
console.log(".....................", d);

d = new Date();
console.log(d);

console.log(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getUTCHours())

console.log("blahllllllllllllllll", d.getTime()); //returns milliseconds from Jan 1st 1970 in UTC
console.log(d.getTimezoneOffset()); //this gives difference between UTC and local timezone in minutes.

d = new Date();
d.setFullYear(2020);
d.setHours(12);
console.log(d);

d = new Date(2020, 0, 21);
console.log(d.getDate());
console.log(d);

d = new Date(2020, 0, 0); //automatically it will detect date to be 2019-12-31
console.log(d); //while printing date this way it is always printed in UTC format.

//converting date to a number 
console.log(+d); //this is same as getTime(), this returns number of milliseconds from epoch in UTC convention.

//if you just want milliseconds till now

console.log(Date.now()); // this is equivalent to new Date().getTime(), but does not create intermediate object. so good

//this is often used to calculate time taken by code block

let now = Date.now();

for (let i=0; i< 100000; i++) {
    
}

let later = Date.now();

console.log(`above block took ${later-now} ms`);


//date parse to parse a datestring into Date object.
//let n = Date.parse('2020-01-26T05:30:00.000+05:30')
let n = Date.parse('2020-01-26T00:00:00.000') //if we dont mention Z then the time_str given in Date.parse is treated as a local time str
let dd = new Date(n);
console.log(dd);

let nn = Date.parse('2020-01-26T05:30:00.000Z') //if we  mention Z then the time_str given in Date.parse is treated as UTC str
let ddd = new Date(nn);
console.log(ddd);

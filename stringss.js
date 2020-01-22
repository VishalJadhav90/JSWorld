"use strict";

function sum(a, b) {
    return a+b;
}

let result = sum(1, 2);
console.log(`sum of 1 & 2 is ${result}`);

//advantage of backticks is that they allow string to span on multiple lines
let a = `
Guests:
vishal 
jadhav
`
console.log(a);

let name = 'vishal';
console.log(name[0]); //first character
console.log(name.charAt(0)); //first character
console.log(name[name.length-1]); //last character

// difference between [] and charAt is if index is invalid, [] return undefined, but charAt returns '' empty string.
console.log(name[100]);
console.log(name.charAt(1000));

// for loop for iterating over characters of a string
for (let ch of name) {
    console.log(ch);
}

let obj = {
    name: 'vishal',
    surname: 'jadhav',
};

Object.keys(obj);

for (let a of Object.keys(obj)) {
    console.log(a);
}

console.log("interface".toUpperCase());
console.log("INTERFACE".toLowerCase());

//even a single character from string is treated as a string unlike C/C++/Java
console.log("interface"[0].toUpperCase());

//search substring in a given string
console.log("interface".indexOf('face')); //optional param pos- can be specified to start string search at that given loc
//also if not able to locate substring in given string, the method returns -1 

let phrase = 'As sly as a fox, as strong as an ox';
let searchstr = 'as';
let nextpos = 0;
while(true) {
    let pos = phrase.indexOf(searchstr, nextpos);
    if (pos == -1) {
        break;
    }
    console.log(`found at index ${pos}`);
    nextpos = pos + 1;
}

//lastIndexOf searches occurances in reverse order from last end, 
//optionally we can provide pos from where the reverse search would be carried out
let revpos = phrase.length
while( (revpos = phrase.lastIndexOf(searchstr, revpos-1)) != -1) {
    console.log(`found at index ${revpos}`);
}

//in case we want to check if a string is part of bigger string using if condition we have to check -1
if (phrase.indexOf('vishal')==-1) {
    console.log("vishal word is not part of \'"+phrase+"\'");
} else {
    console.log("vishal word is part of \'"+phrase+"\'");
}

//in js, bitwise not ~num is equal to -(num+1), when indexOf returns -1, if we bitwise not -1 then it becomes -(-1+1) == 0
//hence if condition fails, this is a shortcut people use to avoid != -1 check as we have done above.
if (~phrase.indexOf('vishal')) { //meaning of this if condition is 'if found'
    console.log("found in given string");
} else {
    console.log("not found in given string");
}

//there are some modern methods to check presence of substr in original string
//such as includes, startsWith, endsWith
console.log(phrase.includes('ox')); //this returns true - this method accepts option param position from where it will start checking
console.log(phrase.startsWith('As')); //this returns true
console.log(phrase.endsWith('ox')); //this returns true


//there are three methods in javascript that give substring
//substring, slice, substr
console.log("substring: " + phrase.substring(-4)); //start and end pos - negative postion does not work
console.log("substr: "+ phrase.substr(-5, 2)); //start and length of substring to be returned - negative position does work
console.log("slice: "+ phrase.slice(3,8)); //start and end pos
console.log("slice: "+ phrase.slice(-4, -1));//slice also works with negative indices. -ve value means from end

//in substring if we swap beg and end postion no change in output
console.log("substring: " + phrase.substring(0, 5)); //0-5 proper movement produces output
console.log("substring: " + phrase.substring(5, 0)); //5-0 not proper movement but still produces same output as 0-5

//but in slice if we swap beg and end position, it impacts the output
console.log("slice: "+ phrase.substring(0, 5)); //proper directional movement from 0 to 5, hence produces output
console.log("slice: "+ phrase.slice(5, 0)); // start at 5 and end at 0 - not a proper directional movement hence no output
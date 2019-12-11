"use strict";

let variable = 3;

while (variable) {
    console.log(variable);
    variable--;
}

let a = 1;

for(a=0; a<3; a++) {
    console.log(a);
}

do {
    console.log(a);
} while(a++<10)

//inline variable declaration

for(let i=0; i<3; i++) {
    console.log("i: "+i);
}

// labels are used to jump to and exit from different level of nested loops

console.log("I am in outer part of loop")

outer: for (let a=0; a<2; a++) {
    console.log(a);
}

for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
        if (j==1) break outer;
        console.log("j: "+j)
    }
}

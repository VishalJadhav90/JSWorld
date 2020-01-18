"use strict";

function acceptNumber() {
    while(true) {
        let num = prompt("please enter a number");
        if (isFinite(num)) {
            return +num;
        }
    }
};

//alert(acceptNumber());
function randomInteger(min, max) {
    let str = String(max);
    let maxdegree = str.length;
    maxdegree = Math.pow(10,maxdegree);
    //console.log(maxdegree);
    while (true) {
        let num = Math.random();
        num = +(num * maxdegree).toFixed(0);
        //console.log("vishal", typeof(min), typeof(num), typeof(max));
        if ( (min <= num) && (num<= max)) {
            //console.log("condition is true");
            return num;
        }
    }
}

console.log(randomInteger(1, 20));
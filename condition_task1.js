"use strict";

while(true) {
    let number = prompt("enter number greater than 100");
    if (Number(number)>100) {
        break;
    } else {
        alert("wrong number "+ number);
    }
}
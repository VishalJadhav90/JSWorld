"use strict";

let a = 10;

switch(a) {
    case 1:
        console.log(a);
        break;
    case 2:
        console.log(a);
        break;
    case 3:
        console.log(a);
        break
    default:
        console.log("in default");
        console.log(a);
}

//any expression can be switch case expression
let aa = "1";
let bb = 1;
switch(+aa) {
    case bb+0:
        console.log("value of expression in case:" + (bb+0));
}

//grouping of case
switch(+aa) {
    case bb:
    case bb+1:
        console.log("bothe the cases are actually same");
        break;
    default:
        console.log("strange case");
}

let type = prompt("enter value")
switch(Number(type)) {
    case 1:
        alert(1);
        break
    case 2:
        alert(2);
        break
    default:
        alert("type matters");
}

let browser = "mozilla";
switch(browser) {
    case "edge":
        alert('you are on edge');
        break;
    case "mozilla":
    case "chrome":
    case "chromium":
        alert("we support these browsers too..");
        break;
    default:
        alert("we dont support "+browser);
}

let ip = +prompt("a?", "");
switch(ip) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2/3");
        break;
    default:
        alert("unrecognised value");
}

let resp = confirm("blah blah black sheep have any wool?");
alert("you have entered "+resp);
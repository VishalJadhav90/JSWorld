"use strict";

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}

let married;
function AlertYes() {
    alert("you are going to suffer a lot, good luck");
    married = true;
}

function AlertNo() {
    alert("good job bro !!!");
    married = false;
}

ask("are you married?", AlertYes, AlertNo);

let age = Number(prompt("how old are you"));
if (age > 35 && married == false) {
    alert("you are going to have a lonely life !!!");
}

if (age < 35 && married == false) {
    alert("you are going to have a lovely life !!!");
}
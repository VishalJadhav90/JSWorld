"use strict";

let ask = (question) => {
    let func = confirm(question) ? () => alert("yes") : () => alert("you cancelled the execution");
    return func
}

let func = ask("continue execution?");
func();

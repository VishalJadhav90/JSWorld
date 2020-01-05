"use strict";

let calculator = {
    read() {
        let number1 = prompt("enter first number");
        this.no1 = +number1;
        let number2 = prompt("enter second number");
        this.no2 = +number2;
    },
    sum() {
        this.result = this.no1 + this.no2;
        alert("addition is " + this.result);
    },
    mul() {
        this.result = this.no1 * this.no2;
        alert("multiplication is "+ this.result);
    }
}

calculator.read();
calculator.sum();
calculator.mul();


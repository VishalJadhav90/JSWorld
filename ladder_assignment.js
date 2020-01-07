"use strict";

let ladder = {
    step: 0,
    up() {
        this.step ++;
        return this;
    },
    down() {
        this.step --;
        return this;
    },
    showStep: function() {
        alert(this.step);
    }
}

ladder.up().up().down().showStep();

let dict = {
    name: 'vishal',
    [ladder]: 'vishal'
};

let keys = Object.keys(dict);
console.log(keys);
console.log(typeof(keys[1]));

let sum = dict + ladder;
console.log(sum);
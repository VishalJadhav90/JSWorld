'use strict';

let a = new Array();

a = ['vishal', 'jadhav'];

let [name, surname] = a;

console.log(name);
console.log(surname);

//destructuring also works with split method, or methods that gives array as an output

let [firstname, lastname] = "Vishal Jadhav".split(" ");

console.log(firstname, lastname);

//unwatend elements can be thrown away with extra comma, no need to give _ like in python

let [var1, var2, , , var3] = ['a', 'b', 'c', 'd', 'e'];

console.log(var1, var2, var3);

//this not only works on array but any iterable object

[var1, var2, , , var3] = new Set(['1', '2', '3', '4', '5']);
console.log(var1, var2, var3);

let obj = {
    current: 0,
    last: 10,
    [Symbol.iterator] : function() {return this},
    next: function next() {
        if (this.current <= this.last) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    }
};

let var11, var22, var33;
[var11, var22, var33, , , , , , , ] = obj;

console.log(var11, var22, var33);

//destructuring is good for arrays inside arrays. for example:

let aa = [['vishal', 'jadhav'], ['amruta', 'bandal']];

for( let [name, surname] of aa) {
    console.log(name, surname);
}

//if you want to collect a few values and then skip collect rest of values.. this can be done using 'rest' keyword.

let [name1, name2, ...rest] = ['Vishal', 'Jadhav', 'Proper', 'Guide'];

console.log(rest);

//if array does not have enough values then variables have 'undefined' value.
[name1, name2] = []
console.log(name1, name2);

//you may also put default values, for variables in destructring if in case array does not have enough members
let [name11='blah', name12='blah', name13='black', name14='sheep'] = [];
console.log(name11, name12, name13);


//object destructuring 
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
let {title, width, height} = options;

console.log(title, width, height);

//however you want to assign values to some different named variable even that can be done

let {title: t, width: w, height: h} = options;

console.log(title, width, height);
console.log(t,w,h);

//seqeunce does not matter, you can shuffle the variable to other format
{width, title, height} options;
console.log("----------", title, width, height);

//also similar to array for object destructuring you can assign default values
let salarydetails = {
    'empid': 100,
    'empsalary': 100000,
};

let {empname:ename="", empid:eid = -1, empsalary:esalary = 0} = {};

console.log(ename);
console.log(eid);
console.log(esalary);
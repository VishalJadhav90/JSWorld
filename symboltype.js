//strange that key datatype could be String or Symbol nothing else in js.
"use strict";



let id = Symbol('id');
let user = {
    "name" : "vishal",
    [id]: 'id1234',
};
let s1 = Symbol('id');

if (id === s1) {
    console.log("they are same");
} else {
    console.log("symbol is always unique, despite of the fact that description value assigned to symbol is same");
}

// important thing to notice is that, symbols dont autoconvert to string value
//console.log(id);
//alert(s); //this does not work
//alert(id.description); // id


// for in operation skips keys as Symbols
for (let key in user) {
    console.log(user[key]);
}

let mykeys = Object.keys(user); //keys operation also skips keys as Symbols
console.log("mykeys: " + mykeys); //this is called 'hiding symbol properties of object'
console.log("symbol id: " + user[id]); //id will be accessible to only .js where we have created it.

let cloned_obj = Object.assign({}, user);
console.log(cloned_obj[id]);


//keys can be a string or Symbol, rest other keys in other primitive types are converted to string
let o = {
    0:"0", //same as "0": "test"
};
console.log(o[0]); // 0
console.log(o['0']); //same property 0

//global symbols, how to access keys with same symbol 



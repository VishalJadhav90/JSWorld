"use strict";

// one way of creating an object 
let User = {
    firstname: 'vishal',
    lastname: 'jadhav'
};

function UserDetails(fname, surname) {
    this.firstname  = fname,
    this.lastname = surname
};

let u1 = new UserDetails('amruta', 'jadhav');

console.log(u1);

console.log(typeof u1);
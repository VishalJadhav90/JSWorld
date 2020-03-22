'use strict';

let student = {
    name: 'john',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
};

let json = JSON.stringify(student);

console.log(json);

console.log(JSON.stringify(1));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));

//what is ignored in stringify - symbol properties, fnctions, properies undefined.

let user = {
    sayHi() { //function is ignored.

    },
    [Symbol("id")]: 100, //symbol properties are ignored.
    email_id: undefined, //undefined properites are also ignored.
}

console.log(JSON.stringify(user));

let emp_details = {
    basic_details: {'name': 'vishal', 'surname': 'jadhav', 'age': 42},
    salary: 40000,
    department: 'engg',
}

console.log(JSON.stringify(emp_details));

//stringify fails for cyclic object references.

//emp_details.usr = user;
//user.emp_det = emp_details;
//console.log(JSON.stringify(emp_details));

//you can specify what to have or what not, in stringify
console.log(JSON.stringify(emp_details, ['basic_details', 'salary', 'department', 'name', 'surname', 'age']));

//instead of mentioning the attributes one by one, we can use mapper function that would decide which attributes to include or ignore
console.log(JSON.stringify(emp_details, function (key, value) {
    console.log(key, typeof(value));
    return (key == "usr") ? undefined: value; 
}, 2));

//toString, toJSON
console.log(".............................");
let myobj = {
    name: 'vishal',
    surname: 'jadhav',
    toJSON() {
        return `myobj: ${this.name} ${this.surname}`;
    }
}

console.log(JSON.stringify(myobj));

let obj_json = JSON.stringify(emp_details, function (key, value) {
    console.log(key, typeof(value));
    return (key == "usr") ? undefined: value; 
}, 2);

let newobj = JSON.parse(obj_json);
console.log(typeof(newobj));

let objstr = "[1,2,3,4]";
let sq_obj = JSON.parse(objstr, function (key, value) {
    console.log(key, value * value);
    return value * value;
});
console.log(sq_obj);

//optional function reviver can be specified to transform i.e map values
// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let dobj = JSON.parse(str, function(key, value) {
    return key == "date"? new Date(Date.parse(value)): value;
});

console.log(dobj.date.getDate());

let ex_user = {
    name: 'john smith',
    age: 35
};

console.log(JSON.stringify(ex_user));

let room = {
    number: 23
  };
  
let meetup = {
title: "Conference",
occupiedBy: [{name: "John"}, {name: "Alice"}],
place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
/* your code */
console.log(key, value);
return (key != "" && value == meetup) ? undefined: value;
}));

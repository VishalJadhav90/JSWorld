'use strict';

let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}

//whenever we try to iterate over an object using for..of, Symbol.iterator attribute of object is looked for
//that should return object which has got a next() method in it, that next() method retuns an object with structure
//{done: false, value: value_to_return} or {done: true} when we want to stop the iteration.
for (let a of range) {
    console.log(a);
}

//to make it more simpler the independent iterator object that we have created could be combined in range object itself
//range[Symbol.iterator]() - returns the range object itself: and it has the nessesory next method, and remembers the progress 
//of for..of using this.begin attribute. 
range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    },
}

for (let aa of range) {
    console.log(aa);
}

//Iterator over a string
for (let c of 'vishal') {
    console.log(c);
}

//we can explicitly use Iterator object 
let str = 'vishal';
let it = str[Symbol.iterator]();
while (true) {
    let result = it.next();
    if (result.done) {
        break;
    } else {
        console.log(result);
    }
}

//iterables and array-like objects are different things
//array like objects have number as attributes and has length property
//iterables object has Symbol.iterable set on it.
//for..of looks for Symbol.iterable - arraylike object does not have that set so error
//for..in works good for arraylike objects, but not not very good for iterable objects as they dont have length method.
let arraylike = {
    0: 'one',
    1: 'two',
    length: 2,
};

console.log("--------------------")
for (let el in arraylike) {
    console.log(el);
}

console.log("--------------------")
for (let r in range) {
    console.log(r);
}

//since Symbol.iterable and arraylike are different things we need something universal that can give array give a
//iterable, Array.from(arraylike) gives you an array
let arr = Array.from(arraylike);
console.log(arr);

arr = Array.from(range);
console.log(arr);

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
    begin: 1,
    end: 5,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.begin <= this.end) {
            return {done: false, value: this.begin++};
        } else {
            return {done: true};
        }
    },
}

for (let aa of range) {
    console.log(aa);
}
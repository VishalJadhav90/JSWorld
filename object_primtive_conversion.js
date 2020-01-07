"use strict";
let a = "010" > "00";
console.log(a);

let obj1 = {
    one: "1",
};

let obj2 = {
    two: "2",
};

//number conversion - here the interpretor knows the conversion has to be done to number
console.log(Number(obj1));
//here the intepretor know since unary operation is used, number conversion has to be done.
console.log(+obj2);
console.log(obj1 > obj2); //here also we know beforehand that number conversion has to be done.

//string conversion
let dict = {
    [obj1]: "obj1", //here since the key can be only string, obj1 is converted to string
};
console.log("this is str1 "+ obj1); //here also we know for sure that, obj1 has to be converted to string

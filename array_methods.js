'use strict';

let a = [1, 2, 3, 4];

a.splice(0,2,11,22);

console.log(a);

//splice returns array of removed elements 

a = [1,2,3,4];
var removed = a.splice(0,2);
console.log(a);

// using 'delete' we can delete element at an index, however that would keep a empty hole in array
let aa = [1,2,3,4];
delete aa[0];
for (let i of aa) {
    console.log("i " + i);
}
console.log(aa.length);

console.log(aa.splice(-1,1));

//slice - slices the array
console.log(aa.slice(-1));

let ac = [11,12,13];
ac = ac.concat(14, [14]);
console.log("newarr " + ac);

ac.forEach(function (item, index, array) {
    console.log(item + " is at index "+ index + " in " + array);
});

//searching in array
console.log(ac.indexOf(11,1));

if (~ac.indexOf(11, 1)) {
    console.log("found");
} else {
    console.log("not found");
}

//get the last index of element
console.log(ac.lastIndexOf(14));

//problem with indexOf is that it will return -1 if index not found which is true in 'if'
//includes method is more appropriate to check the presence, includes method returns true if array contains element
//includes method returns false if array do not contain element
//console.log(ac.includes(11));
//if (ac.includes(11)) {
//    console.log("11 is present in array: " + ac);
//} else {
//    console.log("11 is not present in array: "+ ac);
//}

//find method finds elements from array based on condition defined in function
//find method is usefull when we have an array of objects and we have to search an object maching condition
//if find is not able to locate any object maching that condition, it returns undefined.

let arr_objs = [{name: 'vishal', surname: 'jadhav', id:2},
                {name: 'amruta', surname: 'jadhav', id:1},];

let result = arr_objs.find(element => element.id==1);
console.log("result: ", result);

result = arr_objs.find(function(element, index, array) {
    if (element.id==1) {
        return true;
    }
    return false;
});

console.log("new result: ", result);
console.log(result);

//findIndex retruns index instead of matching object is the difference between both of them.
var findinx = arr_objs.findIndex((element, index, array) => {
    return element.id == 2
});
console.log(findinx);

//find returns only first item matching condition what if we want all items matching that condition
//so essentially filter method returns an array
var allmatch = arr_objs.filter((item, index, array) => item.id>1)
console.log("type of filter method output " + typeof(allmatch));
console.log("matches ", allmatch);

//map method does job of transforming array value to new value
var map_arr = [1,2,3,4].map((item, index, array) => item*item);
console.log(map_arr);

//by default sort is in ascending order, and ascii characters are used for comparison
console.log([1,2,11,13].sort()) //this will output 1, 11, 13, 2 ---> since numbers are treated as ascii string and then comparison

//sort method sorts the given array, 
map_arr.sort((a, b) => {
    if (a>b) return 1;
    if (a==b) return 0;
    if (a<b) return -1;
});

console.log(map_arr);

arr_objs.sort((item1, item2)=> {
    if (item1.id > item2.id) return 1; //if first number is greater than second number
    if (item1.id == item2.id) return 0; //if first number is equal to second number
    if (item1.id < item2.id) return -1; //if first number is lesser than second number
})
console.log("objects sorted", arr_objs);

console.log(arr_objs.sort((item1, item2) => item1.id-item2.id));
console.log("reverse: ", arr_objs);

//often in german language there are characters, whose ascii ordering is different than actual expected ordering
//'Österreich', 'Andorra', 'Vietnam' - Ideally the sorted sequence should be Andorra,Österreich,Vietnam
//localeCompare is the method that can be used for comparison
let countries = ['Andorra', 'Vietnam', 'Österreich'];
countries.sort((item1, item2) => item1>item2?1:-1);
console.log("incorrect sort: ", countries);
countries.sort((item1, item2) => item1.localeCompare(item2));
console.log("sorted countries: ", countries);

//to sort arrays in revers order there is arr.reverse method
console.log("reverse arr: ", countries.reverse());

let names = 'vishal, amruta, rohit, vidyut';
let names_arr = names.split(", ");
console.log("names: ", names_arr.sort());

//join method joins array into a composite string
names = names_arr.join(", ");
console.log("Joined string: ", names);


console.log("reduced value: " + ['1','2','3','4'].reduce((sum, item) => sum+item));

//without providing initial value in reduce is option - which works fine in case the array has got atleast a element
//however, this results into an error, if initial value is not present and array is empty
//console.log([].reduce((sum, item) => sum+item));
console.log([].reduce(((sum, item) => sum+item), 0)); //this works fine even if array we are trying to reduce is empty

//typeof returns type object even for arrays - as arrays are nothing but objects internally
console.log(typeof(names_arr));

//however, Array class provides a special method isArray to detect if its an array
console.log(Array.isArray(names_arr));


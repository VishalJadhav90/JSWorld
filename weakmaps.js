'use strict';

let wm = new WeakMap();

let obj = {'name':'vishal', 'surname':'jadhav'};

wm.set(obj, "12345");

console.log(wm.get(obj));

obj = null;

console.log(wm.get(obj));


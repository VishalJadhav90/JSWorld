'use strict';

//the diff between object and map is in map key can be of any type, whereas in objects the key can be only of type string and symbol
let m = new Map();
m.set('name', 'vishal');
console.log(m.get('name'));
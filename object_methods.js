var obj = {
    name: "vishal",
    talk: function() {
        console.log("say hi");
    }
}

console.log(obj);
obj.talk()

obj.talk = function() {
    console.log("how do you do !");
}

obj.talk();

var newobj = {
    name: 'vishal',
    talk() {
        console.log("bon joure, i am "+this.name);
        //console.log("bon joure, i am "+newobj.name); //this is same as above statement, where this = newObj
        //but above line is not proper way as the outer variable name may change in assignment
    }
}

newobj.talk();

var nobj = newobj;
newobj = null;
nobj.talk(); //this results in problem as one of console.log tries to access name with name 'newobj'

//this is not bound to any fix object, infact this is evaluated during runtime, depending upon which obj is calling

function sayHi() {
    console.log(this);
}
sayHi();

nobj.talk = sayHi;
nobj.talk();

var arr_obj = {
    user: "vishal",
    sayHi() {
        console.log("hey " + this.user);
    },
};

var hi = arr_obj.sayHi;
var user = "vishal";
hi();


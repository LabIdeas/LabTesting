// hello.js
console.log("Hello, World!");

const add = function(a,b){
    return a+b;
};

const sub = function(a,b){
    return a-b;
};

const mul = function(a,b){
    return a*b;
};

const exp = function(a,b){
    return a/b;
};


module.exports = {
    add,
    sub,
    mul,
    exp
}


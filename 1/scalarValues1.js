'use strict'

function inc1(n){
    return ++n;
}

const a = 5;
const b = inc1(a);

console.dir({a, b});

function inc2(num){
    num.n++;
}

const obj = {n: 5};
inc2(obj);

console.dir(obj);

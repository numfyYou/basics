'use strict';

const average = (a, b) => (a+b)/2;
const square = (x)=> x*x;
const cube = (x) => x*x*x;
const calc = () => {
    let arr = [];

    for(let i = 0; i <= 9; i++){
        arr[i] = average(square(i), cube(i));
    }

    return arr;
};

console.log(average(1, 3));
console.log(square(2));
console.log(cube(2));
console.log(calc());

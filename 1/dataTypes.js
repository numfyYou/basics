'use strict';

let arr = [false, "sunset", 88, true, "apple", 12.5, "tree", 0, true, "blue"];

let colectionObj = { number: 0, string: 0, boolean: 0};

for (const element of arr) {
    colectionObj[typeof(element)]++;

}

console.dir(colectionObj);

colectionObj = {};
arr = [42, "hello", true, 7, "world", false, 3.14, "man", true, 0];

for (const element of arr) {
    if(colectionObj[typeof(element)]){colectionObj[typeof(element)]++;}
    else{
        colectionObj[typeof(element)]=1;
    }
    
}

console.dir(colectionObj);
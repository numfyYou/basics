'use strict';

const generateKey = (length, possible) => {
    let key = "";
    for(let i = 0; i<length; i++) {
        const index = Math.floor(Math.random() * possible.length);
        key += possible[index];
    }

    return key;
};

console.log(generateKey(10, ["o", "g", 1, 3, "|"]));
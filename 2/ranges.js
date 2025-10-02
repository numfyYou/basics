'use strict';

const range = (start, end) => {
    let arr = [];

    for(let i = 0; i<end; i++){
        arr[i] = start+i;
    }

    return arr;
}

const rangeOdd = (start, end) => {
    let arr = [];

    for(let i = 0; i <= end; i++){
        if((i%2)){
            arr.push(i)
        }
    }

    return arr;
}


console.log(range(1, 10));
console.log(rangeOdd(1, 13));
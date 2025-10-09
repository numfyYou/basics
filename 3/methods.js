'use strict';

const funcArr = {
    m1: (x) => x,
    m2: (x, y) => [x, y], 
    m3: (x, y, z) => [x, y, z],
};

const methods = iface => {
    let lengthContainer = [];
    
    for(let key in iface){
        lengthContainer.push([iface[key].name, iface[key].length]);
    }

    return lengthContainer;
};

console.log(methods(funcArr));
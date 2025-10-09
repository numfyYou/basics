'use strict';

const ipToInt = (ip = "127.0.0.1") => {
    const sortedIp = ip.split(".").map(Number); // [127, 0, 0, 1]
    let resultArr = [];

    for(let key in sortedIp){
        resultArr.push(sortedIp[key] << (8 * (sortedIp.length - key - 1)) );
    }

    return resultArr.reduce( (acc, curr) => acc + curr, 0);
}


console.dir(ipToInt());
console.dir(ipToInt("10.0.0.1"));

'use strict';

const fn = () => {
    const constantObj = {name: "name"};
    let variableObj = {name: "name"};

    constantObj.name = "another name";
    variableObj.name = "another name";

    //constantObj = {name: "name2"}; - mistake
    variableObj = {name: "name2"};

    console.dir({constantObj, variableObj});
}

fn();
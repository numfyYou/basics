'use strict';

function hoistings() {
    console.log(a);
    var a = 1;
    console.log(a);
}

hoistings();
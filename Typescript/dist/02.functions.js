"use strict";
function add(num1, num2) {
    let z = 1;
    console.log(num1 + num2 + z);
}
add(27, 72);
function remove(num1, num2) {
    let z = num1 - num2;
    if (z > 0) {
        return z;
    }
    else {
        return 0;
    }
}
function sayHi(name = 'Falcon') {
    console.log(`Say hi ${name}`);
}
sayHi("Clouds");
sayHi();

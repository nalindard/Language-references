"use strict";
function logger01(z) {
    return z;
}
console.log(logger01(7));
console.log(logger01('Falcon'));
console.log(logger01(true));
function logger02(msg) {
    console.log(`Massage is: ${msg}`);
}
logger02('UND3FIN3D');
logger02(256);
function thelogger(name) {
    console.log(name);
}
thelogger({ name: 'Falcon', isTrue: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Falcon extends Animal {
}
function classlogger(msg) {
    console.log(msg);
}
classlogger(new Animal('Phoenix'));
classlogger(new Falcon('Millenium'));
class KeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let kvs = new KeyValue(1, 'Master Chief');
let kvs_2 = new KeyValue(1, 'Master Chief');
console.log(kvs);
console.log(kvs_2.value);

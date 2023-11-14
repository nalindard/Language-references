"use strict";
let user = {
    id: 1,
    name: 'Falcon',
    greet: function (msg = 'Say hi') {
        console.log(`${msg} ${this.name}`);
    },
};
console.log(user.id);
console.log(user.name);
user.greet('Say hi');
let user2 = {
    id: 1,
    name: 'Falcon',
    greet: function (msg = 'Say hi') {
        console.log(`${msg} ${this.name}`);
    },
};
console.log(user2.id);
console.log(user2.name);
user2.greet('Say hi');
// user.greet()

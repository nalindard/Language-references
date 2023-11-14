"use strict";
class NewUser {
    enter() {
        NewUser._n++;
    }
    leave() {
        NewUser._n--;
    }
    static get userCount() {
        return NewUser._n;
    }
}
// static _n: number = 0
NewUser._n = 0;
let a = new NewUser();
a.enter();
let b = new NewUser();
b.enter();
console.log(NewUser.userCount);

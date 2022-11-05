"use strict";
// Data Types - Basics------------------------------------------------------------------------------------------------
let id = 12;
let personName = 'The name';
let bool = true;
let x = (12 && 'The sentences') || true;
// console.log(x, typeof x)
let id2 = 12;
let personName2 = 'The name';
let bool2 = true;
let x2 = (12 && 'The sentences') || true;
// console.log(x2, typeof x2)
let x3;
x3 = '12' || true;
// console.log(x3, typeof x3)
// Arrays------------------------------------------------------------------------------------------------------------
let ids = [1, 2, 3, 4, 5, 6, 7];
let arr = [10, 20, 'null', null, true];
let arr2 = [10, 20, 'null', null, true];
ids.push(8, 9, 10);
arr.push([30, 40, 50, 60, 70]);
// arr2.push([30,40,50,60,70])      <-  UNCOMMENT HERE 🟢
// console.table(ids)
// console.log(typeof arr, '---->', arr)
// console.log(typeof arr2, '---->', arr2)
// ids.forEach(el => console.log(typeof el, '🟡'))
// arr2.forEach(el => console.log(typeof el, '🟢'))
// Tuple-------------------------------------------------------------------------------------------------------------
let person = [1, 'Some name', true, 1];
let employees;
employees = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// console.log(typeof person)
// console.log(typeof person[3])
// Union-------------------------------------------------------------------------------------------------------------
let pid;
pid = 22;
pid = '22';
// console.log(typeof pid, pid)
// Enum-------------------------------------------------------------------------------------------------------------
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 5] = "Up";
    Direction2[Direction2["Down"] = 6] = "Down";
    Direction2[Direction2["Left"] = 7] = "Left";
    Direction2[Direction2["Right"] = 8] = "Right";
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "up";
    Direction3["Down"] = "down";
    Direction3["Left"] = "lwft";
    Direction3["Right"] = "right";
})(Direction3 || (Direction3 = {}));
var Direction4;
(function (Direction4) {
    Direction4["Up"] = "up";
    Direction4[Direction4["Down"] = 2] = "Down";
})(Direction4 || (Direction4 = {}));
// console.log(Direction1)
// console.log(Direction1.Up, Direction1.Down)
// console.log(Direction2.Up, Direction2.Down)
// console.log(Direction3.Up, Direction3.Down)
// Objects-----------------------------------------------------------------------------------------------------------
const user = {
    id: 1,
    name: 'Awesome',
};
const user_02 = {
    id: 1,
    name: 'Awesome',
};
const newUser = {
    id: 1,
    name: 'Legend',
};
const user_i = {
    id: 12,
    name: 'Ultimate name',
};
const user_i_02 = {
    id: 12,
    name: 'Ultimate name',
    // age: 12
};
user_i_02.name = 'The new name';
// user_i_02.id = 2                         <-  UNCOMMENT HERE 🟢
console.log(user_i_02.name);
// interface Point = number | string        <-  UNCOMMENT HERE 🟢
const p1 = 1;
// Interfaces are good for objects & cannot use with unions, primative. You can use types 🟡
// Type Assertion----------------------------------------------------------------------------------------------------
let cid = '12';
let customerId = cid;
let customerId_02 = cid;
customerId = 12;
// customerId = '12'        <-  UNCOMMENT HERE 🟢
//                             by type assertion, data type will not change(string !-> number). But new variable will only
//                             accept given type
// console.log(typeof customerId, customerId)
// console.log(typeof customerId_02, customerId_02)
// Functions--------------------------------------------------------------------------------------------------------
function addNum(x, y) {
    return x + y;
}
function addNum_02(x, y) {
    return (x + y).toString();
}
function addNum_03(x, y) {
    console.log(x + y);
}
addNum_03(2, 2);
const add = (x, y) => x + y;
// const ad: Mathfunc = (x: number, y: string): number => x + y     <-  UNCOMMENT HERE 🟢
// Classes------------------------------------------------------------------------------------------------------------
class Person {
    constructor(id, id_02, name) {
        this.id = id;
        this.id_02 = id_02;
        this.name = name;
    }
    regiester() {
        return `${this.name} is now registerd!`;
    }
}
const man = new Person(1, 2, 'The Man');
man.id = 2;
class Person_02 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    regiester() {
        return `${this.name} is now registerd!`;
    }
}
// Subclasses
class Employee extends Person_02 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// console.log(emp.name)
// console.log(emp.regiester())
// Generics------------------------------------------------------------------------------------------------------------
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['A', 'B', 'C', 'D']);
// numArray.push('a')
// stringArray.push(2)

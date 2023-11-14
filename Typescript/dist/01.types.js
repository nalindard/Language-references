"use strict";
let userName = 'Falcon';
let num1 = 27;
let num2 = 27.76;
let isTrue = true;
let noValue;
let noValue2;
let idk;
let what = 27;
// User defined types,
let numArray = [1, 2, 3, 4, 6, 7];
let anyArray = [27, 'Flacon', true];
anyArray.push("You can do this because it's getting compile to Js");
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Mon"] = 0] = "Mon";
    WeekDays[WeekDays["Tue"] = 1] = "Tue";
    WeekDays[WeekDays["Wed"] = 2] = "Wed";
})(WeekDays || (WeekDays = {}));
let dayAfterTommoro = WeekDays.Mon;
let today = 6 /* WeekEndDays.Sat */;
// ------------------------------------------------------------------------------------
console.log(userName);
if (isTrue) {
    console.log(`It's true`);
}
else {
    console.log(`It's false`);
}
console.log(noValue2);
console.log(noValue2);
noValue = '27';
noValue2 = 27;
console.log(idk);
if (typeof what === "number")
    console.log(what * what);
console.log(numArray);
console.log(anyArray);
console.log(WeekDays);
// console.log(WeekEndDays);
console.log(today);
console.log(dayAfterTommoro);

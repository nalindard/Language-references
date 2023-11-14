let userName: string = 'Falcon'

let num1: number = 27
let num2: number = 27.76

let isTrue: boolean = true

let noValue
let noValue2: any

let idk: unknown
let what: unknown = 27

// User defined types,

let numArray: Number[] = [1, 2, 3, 4, 6, 7]

let anyArray: [number, string, boolean] = [27, 'Flacon', true]
anyArray.push("You can do this because it's getting compile to Js")

enum WeekDays {
    Mon,
    Tue,
    Wed,
}

const enum WeekEndDays {
    Sat = 6,
    Sun = 7,
}

let dayAfterTommoro = WeekDays.Mon
let today = WeekEndDays.Sat
// ------------------------------------------------------------------------------------

console.log(userName)

if (isTrue) {
    console.log(`It's true`)
} else {
    console.log(`It's false`)
}

console.log(noValue2)
console.log(noValue2)

noValue = '27'
noValue2 = 27

console.log(idk);

if(typeof what === "number") console.log(what * what);


console.log(numArray);
console.log(anyArray);

console.log(WeekDays);
// console.log(WeekEndDays);

console.log(today);
console.log(dayAfterTommoro);

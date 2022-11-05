// Data Types - Basics------------------------------------------------------------------------------------------------

let id: number = 12
let personName: string = 'The name'
let bool: boolean = true
let x: any = (12 && 'The sentences') || true

// console.log(x, typeof x)

let id2 = 12
let personName2 = 'The name'
let bool2 = true
let x2 = (12 && 'The sentences') || true

// console.log(x2, typeof x2)

let x3
x3 = '12' || true

// console.log(x3, typeof x3)

// Arrays------------------------------------------------------------------------------------------------------------

let ids: number[] = [1, 2, 3, 4, 5, 6, 7]
let arr: any = [10, 20, 'null', null, true]
let arr2 = [10, 20, 'null', null, true]

ids.push(8, 9, 10)
arr.push([30, 40, 50, 60, 70])
// arr2.push([30,40,50,60,70])      <-  UNCOMMENT HERE 🟢

// console.table(ids)
// console.log(typeof arr, '---->', arr)
// console.log(typeof arr2, '---->', arr2)
// ids.forEach(el => console.log(typeof el, '🟡'))
// arr2.forEach(el => console.log(typeof el, '🟢'))

// Tuple-------------------------------------------------------------------------------------------------------------

let person: [number, string, boolean, any] = [1, 'Some name', true, 1]
let employees: [number, string][]

employees = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
]

// console.log(typeof person)
// console.log(typeof person[3])

// Union-------------------------------------------------------------------------------------------------------------

let pid: string | number
pid = 22
pid = '22'

// console.log(typeof pid, pid)

// Enum-------------------------------------------------------------------------------------------------------------

enum Direction1 {
    Up,
    Down,
    Left,
    Right,
}
enum Direction2 {
    Up = 5,
    Down,
    Left,
    Right,
}
enum Direction3 {
    Up = 'up',
    Down = 'down',
    Left = 'lwft',
    Right = 'right',
}
enum Direction4 {
    Up = 'up',
    Down = 2,
}

// console.log(Direction1)
// console.log(Direction1.Up, Direction1.Down)
// console.log(Direction2.Up, Direction2.Down)
// console.log(Direction3.Up, Direction3.Down)

// Objects-----------------------------------------------------------------------------------------------------------

const user = {
    id: 1,
    name: 'Awesome',
}

const user_02: {
    id: number
    name: string
} = {
    id: 1,
    name: 'Awesome',
}

type User_03 = {
    id: number
    name: string
}

const newUser: User_03 = {
    id: 1,
    name: 'Legend',
}

// Interface--------------------------------------------------------------------------------------------------------

interface UserInterface {
    id: number
    name: string
}

const user_i: UserInterface = {
    id: 12,
    name: 'Ultimate name',
}

interface UserInterface_02 {
    readonly id: number //     <- readonly can't change later
    name: string
    age?: number //      <- Use ? for optionals
}

const user_i_02: UserInterface_02 = {
    id: 12,
    name: 'Ultimate name',
    // age: 12
}

user_i_02.name = 'The new name'
// user_i_02.id = 2                         <-  UNCOMMENT HERE 🟢
console.log(user_i_02.name)

type Point = number | string
// interface Point = number | string        <-  UNCOMMENT HERE 🟢
const p1: Point = 1

// Interfaces are good for objects & cannot use with unions, primative. You can use types 🟡

// Type Assertion----------------------------------------------------------------------------------------------------

let cid: any = '12'

let customerId = <number>cid
let customerId_02 = cid as number

customerId = 12
// customerId = '12'        <-  UNCOMMENT HERE 🟢

//                             by type assertion, data type will not change(string !-> number). But new variable will only
//                             accept given type

// console.log(typeof customerId, customerId)
// console.log(typeof customerId_02, customerId_02)

// Functions--------------------------------------------------------------------------------------------------------

function addNum(x: number, y: number): number {
    return x + y
}
function addNum_02(x: number, y: number): string {
    return (x + y).toString()
}
function addNum_03(x: number, y: number): void {
    console.log(x + y)
}
addNum_03(2, 2)

interface Mathfunc {
    (x: number, y: number): number
}
const add: Mathfunc = (x: number, y: number): number => x + y
// const ad: Mathfunc = (x: number, y: string): number => x + y     <-  UNCOMMENT HERE 🟢

// Classes------------------------------------------------------------------------------------------------------------

class Person {
    id: number
    private id_02: number //      Private, Public, Protected Avalible. Everything Public by default
    name: string

    constructor(id: number, id_02: number, name: string) {
        this.id = id
        this.id_02 = id_02
        this.name = name
    }

    regiester() {
        return `${this.name} is now registerd!`
    }
}

const man = new Person(1, 2, 'The Man')
man.id = 2
// man.id_02 = 12       <-  UNCOMMENT HERE 🟢

// console.log({ man }, man.regiester())

interface PersonInterface {
    id: number
    name: string
    // register():string
}

class Person_02 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    regiester() {
        return `${this.name} is now registerd!`
    }
}

// Subclasses
class Employee extends Person_02 {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// console.log(emp.name)
// console.log(emp.regiester())




// Generics------------------------------------------------------------------------------------------------------------

function getArray <T> (items:T[], ):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['A','B','C','D'])

// numArray.push('a')
// stringArray.push(2)
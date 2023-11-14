function add(num1: number, num2: number): void {
    let z: number = 1
    console.log(num1 + num2 + z)
}

add(27, 72)

function remove(num1: number, num2: number): number {
    let z = num1 - num2

    if (z > 0) {
        return z
    } else {
        return 0
    }
}

function sayHi(name: string = 'Falcon'): void {
    console.log(`Say hi ${name}`)
}

sayHi("Clouds")
sayHi()
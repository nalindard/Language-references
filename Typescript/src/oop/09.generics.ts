function logger01<T>(z: T): T {
    return z
}

console.log(logger01<number>(7))
console.log(logger01<string>('Falcon'))
console.log(logger01<boolean>(true))

function logger02<T extends number | string>(msg: T) {
    console.log(`Massage is: ${msg}`)
}

logger02<string>('UND3FIN3D')
logger02(256)

function thelogger<T extends { name: string; isTrue: boolean }>(name: T) {
    console.log(name)
}

thelogger({ name: 'Falcon', isTrue: true })

class Animal {
    constructor(public name: string) {}
}

class Falcon extends Animal {}

function classlogger<T extends Animal>(msg: T): void {
    console.log(msg)
}

classlogger(new Animal('Phoenix'))
classlogger(new Falcon('Millenium'))

class KeyValue<T, U> {
    constructor(public key: T, public value: U) {}
}

let kvs = new KeyValue<number, string>(1, 'Master Chief')
let kvs_2 = new KeyValue(1, 'Master Chief')

console.log(kvs)
console.log(kvs_2.value)

class Car {
    // properties,
    name: string = ''
    readonly speed: number
    contry?: string = 'Sweden'

    // constructor
    constructor(name: string, speed: number) {
        this.name = name
        this.speed = speed
    }

    // methods,
    overtake(): void {
        console.log(`${this.name} is freaking fast ...........!`)
    }
}

let car = new Car(`Koenigsegg Jesko`, 531)
// car.speed = 12

console.log(car.name)
console.log(car.contry)

car.overtake()

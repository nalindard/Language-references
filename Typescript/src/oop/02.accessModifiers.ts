class FastCar {
    // public name: string = ''
    name: string = ''
    readonly speed: number
    private _contry?: string = 'Sweden'

    constructor(name: string, speed: number) {
        this.name = name
        this.speed = speed
    }

    overtake(): void {
        console.log(`${this.name} is freaking fast...........!`)
        console.log(`${this._contry}`)
    }
}

let fasrCar = new FastCar(`Koenigsegg Jesko`, 531)
fasrCar.name = 'Senna'

console.log(fasrCar.name)
// console.log(fasrCar.contry)

fasrCar.overtake()

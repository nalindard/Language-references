class SuperCar {
    // name: string = ''
    // readonly speed: number
    // private _contry?: string = 'Sweden'

    constructor(
        public name: string,
        public readonly speed?: number,
        // private _contry?: string = 'Sweden'
        private _contry?: string
    ) {}

    overtake(): void {
        console.log(`${this.name} is freaking fast...........!`)
        console.log(`${this._contry}`)
    }
}

let superCar = new SuperCar(`Koenigsegg Jesko`, 531)
fasrCar.name = 'Senna'

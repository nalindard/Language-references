"use strict";
class SuperCar {
    // name: string = ''
    // readonly speed: number
    // private _contry?: string = 'Sweden'
    constructor(name, speed, 
    // private _contry?: string = 'Sweden'
    _contry) {
        this.name = name;
        this.speed = speed;
        this._contry = _contry;
    }
    overtake() {
        console.log(`${this.name} is freaking fast...........!`);
        console.log(`${this._contry}`);
    }
}
let superCar = new SuperCar(`Koenigsegg Jesko`, 531);
fasrCar.name = 'Senna';

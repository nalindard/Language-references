"use strict";
class FastCar {
    constructor(name, speed) {
        // public name: string = ''
        this.name = '';
        this._contry = 'Sweden';
        this.name = name;
        this.speed = speed;
    }
    overtake() {
        console.log(`${this.name} is freaking fast...........!`);
        console.log(`${this._contry}`);
    }
}
let fasrCar = new FastCar(`Koenigsegg Jesko`, 531);
fasrCar.name = 'Senna';
console.log(fasrCar.name);
// console.log(fasrCar.contry)
fasrCar.overtake();

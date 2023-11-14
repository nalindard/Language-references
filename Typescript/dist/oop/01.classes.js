"use strict";
class Car {
    // constructor
    constructor(name, speed) {
        // properties,
        this.name = '';
        this.contry = 'Sweden';
        this.name = name;
        this.speed = speed;
    }
    // methods,
    overtake() {
        console.log(`${this.name} is freaking fast ...........!`);
    }
}
let car = new Car(`Koenigsegg Jesko`, 531);
// car.speed = 12
console.log(car.name);
console.log(car.contry);
car.overtake();

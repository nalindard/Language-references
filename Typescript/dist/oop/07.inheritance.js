"use strict";
class Graphiccard {
    constructor(name) {
        this.name = name;
    }
    drawline() {
        console.log(`Drawing a line`);
    }
}
class Redeongpu extends Graphiccard {
    constructor(isHighEnd, name) {
        super(name);
        this.isHighEnd = isHighEnd;
    }
    drawbox() {
        console.log(`Draw a aquare`);
    }
    drawline() {
        console.log(`${this.name} is drawing a red line !`);
    }
}
let rx6700xt = new Redeongpu(true, 'rx6700xt');
rx6700xt.drawline();
rx6700xt.drawbox();
console.log(rx6700xt.name);
console.log(rx6700xt.isHighEnd);

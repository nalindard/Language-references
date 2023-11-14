"use strict";
class Forza {
    constructor(_name, _sequel) {
        this._name = _name;
        this._sequel = _sequel;
    }
    get name() {
        return `Forza ${this._name} ${this === null || this === void 0 ? void 0 : this._sequel}`;
    }
    set sequel(sequel) {
        this._sequel = sequel;
    }
}
let fh = new Forza('Horizon', 4);
console.log(fh.name);
fh.sequel = 5;
console.log(fh.name);

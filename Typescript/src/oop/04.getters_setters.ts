class Forza {
    constructor(private _name: string, private _sequel: number) {}

    get name(): string {
        return `Forza ${this._name} ${this?._sequel}`
    }

    set sequel(sequel: number) {
        this._sequel = sequel
    }
}

let fh = new Forza('Horizon', 4)

console.log(fh.name)

fh.sequel = 5
console.log(fh.name)

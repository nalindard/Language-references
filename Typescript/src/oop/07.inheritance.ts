class Graphiccard {
    constructor(public name: string) {}

    drawline(): void {
        console.log(`Drawing a line`)
    }
}

class Redeongpu extends Graphiccard {
    constructor(public isHighEnd: boolean, name: string) {
        super(name)
    }

    drawbox(): void {
        console.log(`Draw a aquare`)
    }

    override drawline(): void {
        console.log(`${this.name} is drawing a red line !`)
    }
}

let rx6700xt = new Redeongpu(true, 'rx6700xt')

rx6700xt.drawline()
rx6700xt.drawbox()
console.log(rx6700xt.name)
console.log(rx6700xt.isHighEnd)

interface Cangame {
    name: string
    game(game: string): void
}

interface Cancode {
    code(language: string): void
}

interface Can3d extends Cangame {
    graphics(software: string): void
}

class Gpu implements Cancode, Can3d {
    constructor(public name: string) {}

    game(name: string): void {
        console.log(`Can run: ${name}`)
    }
    code(language: string): void {
        console.log(`Can code: ${language}`)
    }
    graphics(software: string): void {
        console.log(`Can run: ${software}`)
    }
}

let geforce4070ti = new Gpu('geforce4070ti')
geforce4070ti.game('Cyberpunk2077')
geforce4070ti.code('cude')
geforce4070ti.graphics('Zbrush')

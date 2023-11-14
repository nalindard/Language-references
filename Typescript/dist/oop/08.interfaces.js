"use strict";
class Gpu {
    constructor(name) {
        this.name = name;
    }
    game(name) {
        console.log(`Can run: ${name}`);
    }
    code(language) {
        console.log(`Can code: ${language}`);
    }
    graphics(software) {
        console.log(`Can run: ${software}`);
    }
}
let geforce4070ti = new Gpu('geforce4070ti');
geforce4070ti.game('Cyberpunk2077');
geforce4070ti.code('cude');
geforce4070ti.graphics('Zbrush');

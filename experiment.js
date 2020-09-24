class Zim {
    constructor(zim) {
        this.zim = zim;
    }

    static
    go() {
        console.log(`${this.constructor.name}- i have gone`)
    }

    come() {
        console.log(`${this.constructor.name}- i am here`)
    }
}

function Chibyk(chibyk) {
    this.chibyk = chibyk
}

Chibyk.go = function() {
    console.log( `${this.constructor.name}- i have gone`)
}

Chibyk.prototype.come = function() {
    console.log(`${this.constructor.name}- i am here`)
}

console.log(Zim.constructor)
Chibyk.prototype.come()

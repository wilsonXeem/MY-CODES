class Zim {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    static
    printName(obj) {
        console.log(obj.name);
    }
}

var zimc1 = new Zim("Zim", 21)
Zim.printName(zimc1)

function zim(name, age){
    this.name = name;
    this.age = age;
}

zim.prototype.printName = function() {
    console.log(this.name);
    
}

var zim1 = new zim("Zim", 21)
zim1.printName()

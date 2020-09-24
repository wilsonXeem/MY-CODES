function Animal() {
    this.name = 'Animal'

    this.toString = function () {
        return "My name is " + this.name
    }
}



function Canine() {
    this.name = 'Canine'
}

function Wolf() {
    this.name = 'Wolf'
}

Canine.prototype = new Animal()
Wolf.prototype = new Canine()

Canine.prototype.constructor = Canine
Wolf.prototype.constructor = Wolf

var acticWolf = new Wolf
var actiWolf = new Canine
var actWolf = new Animal

Animal.prototype.sound = "Grrrr"
Animal.prototype.makeSound = function() {
    return this.name + " says " + this.sound
}

Canine.prototype.sound = "Woof"
Wolf.prototype.sound = "Argghh"

console.log(acticWolf.makeSound());
console.log(actiWolf.makeSound());
console.log(actWolf.makeSound());

function Rodent() {
    this.name = 'Rodent'
}

function Rat() {
    this.name = 'Rat'
}

Rodent.prototype = new Animal()
Rat.prototype = Rodent.prototype

Rodent.prototype.constructor = Rodent
Rat.prototype.constructor = Rat

var caneRat = new Rat() 

function extend(Child, Parent) {
    var Temp = function() {}

    Temp.prototype = Parent.prototype

    Child.prototype = new Temp()

    Child.prototype.constructor = Child
}

function Deer() {
    this.name = "Deer"
    this.sound = "Snort"
}

extend(Deer, Animal)

var elk = new Deer()

console.log(elk.makeSound());






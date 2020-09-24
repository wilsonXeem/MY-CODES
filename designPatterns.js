// DESIGN PATTERNS

// 1. Singleton Pattern

// function Hero(name) {
//     if (typeof Hero.instance === 'object') {
//         return Hero.instance
//     }

//     this.name = name
//     Hero.instance = this
//     return this
// }

// var derekHero = new Hero("Derek")
// console.log("the name of my hero is " + derekHero.name);

// var derkHero = new Hero("Derk")
// console.log("the name of my hero is " + derkHero.name);

// 2. Factory Pattern

// function Sword(desc) {
//     this.weaponType = "Sword"
//     this.metal = desc.metal || 'Steel'
//     this.style = desc.style || "Longsword"
//     this.hasMagic = desc.Magic || false
// }

// function Bow(desc) {
//     this.weaponType = "Bow"
//     this.material = desc.metal || 'Wood'
//     this.style = desc.style || "Longbow"
//     this.hasMagic = desc.Magic || false
// }

// function WeaponFactory() {}

// WeaponFactory.prototype.makeWeapon = function(desc) {
//     var weaponClass = null

//     if(desc.weaponType === "Sword") {
//         weaponClass = Sword
//     } else if(desc.weaponType === "Bow") {
//         weaponClass = Bow
//     }else {
//         return false
//     }

//     return new weaponClass(desc)
// }

// var myWeaponFact = new WeaponFactory()

// var bladeFist = myWeaponFact.makeWeapon({
//     weaponType: "Sword",
//     metal: "Dark Iron",
//     style: "Scythe",
//     hasMagic: true
// })

// console.log(bladeFist.weaponType);

// 3. Decorator Pattern

// function Pizza(price) {
//     this.price = price || 10
// }

// Pizza.prototype.getPrice = function() {
//     return this.price 
// }

// function ExtraCheese(pizza) {
//     var prevPrice = pizza.price

//     pizza.price = prevPrice + 1
// }

// var myPizza = new Pizza(10)

// ExtraCheese(myPizza)

// console.log(myPizza.price);

// 4. Observator Pattern

var Observable = function() {
    this.subscribers = []
}

Observable.prototype =  {
    subscribe: function(subscriber) {
        this.subscribers.push(subscriber)
    },

    unsubscribe: function(unsubscriber) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === unsubscriber) {
                this.subscribers.splice(i, 1)

                return console.log(unsubscriber.name + " unsubscribed");
                
            }
        }
    },

    publish: function(data) {
        for(i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].receiceData(data)
        }
    }
}

 var organFanny = {
     name: "Organ Fanny",
     receiceData: function(data) {
         console.log(this.name + " received your info " + data);
         
     }
 }
 var xeemMaks = {
     name: "Xeem Maks",
     receiceData: function(data) {
         console.log(this.name + " received your info " + data);
         
     }
 }

 observer = new Observable()

 observer.subscribe(organFanny)
 observer.subscribe(xeemMaks)

 observer.publish("IBM at $145")
 
 observer.unsubscribe(organFanny)
 
 observer.publish("IBM at $185")


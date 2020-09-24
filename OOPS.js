function Point() {
    this.xPos = 0
    this.yPos = 0
}

Object.defineProperty(Point.prototype, "pointPos", {
    get: function() {
        return "X: " + this.xPos + " Y: " + this.yPos
    },

    set: function(thePoint) {
        var parts = thePoint.toString().split(", ")
        this.xPos = parts[0]
        this.yPos = parts[1]
    }
})

var aPoint = new Point()

aPoint.pointPos = "100, 200"

console.log(aPoint.pointPos);

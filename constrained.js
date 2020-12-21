class Constrained {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5,
            length: 50
    
        }
        this.con = Matter.Constraint.create(options)
        World.add(world, this.con)

    }

    display() {
        strokeWeight(5)
        var pointA = this.con.bodyA.position;
        var pointB = this.con.bodyB.position;
        line(pointA.x, pointA.y,pointB.x, pointB.y )


    }








}
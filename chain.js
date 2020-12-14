class Chain
{

    constructor(body1,body2)
    {

    var options = {
        bodyA:body1,
        bodyB:body2,
        length:10,
        stiffness:0.03
    }

    this.chain = Constraint.create(options);

    World.add(world,this.chain);

        
}

display()
{
    var firstPosition = this.chain.bodyA.position
    var secondPosition = this.chain.bodyB.position

    line(firstPosition.x,firstPosition.y,secondPosition.x,secondPosition.y)
}

}
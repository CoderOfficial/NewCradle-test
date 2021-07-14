class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options ={
         bodyA:body1,
         bodyB:body2,
        
        pointb:{x:this.offsetX,y:this.offsetY}
        }
        this.chain=Constraint.create(options)
    this.Slingshot = Constraint.create(options)
World.add(world,this.chain)

    }
    display(){
        var pointa = this.Slingshot.bodyA.position;
        var pointb = this.Slingshot.bodyB.position;
        strokeWeight(8)
        line(pointa.x ,pointa.y, pointb.x, pointb.y )

    }
}
class Bob{
    constructor(x,y,bobDiameter,){
    var options = {
        isStatic: false,
    'restitution':0.3,
    'density':1.2,
    'friction':0.5
}
this.x=x;
this.y=y;
this.diameter=bobDiameter;
this.body = Bodies.circle(x,y,bobDiameter,options)
World.add(world, this.body);

    }
    display(){
  			
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        pop()
        
    }
}
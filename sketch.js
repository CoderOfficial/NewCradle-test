
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1= new Bob(200,500,10);
	bob2 = new Bob(300,500,10);
	bob3 = new Bob(400,500,10);
	bob4 = new Bob(500,500,10);
	bob5 = new Bob(600,500,10);
	roof = new Roof(400,100,700,20);
	rope1 = new Chain(bob1.body,roof.body,-bob1.diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}




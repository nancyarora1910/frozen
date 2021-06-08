
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var particle_options = {
		restitution = 0.4,
		friction: 0.02
	}

	var rotator_options = {
		isStatic: true
	};

	var block1_options = {
		isStatic: true
	};

	var block2_options = {
		isStatic:true
	};

particle1 = Bodies.circle(220,10,10,particle_options);
World.add(world,particle1);

	//Create the Bodies Here.
rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
World.add(world,rotator1);

var plane_options={
	isStatic: true
};


block1 = Bodies.rectangle(200,390,400,20,block1_options);
World.add(world,block1);

block2 = Bodies.circle(100,10,20,block2_options);
World.add(world,block2);

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() 
{

  background(51);
  Engine.update(engine);
  Matter.Body.rotate (rotator1,angle)
  push();
translate (rotator1.position.x,rotator1.position.y);
roatate (angle);
rect(0,0,150,20);
pop ();
angle1+ 0.2;
  drawSprites();

 
}




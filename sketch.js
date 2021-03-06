var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxState =false;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	dropZone = createSprite(400,650,300,10);
	dropZone.shapeColor = 'blue';
	dropZone2 = createSprite(250,605,10,100);
	dropZone2.shapeColor = 'blue';
	dropZone3 = createSprite(550,605,10,100);
	dropZone3.shapeColor = 'blue';

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
     //create a box 
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:false});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 45 , {isStatic:true} );
	 World.add(world, ground);     
}

function draw() {
  
  background(0);
  if(keyDown("down") || boxState )
  {
	
	Engine.update(engine);  
	rectMode(CENTER);
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	boxState = true ;
  }
  drawSprites();
}
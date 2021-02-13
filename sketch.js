
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, treeimg;
var boy, boyimg;
var stone;
var m1,m2, m3, m4, m5;

function preload()
{
	treeImg = loadImage("Plucking_mangoes/tree.png");
	boyImg = loadImage("Plucking_mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(900,350,30,300);
	ground = new Ground(600,600,2000,20);
	mango1 = new Mango(900,250,15);
	mango2 = new Mango(800,200,15);
	mango3 = new Mango(800,280,15);
	mango4 = new Mango(1000,250,15);
	mango5 = new Mango(670,300,15);
	stone = new Stone(150,550,15);
	boyShot = new Shot(stone.body,{x:150,y:500});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  ground.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  stone.display();
  boyShot.display();
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,mouseX,mouseY);
}

function mouseReleased(){
    boyShot.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}







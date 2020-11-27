
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1, dustbin2, dustbin3;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 200, 10);
	dustbin1 = new Bin(600, 630, 200, 20);
	dustbin2 = new Bin(500, 540, 20, 200);
	dustbin3 = new Bin(700, 540, 20, 200);
	ground = new Ground(350,650,900,10);

	Engine.run(engine);
}


function draw() {
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body, paper.body.position,{x:18, y:-18});
	}
}




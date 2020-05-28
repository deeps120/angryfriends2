const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;
var engine,world;
var constraint;
var score=0;
function preload(){
  bgimg=loadImage("bgimg2.jpg");
}
function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(900,500);
  ground = new Ground(350,480,2000,40);
  ball = new Ball(200,200,80,80);
  block1 = new Box(555,475,70,70);
  block2 = new Box(600,475,70,70);
 block3 = new Box(670,470,70,70);
 block4 = new Box(730,470,70,70);

 block5 = new Box(565,400,70,70);
 block6= new Box(635,400,70,70);
 block7 = new Box(686,40,70,70);

 block8 = new Box(543,300,70,70);
 block9 = new Box(612,300,70,70);

 block10 = new Box(543,220,70,70);

 chain= new Chain(ball.body,{x:100,y:200});
}

function draw() {
  Engine.update(engine);
  
  background(bgimg);  
  fill("black");
  textStyle(30);
  text("score:"+score,width-100,50);
  ground.display();
  ball.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  chain.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
  chain.fly();
  }
  function keyPressed(){
    if(keyCode===32)
      chain.attach(ball.body);
      
  }
  
  
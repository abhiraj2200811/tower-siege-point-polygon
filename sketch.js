
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon_img, polygon;
var sling_shot;
var ground, base;
var box, box2, box3, box4, box5;
var box6, box7, box8, box9;
var engine,world;

function preload(){

polygon_img=loadImage("polygon.jpeg")
ImageMode(CENTER);

}

function setup() {
  createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

  box =new Box(330, 235, 30, 40)
  box2 = new Box (360, 235, 30, 40)
  box3 = new Box (390, 235, 30, 40)
  box4 = new Box (420, 235, 30, 40)
  box5 = new Box (450, 235, 30, 40)
  
  box6 = new Box (360, 195, 30, 40)
  box7 = new Box (390, 195, 30, 40)
  box8 = new Box (420, 195, 30, 40)
  
  box9 = new Box (390, 155, 30, 40)

  box10 = new Box (300, 275, 30, 40)
  box11 = new Box (330, 275, 30, 40)
  box12 = new Box (360, 275, 30, 40)
  box13 = new Box (390, 275, 30, 40)
  box14 = new Box (420, 275, 30, 40)
  box15 = new Box (450, 275, 30, 40)
  box16 = new Box (480, 275, 30, 40)

  polygon = Bodies.circle(50, 200, 20);
  World.add(world,polygon);
  
  sling_shot = new SlingShot(polygon, {x:100, y:200});

base = new Ground (600, 380, 100, 10)
  ground= new Ground (400, 380, 800, 10)

}

function draw() {
  background("Black");  
  drawSprites();
  Engine.update(engine);

  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();

  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  ground.display();
  base.display();

  

  
  image(polygon_img, polygon.position.x,polygon.position.y,40,40)

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling_shot.fly();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var div = [];
var plinko = [];
var plinko1 = [];
var plinko2 = [];
var plinko3 = [];
var particles = [];

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;
//  console.log(particles.length);

  ground = new Ground(240,590,480,10);  

  var x = 10;

  for (var i = 0;i<7;i++){
    div[i] = new Ground(x, 450, 5, 260);
    x = x + 75;
  }
  var x = 10;
  var y = 60;
  var y1 = 180;

  for (var i = 0;i<11;i++){
    plinko[i] = new Plinko(random(x-5,x+5), random(y-5,y+5), 10);
    plinko2[i] = new Plinko(random(x-5,x+5), y1, 10);
    x = x + 45;
  }
  y = y + 60;
  x = 20;
  y1 = y1 + 60;

  for (var i = 0;i<11;i++){
    plinko1[i] = new Plinko(x, y, 10);
    plinko3[i] = new Plinko (x, y1 ,10);
    x = x + 45;
  }



}

function draw() {
  background(125,255,255); 
  Engine.update(engine);

  ground.display();    
  if(frameCount%60===0){
    particles.push(new Particle(random(30, 420), 10,8));
  }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var i = 0;i<7;i++){
    div[i].display();
  }
  for (var i = 0;i<11;i++){
    plinko[i].display();
    plinko1[i].display();
    plinko2[i].display();
    plinko3[i].display();
  }
  
    drawSprites();
}
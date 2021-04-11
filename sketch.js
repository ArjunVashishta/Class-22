const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

var ball_options={
  restitution:1
}
  ball=Bodies.circle(400,200,25, ball_options)
  World.add(world,ball)

  var options={
    isStatic:true
  }

  ground=Bodies.rectangle(400,390,800,20, options)
  World.add(world,ground)
  
}

function draw() {
  Engine.update(engine)
  background("black");  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
}
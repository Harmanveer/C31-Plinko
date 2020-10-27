const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var division=[];






function setup() 
{
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(240,height,480,20);

  divi1=new Division(96,700,10,300);
  divi2=new Division(192,700,10,300);
  divi3=new Division(288,700,10,300);
  divi4=new Division(384,700,10,300);
  divi5=new Division(480,700,10,300);
  divi6=new Division(0,700,10,300);

  

  

  for (var j=40;j <= width ;j=j+50 )
  {
    plinkos.push(new Plinko(j,75,20))
  }
  for (var j=15;j <= width ;j=j+50 )
  {
    plinkos.push(new Plinko(j,175,20))
  }
  for (var j=40;j <= width ;j=j+50 )
  {
    plinkos.push(new Plinko(j,275,20))
  }
  for (var j=15;j <= width ;j=j+50 )
  {
    plinkos.push(new Plinko(j,375,20))
  }

}

function draw() 
{
  background(0);  
  for(var j=0;j<plinkos.length;j++)
  {
    plinkos[j].display();

  }

  if(frameCount % 90 === 0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10))
  }

  for(var j=0;j<particles.length;j++)
  {
    particles[j].display();

  }
  
  
  Engine.update(engine);
  drawSprites();
  ground.display();
  divi1.display();
  divi2.display();
  divi3.display();
  divi4.display();
  divi5.display();
  divi6.display();

}

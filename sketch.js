const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);

  rope = new Rope(hero.body, { x: 500, y: 50 });

  monster = new Monster(1100,500,300);

  box1=new Box(850,200,40,40);
  box2=new Box(850,240,40,40);
  box3=new Box(850,280,40,40);
  box4=new Box(850,320,40,40);
  box5=new Box(850,360,40,40);
  box6=new Box(850,400,40,40);
  box7=new Box(850,440,40,40);
  box8=new Box(850,480,40,40);
  box9=new Box(850,520,40,40);
  box10=new Box(850,560,40,40);

  box11=new Box(810,200,40,40);
  box12=new Box(810,240,40,40);
  box13=new Box(810,280,40,40);
  box14=new Box(810,320,40,40);
  box15=new Box(810,360,40,40);
  box16=new Box(810,400,40,40);
  box17=new Box(810,440,40,40);


  box18=new Box(770,240,40,40);
  box19=new Box(770,280,40,40);
  box20=new Box(770,320,40,40);
  box21=new Box(770,360,40,40);
  box22=new Box(770,400,40,40);
  box23=new Box(770,440,40,40);
  box24=new Box(770,480,40,40);
  box25=new Box(770,520,40,40);
  box26=new Box(770,560,40,40);

  box27=new Box(730,240,40,40);
  box28=new Box(730,280,40,40);
  box29=new Box(730,320,40,40);
  box30=new Box(730,360,40,40);
  box31=new Box(730,400,40,40);

  box32=new Box(690,200,40,40);
  box33=new Box(690,240,40,40);
  box34=new Box(690,280,40,40);
  box35=new Box(690,320,40,40);
  box36=new Box(690,360,40,40);
  box37=new Box(690,400,40,40);
  box38=new Box(690,440,40,40);
  box39=new Box(690,480,40,40);
  box40=new Box(690,520,40,40);
  box41=new Box(690,560,40,40);
}

function draw() {
  background(bg);

  Engine.update(engine);
  ground.display();

  box1.display();
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
  box17.display();

  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();

  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();

  hero.display();
  rope.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}



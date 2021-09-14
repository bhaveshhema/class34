const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
function setup () {
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(300,570,600,30);

    box1 = new Box(450,330,50,50);
    box2 = new Box(450,270,50,50);
    box3 = new Box(450,230,50,50);
    box4 = new Box(450,170,50,50);
    box5 = new Box(450,130,50,50);
    box6 = new Box(400,70,50,50);
    box7 = new Box(400,380,50,50);
    box8 = new Box(400,430,50,50);
    box9 = new Box(400,480,50,50);
    box10 = new Box(400,530,50,50);

    ball = new Ball(250,300,50,50)

    rope = new Rope(ball.body,{x:350,y:50});
}

function draw () {
    background('lightblue');
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball.display();
    rope.display();
}

function mouseDragged () {
    Matter.Body.setPosition(ball.body,{x:mouseX,y: mouseY});
}
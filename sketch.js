
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var radius = 20;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,30);
	platformA = new Platform(400,500,300,20)
	platformB = new Platform(650,200,300,20)
	
    box1 = new Box (263,475);
	box2 = new Box (293,475);
    box3 = new Box (320,475);
    box4 = new Box (350,475);
    box5 = new Box (380,475);
    box6 = new Box (410,475);
    box7 = new Box (440,475);
    box8 = new Box (470,475);
    box9 = new Box (500,475);
	box10 = new Box (530,475);
	box11 = new Box (513,174);
	box12 = new Box (543,174);
    box13 = new Box (573,174);
    box14 = new Box (600,174);
    box15 = new Box (630,174);
    box16 = new Box (660,174);
    box17 = new Box (690,174);
    box18 = new Box (720,174);
    box19 = new Box (750,174);
	box20 = new Box (780,174);
	box21 = new Box (293,446);
    box22 = new Box (320,446);
    box23 = new Box (350,446);
    box24 = new Box (380,446);
    box25 = new Box (410,446);
    box26 = new Box (440,446);
    box27 = new Box (470,446);
	box28 = new Box (500,446);
	box29 = new Box (435,416);
    box30 = new Box (320,416);
    box31 = new Box (350,416);
    box32 = new Box (380,416);
    box33 = new Box (410,416);
	box36 = new Box (465,416);
	box37 = new Box (513,174);
    box38 = new Box (543,174);
    box39 = new Box (542,144);
    box40 = new Box (571,144);
    box41 = new Box (600,144);
    box42 = new Box (630,144);
    box43 = new Box (660,144);
    box44 = new Box (690,144);
    box45 = new Box (720,144);
	box46 = new Box (750,144);
	box47 = new Box (571,144);
    box48 = new Box (600,114);
    box49 = new Box (630,114);
    box50 = new Box (660,114);
    box51 = new Box (690,114);
    box52 = new Box (720,114);
	box53 = new Box (570,114);
    hexagon1 = new Hexagon(100,600,radius)
    chain = new Sling(hexagon1.body,{x:95,y:590});
    
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  drawSprites();
  ground.display();
  platformA.display();
  platformB.display();
  box1.display();
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
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  hexagon1.display();
  chain.display();

}
function mouseDragged(){
    Matter.Body.setPosition(hexagon1.body,{x:mouseX,y:mouseY})   
   }
   
function mouseReleased(){
    chain.fly();
}



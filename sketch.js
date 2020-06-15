const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var launcher;


 function preload() {
  backgroundImg = loadImage("Sprites/Office.jpg");
} 


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  crumpledPaper = new Paper(200,200,40,40);

  launcher = new Launcher(crumpledPaper.body,{x:100,y:150});

  bin1 = new Bin(700,303,140,160);

  //console.log(bin);

  ground = new Ground(400,400,800,40);

  //console.log(ground);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  /* if(isTouching(crumpledPaper,bin1)){
    world.remove(crumpledPaper)
  }else{
crumpledPaper.display();
  } */

  crumpledPaper.display();

  launcher.display();
  ground.display();
  bin1.display();


  //drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    launcher.attach(crumpledPper.body);
     
  }
}

function mouseDragged(){
  Matter.Body.setPosition(crumpledPaper.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

/* function isTouching(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2
    ){
      return true;
    }
    else{
      return false;
    }
} */
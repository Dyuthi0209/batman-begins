const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var umbrella;
var drops=[];
var maxDrops=100;
var rain;
var thunder1,thunder2,thunder;
var thunderCreatedFrame = 0;




function preload(){
    
    thunder1 = loadImage("thunder1.png");
    thunder2 = loadImage("thunder2.png");

}

function setup(){
    createCanvas(400, 550);
	engine = Engine.create();

	world = engine.world;
    umbrella= new Umbrella(200,420,100)

    if(frameCount%150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push( new Drops(random(0,400), random(0,400) ,10));
          }
        }

    Engine.run(engine);
    
 }

function draw(){
    background(0,0,0);

    umbrella.display();

    for(var i =0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
        }
        
               
        
        rand = Math.round(random(1,4));
        if(frameCount%80 === 0){
            thunderCreatedFrame = frameCount;
            thunder = createSprite(random(10,370), random(10,30), 10, 10);
            switch(rand){
                case 1: thunder.addImage(thunder1);
                break;
                case 2: thunder.addImage(thunder2);
                break; 
                default: break;
            }
            thunder.scale = 0.5;
        }
    
        if(thunderCreatedFrame + 10 === frameCount && thunder){
            thunder.destroy();
        }
    


drawSprites();
 }  
 
 
 
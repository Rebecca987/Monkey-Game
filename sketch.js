
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup,obstacleGroup;
var ground
var bananaGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;

  food();
  obstacles();
  
  monkey.collide(ground);
  
  drawSprites();
  
}

function food(){
  if(frameCount%80 === 0){
    var banana = createSprite(600,120,40,10);
    banana.y= Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -3;
    banana.lifetime = 200;

  }
}

function obstacles(){
 if (frameCount % 80 === 0){
   var obstacle = createSprite(368,380,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.2;
   obstacle.velocityX = -4;
   obstacleGroup.add(obstacle);
 }
}
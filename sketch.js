var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsBottom1,obsBottom2,obsBottom3
var obB1, obB2, obB3, obT1, obT2



function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

obB1= loadImage("assets/obsBottom1.png")
obB2= loadImage("assets/obsBottom2.png")
obB3= loadImage("assets/obsBottom3.png")

obT1 = loadImage("assets/obsTop1.png")
obT2 = loadImage("assets/obsTop2.png")



}

function setup(){
createCanvas(600,500)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3



      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
bg.velocityX = -2

  if(bg.x<0){
    bg.x = width/2;
  }

          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   spawnTopObstacles();
   spawnBottomObstacles();
        drawSprites();
        
}
function spawnTopObstacles(){
  if(frameCount%80==0){
  var obstacles= createSprite(600,Math.round(random(30,200)))
  obstacles.velocityX= -4
  var rand= Math.round(random(1,2));
  if(rand==1){
    obstacles.addImage(obT1)
    obstacles.scale= 0.08
  }
  else{
    obstacles.addImage(obT2)
    obstacles.scale= 0.1
  }
  }
}
function spawnBottomObstacles(){
  if(frameCount%40==0){
    var obstacles= createSprite(600,Math.round(random(300,400)))
    obstacles.velocityX= -4
    var rand= Math.round(random(1,3));
    if(rand==1){
      obstacles.addImage(obB1)
      obstacles.scale= 0.09
    }
    if(rand==2){
      obstacles.addImage(obB2)
      obstacles.scale= 0.09
    }
    else{
      obstacles.addImage(obB3)
      obstacles.scale= 0.09
    }
    }
}


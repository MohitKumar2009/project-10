var ship , shipIMG;
var sea , sea_Img1;
function preload(){
sea_Img1 = loadImage("sea.png");
shipIMG=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  sea  = createSprite(200,200,10,10);
  sea.x = sea.width/2;
  sea.addImage(sea_Img1);
  sea.scale = 0.5;
  sea.velocityX = -3;

  ship = createSprite (200,220,180,70);
  ship.addAnimation("ship",shipIMG);
  ship.scale = 0.3;
  

}




function draw() {
  background("blue");
 
if (sea.x < 0){
  sea.x = sea.width/4;
  
}
drawSprites();
}
var fixedRect,movingRect;
function setup() {
  createCanvas(1000,1000);
  fixedRect= createSprite(100, 500, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=5;
  movingRect= createSprite(800, 500, 80, 30);
  movingRect.shapeColor="green";
  movingRect.velocityX=-5;


}

function draw() {
  background(255,255,255);  
 
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
 movingRect.velocityX=movingRect.velocityX*(-1);
 fixedRect.velocityX=fixedRect.velocityX*(-1);
  } 
  if (fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
}

  drawSprites();
}

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 /* gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="yellow";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="silver";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="orange";
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="pink";*/


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}



function draw()
 {
  background(0,0,0); 

  bounceOff(movingRect,fixedRect); 

  /*movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if(isTouching(movingRect,gameObject4))
 {
  gameObject4.shapeColor="red";
  movingRect.shapeColor="red";
 }
 else
 {
  gameObject4.shapeColor="blue";
  movingRect.shapeColor="blue";
 }*/
  

  
  drawSprites();
}


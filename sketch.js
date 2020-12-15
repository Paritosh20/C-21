var gameObject1,gameObject2,gameObject3,gameObject4,movingRect;

function setup() {
  createCanvas(800,400);

  gameObject1 = createSprite(200, 200, 50, 50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(300, 200, 50, 50);
  gameObject2.shapeColor = "blue";

  gameObject3 = createSprite(400, 200, 50, 50);
  gameObject3.shapeColor = "blue";

  gameObject4 = createSprite(500, 200, 50, 50);
  gameObject4.shapeColor = "blue";

  movingRect = createSprite(600,200,80,50);
  movingRect.shapeColor = "blue";
}

function draw() {
  background("orange");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    gameObject1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }


  if(isTouching(movingRect,gameObject2)){
    gameObject2.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    gameObject2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(isTouching(movingRect,gameObject3)){
    gameObject3.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }
else {
  gameObject3.shapeColor = "black";
  movingRect.shapeColor = "black";
}

if(isTouching(movingRect,gameObject4)){
  gameObject4.shapeColor = "pink";
  movingRect.shapeColor = "pink";
}
else {
  gameObject4.shapeColor = "white";
  movingRect.shapeColor = "white";
}




  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false;
}
}



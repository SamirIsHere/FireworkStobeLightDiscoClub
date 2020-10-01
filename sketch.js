
function preload() {

Firework = loadSound("Firework.mp3");

}
function setup() {
  createCanvas(800,400);
 movingRect =  createSprite(400, 200, 50, 50);
 fixedRect = createSprite(300,200,30,30);

 movingRect.debug = true;
 fixedRect.debug = true;

 movingRect.shapeColor = "grey";
 fixedRect.shapeColor = "grey";

}

function draw() {
  background(0,mouseX, mouseY);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 ){

    movingRect.shapeColor = rgb(100,mouseX,mouseY);
    fixedRect.shapeColor = rgb(100,mouseX, mouseY);
    background(mouseX, mouseY, 6);
    Firework.play();
  }else{
    movingRect.shapeColor = rgb(mouseX, mouseY, 6);
    fixedRect.shapeColor = rgb(mouseX, mouseY, 6);
  }
  drawSprites();
}
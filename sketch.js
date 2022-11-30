var bg ;
var moonLander;
var moonLanderImg;
var g = 0.05
var vx = 0 , vy = 0;

function preload(){
  bg = loadImage("bg.png");
  moonLanderImg = loadImage("normal.png");
}
function setup(){
createCanvas(1000,700)


moonLander = createSprite(500,100,20,20)
moonLander.addImage(moonLanderImg)
moonLander.scale = 0.15







}
function draw(){
 background(bg);
 
 vy += g ;
 moonLander.position.y += vy;
 moonLander.position.x += vx;

textSize(15)
fill("white")
text("Vertical velocity:  "+vy.toFixed(2)  ,20,20)
 
 textSize(15)
 fill("white")
 text("m/s^2",180,20)
 
 
 
  drawSprites()
}
function keyPressed(){
  if(keyCode==38){
    upward_thrust()
  }
  if(keyCode==LEFT_ARROW){
    vx = -1
  }
  if(keyCode==RIGHT_ARROW){
    vx = +1
  }
    
}
function upward_thrust(){
  vy = -1;
}


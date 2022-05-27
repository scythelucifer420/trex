
var trex ,trex_running;
var edges
var ground, ground_image
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
edges=createEdgeSprites()
trex=createSprite(100,150,50,50)
 trex.addAnimation("trex",trex_running)
trex.scale=0.8
trex.x=50
ground=createSprite(300,180,600,10)
ground.addImage("ground1",ground_image )
ground.velocityX=-4
ground.x=width/2
}

function draw(){
  background("white")
  if(keyDown("space")){
trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
  if(ground.x<=0){
ground.x=width/2
  }
  console.log(ground.x)
drawSprites()
}

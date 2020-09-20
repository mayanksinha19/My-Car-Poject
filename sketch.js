var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,car.height/2);
  wall.shapeColor="brown";
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  if(  wall.x-car.x   < (wall.width  +  car.width)/2  &&   car.x-wall.x < (car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/2;
    if(deformation<100){
      car.shapeColor="green";
    }
    else if(deformation>=100 && deformation<180){
      car.shapeColor="yellow";
    }
    else if(deformation>=180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}
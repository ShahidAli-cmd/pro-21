var canvas;
//var music;
var surfaces;
var cube;

function preload(){
   // music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(785,805);

    cube = createSprite(random(10,750),300,20,20)
    cube.shapeColor="white"
    cube.velocityX=3;
    cube.velocityY=3;
    //create 4 different surfaces
    surface1 = createSprite (35,785,125,35);
    surface2 = createSprite (205,785,125,35);
    surface3 = createSprite (375,785,125,35);
    surface4 = createSprite (535,785,125,35);
   
    surface1.shapeColor = "red"
    surface2.shapeColor = "blue"
    surface3.shapeColor = "pink"
    surface4.shapeColor = "green"

    
   


    //create box sprite and give velocity
   
}

function draw() {
  background(rgb(169,169,169));

  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX =object1.velocityX * (-1);
      object2.velocityX =object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y <object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
    if(cube.x<0){
      music.stop()
      cube.velocityX=3
    }else if (cube.x>805){
      music.stop()
      cube.velocityX=-3
    }
   
    //add condition to check if box touching surface and make it box
     if(surface1.isTouching(cube)){
     cube.shapColor = red;
     cube.velocityX = 0;
     music.stop();
     }
     if(surface2.isTouching(cube)){
      cube.shapColor = blue;
      cube.velocityX = 0;
      music.stop();
      }
      if(surface3.isTouching(cube)){
        cube.shapColor = pink;
        cube.velocityX = 0;
        music.stop();
        }
        if(surface4.isTouching(cube)){
          cube.shapColor = green;
          cube.velocityX = 0;
          music.stop();
          }
}
}

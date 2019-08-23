var movingrect,fixrect;
function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 fixrect=createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
if(fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2 &&
   movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2  &&
   fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2 &&
   movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2) {
      movingrect.shapeColor="red";
       fixrect.shapeColor="red";
     }
       else{
          movingrect.shapeColor="blue";
           fixrect.shapeColor="blue";
         }
  drawSprites();
}
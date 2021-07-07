
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("white")


if(keyIsDown(DOWN_ARROW))
  {
    background("red")
  }
  
  if(keyIsDown(UP_ARROW))
  {
    background("green")
  }
  if(keyIsDown(LEFT_ARROW))
  {
    background("blue")
  }
  if(keyIsDown(RIGHT_ARROW))
  {
  background("yellow")
  }
textSize(20)
text("Hold down arrow for red color", 100, 180)
text("Hold up arrow for green color", 100, 200)
text("Hold left arrow for blue color", 100, 220) 
text("Hold right arrow for yellow color", 100, 240)
  drawSprites()
}

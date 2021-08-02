function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  mr = createSprite(200,200,100,30)
  fr.shapeColor = "green"
  mr.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  mr.x = mouseX
  mr.y = mouseY
  console.log(fr.x-mr.x)
  if(fr.x-mr.x <=fr.width/2+mr.width/2 && mr.x-fr.x <=fr.width/2+mr.width/2 && fr.y-mr.y <=fr.height/2+mr.height/2&& mr.y-fr.y <=fr.height/2+mr.height/2){
    fr.shapeColor= "red"
    mr.shapeColor= "red"
  }
  else{
    fr.shapeColor = "green"
    mr.shapeColor = "green" 
  }

  drawSprites();
}
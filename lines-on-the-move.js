  
var y = 0;
var yChange = 5;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 10; x < 399; x = x + 10) {
    line(x+y, height/2, x+y+100, height/2-75);
  }
  
  y += yChange
  
  if (y >= 290 || y <= -390){
    yChange *= -1;
  }
}

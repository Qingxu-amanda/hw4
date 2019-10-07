function setup() {
  createCanvas(400, 400);
    colorMode(HSB);
}

  function draw() {

  stroke(255);

  for (var x = 30; x < width-30; x = x + 60) {
    stroke(x,x,x);
    line(x, height/2, mouseX, mouseY);


  }
}

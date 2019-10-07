function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 10) {
    triangle(x[i]+10+4*i, y[i]+i, x[i]-10-2*i,y[i]+i, x[i]-10-2*i, y[i]-10-2*i);
  }

  x = x.slice(-50); // remove all but the last 50 x values
  y = y.slice(-50); // remove all but the last 50 y values
}

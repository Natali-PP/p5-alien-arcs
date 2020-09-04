
//genera ondas

let yStep=10;

let arcSize=200;
function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'block');
}

function draw() {
  //background(236);

  background(23,10,62);
  strokeWeight(6);
  //stroke(2);
  stroke(259,107,53);
  noFill();

  contsrainedMouseX=constrain(mouseX, 10, windowWidth)
  contsrainedMouseY=constrain(mouseY, 10, windowHeight)

  arcSize=contsrainedMouseX;
  yStep=contsrainedMouseY;
    //stroke(253,0,0)
  for (let x = 0; x < windowWidth + arcSize; x+=arcSize) {
    //stroke(59,232,32);
    for (let y = 0; y < windowHeight; y+=yStep / 2) {
      arc(x, y, arcSize/2, arcSize/2, 0, PI) ;
      arc(x- arcSize/2 , y, arcSize/2, arcSize/2, PI, TWO_PI) ;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
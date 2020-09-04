
//genera algo copado ahora con el mouse

let yStep=10;
let sw;
let arcSize=200;
let alpha = 0
function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'block');
}

function draw() {
  background(23,200,62);
  strokeWeight(66);
  stroke(23);
  noFill();

  contsrainedMouseX=constrain(mouseX, 10, windowWidth)
  contsrainedMouseY=constrain(mouseY, 10, windowHeight)

  yStep=contsrainedMouseY
  
  for (let y = -arcSize; y < windowHeight + arcSize; y+=yStep ) {
    sw= map(sin(radians(y + alpha )), -1, 1.25, 0, yStep)
    strokeWeight(sw)
    for (let x1 = arcSize/2; x1 < windowWidth + arcSize; x1+=arcSize) {
      arc(x1, y, arcSize/2, arcSize/2, PI, PI) ; 
    }
    sw= map(cos(radians(y - alpha )), -1, 1, 4, yStep)
    strokeWeight(sw)
    for (let x2 = 0; x2 < windowWidth + arcSize; x2+=arcSize) {
      arc(x2 , y , arcSize/2, arcSize/2, PI, PI) ;
    }
  }
  alpha++
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
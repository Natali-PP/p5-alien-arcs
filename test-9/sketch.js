
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

  for (let x = 0; x < windowWidth + arcSize; x+=arcSize) { 
    for (let y = 0; y < windowHeight; y+=yStep ) {

      sw= map(sin(radians(y + alpha )), -1, 1, 2, yStep)

      strokeWeight(sw)
      arc(x, y, arcSize/2, arcSize/2, 0, PI) ;
      arc(x + arcSize/2, y, arcSize/2, arcSize/2, PI, TWO_PI) ;
      
    }
    
  }

  alpha++

  alpha++
  
  
  
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
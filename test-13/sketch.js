
//genera algo copado ahora con el mouse

let yStep=10;
let sw;
let arcSize=250;
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

  
  /* pop()
  strokeWeight(200)
  //stroke(233)
  //ellipse(noise(xOff1)*windowWidth,noise(xOff2)*windowHeight, 15, 15)
  ellipse(noise(xOff1)*windowWidth,noise(xOff2)*windowHeight, 150, 150)
  //ellipse(noise(xOff2)*windowWidth,noise(xOff1)*windowHeight, 15, 15)
  
  
  xOff1+=0.02;
  xOff2+=0.02;
  push() */
 
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
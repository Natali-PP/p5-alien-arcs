
//genera algo copado ahora con el mouse

let yStep=40;
let sw;
let arcSize=250;
let alpha = 0
let xOff1=0
let xOff2=10000000
function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'block');
}

function draw() {
  background(51);
  strokeWeight(5);
  stroke(230);
  noFill();

  /* beginShape()
  for (let x = 0; x < windowWidth; x++) {
    stroke(255)
    //vertex(x, noise(xOff1)*windowHeight)
  }
  endShape() */
  
  translate(windowWidth/2, windowHeight/2 )
  rectMode(CENTER)
  rotate(0 + alpha)
  
  //line(20, 30, 30, 10)
  //rect(0, 0, 20, 100)
  sw = map(sin(radians(alpha)), 1, -1, 2, 100)
  strokeWeight(sw)
  arc(0, 0, 300, 300, 0, HALF_PI)
  arc(0, 0, 400, 400, 0, PI)
  arc(0, 0, 600, 600, PI, 3*PI/ 4)
  
  alpha+=0.145

  //pop()
  scale(mouseX/100, 1.5)
  rect(0, 0, 70, 7)
  //push()
  
  
  /* pop()
  translate(windowWidth/2, windowHeight/2)
  rotate(PI / 4)
  ellipse(20,20, 50)
  ellipse(-20,20, 50)
  ellipse(-20,-20, 50)
  ellipse(20,-20, 50)
  rect(65, -45, 55, 150)
  arc(30, 0, 400, 400, 0, PI)
  push() */

  
  
    
    
  
  //arc(30, -0, 300, 300, PI, TWO_PI)
  
  //ellipse(noise(xOff2)*windowWidth,noise(xOff1)*windowHeight, 15, 15)
  
  
  
  //xOff2+=0.02;
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
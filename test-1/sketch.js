//intento entender la funcion map
// dibujo  círculos and such a
const arcSize=400;
//let col=0
function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'block');
}

function draw() {
  let col = map(mouseX, 0, windowWidth, 0, 255);
  background(20, col , 20);
  strokeWeight(66);
  noFill();
  let arcL = map(mouseX, 0, windowWidth, 0, TWO_PI)
  arc(windowWidth/2, windowHeight/2, arcSize+66*3, arcSize+66*3, 0, arcL)
  arc(windowWidth/2, windowHeight/2, arcSize, arcSize, 0, arcL)
  arc(windowWidth/2, windowHeight/2, arcSize/2, arcSize, 0, arcL)
  strokeWeight(33)
  stroke(map(mouseX, 0, windowWidth, 255, 0))
  arc(windowWidth/2, windowHeight/2, arcSize/2, arcSize/2, 0, arcL)
  strokeWeight(11)
  arc(windowWidth/2, windowHeight/2, arcSize/8, arcSize+66*3, 0, arcL)

  /* for (let i = 50; i < windowWidth; i+=50) {
    arc(windowWidth/2, windowHeight/2, i, i, 0, arcL)
  }
 */
}

/* function mousePressed(){
  option++
  if(option > 5) option=1;
} */

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
/* let option=1;
const s = 5; // tamaño cruces caso 1
const r = 80; //  radio circulos caso 3 */
//genera arcos segun la posición x e y del cursor
const arcSize=400;
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
  //let arcL = map(mouseX, 0, windowWidth, 0, TWO_PI)
  contsrainedMouseX=constrain(mouseX, 10, windowWidth)
  contsrainedMouseY=constrain(mouseY, 10, windowHeight)

    //stroke(253,0,0)
  for (let x = 0; x < windowWidth; x+=contsrainedMouseX) {
    //stroke(59,232,32);
    for (let y = 0; y < windowHeight; y+=contsrainedMouseY) {
      arc(x, y, arcSize, arcSize, 0, PI) ;
  }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
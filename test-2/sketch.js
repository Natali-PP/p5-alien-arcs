/* let option=1;
const s = 5; // tamaño cruces caso 1
const r = 80; //  radio circulos caso 3 */

const arcSize=150;
function setup() {
  const canv =  createCanvas(windowWidth, windowHeight);
  canv.style('display', 'block');
}

function draw() {
  background(23,10,62);

  stroke(1);
  stroke(241,107,53);
  for (let i = 0; i < windowWidth; i+=15) {
    //
    for (let moveX = 0; moveX < windowHeight; moveX+=50) {
      arc(i, moveX, arcSize, arcSize, 0, PI) ;
    }
  }
  strokeWeight(4);
  const trying = 32;
  stroke(59,232,trying);
  noFill();
  //let arcL = map(mouseX, 0, windowWidth, 0, TWO_PI)

  for (let i = 0; i <= windowHeight; i+=10) {
    //stroke(253,0,0)
    for (let moveX = 0; moveX <= windowWidth; moveX+=90) {
      arc(moveX, i, 50, 133, 0, PI) ;
    }
  }
 
  


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
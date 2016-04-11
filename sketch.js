var mover;
var liquid;
var noiseScale = 3;
var attractor;

function setup() {
 createCanvas(640, 360);
  mover = new Mover(1, 50,100);
  attractor = new Attractor();
}

function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (var i = 0; i < 9; i++) {
    movers[i] = new Mover(random(0.5, 3), 40+i*70, 0);
  }
}

function draw() {
  background(51);

  var force = attractor.calculateAttraction(mover);
  mover.applyForce(force);
  mover.update();
  
  attractor.display();
  mover.display();
  }

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}



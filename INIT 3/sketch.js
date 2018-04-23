var inc = 0.01;

function setup() {
  createCanvas(640,400);
  textAlign(CENTER,CENTER);

  // saveFrames("nullvoid_loop","png",5,22);
  // saveFrames("nullvoid_noise-gif","png",2,22)
}

function draw() {
  loadPixels();
    for (var y = 0; y < height; y++) {
      var xoff = 0;
      for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = random(255);
      pixels[index+0] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;

      xoff += inc;
    }
  }
  updatePixels();

var nu = random(199, 201);
var mu =  random(319, 321);
  textSize(17);
  fill(0);
  textFont("courier");
  // text("null && void", 320, 200);

  fill(255);
  textFont("courier");
  text("((null && void))", mu, nu);

  // saveFrames("nullvoid_loop","png",5,22);
}



//#!USER/BALLAD_OF_THE_BROKEN

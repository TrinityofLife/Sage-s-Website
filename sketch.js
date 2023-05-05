let song;
let fft;
var amp;

let lasers = [];

function preload() {
  song = loadSound('music/Call Me.mp3');
  img = loadImage('photos/Hamster2.png');
  img2 = loadImage('photos/Hamster2Flip.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fft = new p5.FFT();
  song.play();
  //song.loop();
  amp = new p5.Amplitude();
}

function draw() {
  // get the amplitude of the song
  let spectrum = fft.analyze();
  let amplitude = fft.getEnergy("bass");
  vol = amp.getLevel();
  // fade the background color
  let r = map(amplitude, 2, 255, 255, 0);
  let g = map(amplitude, 4, 255, 0, 255);
  let b = map(amplitude, 6, 255, 0, 255);
  background(r, g, b);
  
  sizeMultiplier = map(fft.getEnergy("bass", "treble"), 0, 255, 0.6, 1.0);
  
  fill(vol*600, 27, 1.9);
  strokeWeight(vol*600);
  ellipse(width/2,height/2,vol*3000);
  
  fill(vol*600, 98, 230);
  strokeWeight(vol*600);
  ellipse(width/8,height/8,vol*2000);

  fill(vol*600, 220, 180);
  strokeWeight(vol*600);
  ellipse(width/1.15, height/1.1, vol*2000);
  
  
    if (frameCount % 1 == 0) {
    let laser = {
      x: 1, 
      y: random(height), 
      speed: random(4, 20), 
      length: random(20, 80),
      thickness: random(1, vol*80),
      color: color(random(255), random(255), random(255))
    };
    lasers.push(laser);
  }
  
  for (let i = 0; i < lasers.length; i++) {
    let laser = lasers[i];
    laser.x += laser.speed;
    strokeWeight(laser.thickness);
    stroke(laser.color);
    line(laser.x, laser.y, laser.x + laser.length, laser.y);
    
    if (laser.x > width) {
      lasers.splice(i, 1);
      i--;
    }
  }
if (!mouseIsPressed){
     imageMode(CENTER);
  image(img2, mouseX, mouseY, img.width * sizeMultiplier, img.height * sizeMultiplier);
  } else {
    // Otherwise, the mouse is pressed. Flip the image.
    // We will use the scale() transformation to reverse the x-axis.
    // The push and pop functions save and reset the previous transformation.
    push();  
     imageMode(CENTER);
  image(img, mouseX, mouseY, img.width * sizeMultiplier, img.height * sizeMultiplier);
    
    pop();
  }
}

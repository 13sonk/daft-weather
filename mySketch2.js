//song https://www.youtube.com/watch?v=hAO6QbZMUkY
//img https://music.mxdwn.com/2021/02/22/news/daft-punk-have-broken-up/
let button;
let spaceImages = [];
let spaceFrame = 0;
let temperature = 0;
let weather = "";
let clouds = 0;

let json;

let sunImages = [];
let sunFrame = 0;

function preload() {
	let url = "https://api.openweathermap.org/data/2.5/weather?lat=35.6895&lon=139.6917&appid=20e810b1d30c7eabaf716ddc906c5fc2&units=metric"; 
  json = loadJSON(url);
	
  for(let i=1; i < 30; i++){
    spaceImages.push(loadImage('frame'+i+'.png'));
	img1 =loadImage("daft punk.png")

}}


function setup() {
	createCanvas(800, 450);
	song = loadSound('around the world.mp3');
	temperature = json.main.temp;
	weather = json.weather[0].description;
	clouds = json.clouds.all; 
	
	background("#7494EA");
	angleMode(DEGREES); 
	
	button = createButton('play');
  button.position(330, 60);
  button.mousePressed(changeBG);
	
	button2 = createButton('stop');
  button2.position(460, 60);
  button2.mousePressed(changeBG);
	
	image(spaceImages[0], 0, 0, width, height);
	//image(sunImages[0], 0, 0, width, height);
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

function changeBG() {
  let val = random(255);
  background(val);
}
function draw() {
	//showCoordinateNum();
	background(0, 1); // make the bg transparent to show images
  drawNextImage();  // draw next frame of the gif images

	push();
	strokeWeight(12);
	line(200, 115, 150, 320);
	pop();
	
	push();
	strokeWeight(12);
	line(600, 115, 650, 320);
	pop();
	
	push();
	fill("#2F4858");
	stroke('#222222');
	strokeWeight(12);
	translate(400,-225);
	ellipse(0, 0, 1500, 700);
	pop();

	push();
	fill("#2F4858");
	stroke('#222222');
	strokeWeight(12);
	translate(400, 650);
	ellipse(0, 0, 1500, 700);
	pop();
	
	push();
	fill('#222222')
	translate(250,-50);
	scale(0.2);
	beginShape();
	vertex(200, 200);
	vertex(250, 800);
	vertex(750, 800);
	vertex(800, 200);
	endShape(CLOSE)
	pop();
	
	push();
	fill('#222222')
	translate(380,-50);
	scale(0.2);
	beginShape();
	vertex(200, 200);
	vertex(250, 800);
	vertex(750, 800);
	vertex(800, 200);
	endShape(CLOSE)
	pop();
	
	push();
	fill('#222222')
	translate(330,270);
	scale(0.2);
	beginShape();
	vertex(150, 200);
	vertex(50, 800);
	vertex(900, 800);
	vertex(800, 200);
	endShape(CLOSE)
	pop();
	
	push();
	fill('#5a5a5a')
	translate(340,280);
	scale(0.18);
	beginShape();
	vertex(150, 200);
	vertex(50, 800);
	vertex(900, 800);
	vertex(800, 200);
	endShape(CLOSE)
	pop();
	
	push();
	fill("#74ee15");
	text("city: tokyo", 370, 340);
  text("temp: " + temperature, 370, 360);
  text("forecast: " + weather, 370, 380);
	text("clouds: " + clouds, 370, 400);
	pop();
	
function drawNextImage() {
  spaceFrame = spaceFrame + 1;
   if(spaceFrame >= 29) {
     spaceFrame = 0;
	 }
  image(spaceImages[spaceFrame], 0, 0, width, height);
	
	image(img1,100,100,652,400);
	
}}
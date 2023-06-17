let button;

function preload() {
	spacegif = createImg("space.gif", "");
	//sungif = createImg("sun.gif", "");
	loop();
}


function setup() {
	createCanvas(800, 450);
	background("#7494EA");
	button = createButton('GO');
  button.position(335, 60);
  button.mousePressed(changeBG);
	
	button2 = createButton('GO');
  button2.position(465, 60);
  button2.mousePressed(changeBG);
	
}
function changeBG() {
  let val = random(255);
  background(val);
}
function draw() {
	angleMode(DEGREES);
	showCoordinateNum();
	
	push();
	spacegif.position(10, 10);
	spacegif.size(400, 400);
	pop();
	
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
	translate(320,260);
	scale(0.2);
	beginShape();
	vertex(150, 200);
	vertex(50, 800);
	vertex(900, 800);
	vertex(800, 200);
	endShape(CLOSE)
	pop();
	
}
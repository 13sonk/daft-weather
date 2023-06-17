function drawGrid(gap){
	push();
	strokeWeight(0.5);
	stroke(200);
	for(let x = 0; x <= width; x = x+gap) {
		line(x, 0, x, height);
	}
	
	for(let y = 0; y <= height; y = y+gap) {
			line(0, y, width, y);
	}
	pop();
}

function showCoordinateNum(){
	push();
	stroke("red");
	fill("red");
	textSize(20);
	text(`x: ${mouseX}, y: ${mouseY}`, 10, height-30);
	pop();
}
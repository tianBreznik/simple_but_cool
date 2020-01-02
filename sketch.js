let angle = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	//background(255);
	translate(width/2, height/2);
	rectMode(CENTER);

	for (let x = 0; x < width;x += 10){
		let h = map(Math.random() * sin(angle), -1, 1, 10, 100);
		rect(x,0,9,h);
	}

	angle += 0.01;

}

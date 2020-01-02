let angle = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	//background(255);
	translate(width/2, height/2);
	rectMode(CENTER);

	let offset = 0; // -optional - drugace daj samo angle namesto a v sin
	for (let x = 0; x < width;x += 10){
    let a = angle + offset;
		let h = map(Math.random() * sin(a), -1, 1, 10, 100);
		rect(x,0,9,h);
		offset += 0.1;
	}

	angle += 0.01;

}

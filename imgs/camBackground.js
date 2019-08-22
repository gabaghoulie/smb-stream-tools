// cam background p5.js sketch
//  -SausageMcBurn 7/15/2019


let sizeX = 399;
let sizeY = 300;

let rectW = 374;
let rectH = 280;
let rectX0 = 12;
let rectY0 = 10;



function setup() {
	// general setup stuff, nothin goin on here
	createCanvas(sizeX, sizeY);
    background(0);
    noStroke();
    fill(random(255),random(255),random(255));
    rect(rectX0, rectY0, rectW, rectH);
}

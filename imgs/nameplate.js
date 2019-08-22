// SMB nameplate p5.js sketch
//  -SausageMcBurn 7/15/2019


let sizeX = 162;
let sizeY = 35;

let fontX = sizeX / 4 - 30;
let fontY = 24;

let bw = 2;
let spacing = 11;

let font_size = 22;

let title_text = 'sausagemcburn';


function preload() {
	// gotta preload font for some reason? idk
	myFont = loadFont('../resources/cqmono.otf');
}

function setup() {
	// general setup stuff, nothin goin on here
	createCanvas(sizeX, sizeY);
    let bgcolor = generateRandomColor();
    background(bgcolor);
    noStroke();
    fill(0);
    rect(bw, bw, sizeX-(2*bw), sizeY-(2*bw));

    textFont(myFont);
    textSize(font_size);

    let title = new Title(title_text, spacing, fontX, fontY);
    title.drawSelf();
}

//~~~~~~~~~~~~~~~~~~~~~~~~
//	skyline
//~~~~~~~~~~~~~~~~~~~~~~~~

//========================
// variables
//========================

// building variables

var buildings = [];

// sky variables

var sky;

// moon variables
var moon = {
	x:150,
	y:120,
	c:"white",
	diameter: 150,
}

//========================
// sky setup
//========================

function preload(){
  sky = loadImage("images/sky.png");
}

function setup(){
	createCanvas(sky.width,sky.height);
	noStroke();
	for(var i = 0;i< 10;i++){
		buildings.push(new Building(i,height,random(100,100),random(150,500), "gray"));
	}

}

function draw(){
	background(sky,0,0,sky.width,sky.height);
		fill(moon.c);
		ellipse(moon.x,moon.y,moon.diameter,moon.diameter);

	for (var i= 0; i < buildings.length; i++){
		buildings[i].drawBuilding();
	}
}

//========================
// draw moon
//========================

function moon(x,y,c,diameter){
	this.x = x;
	this.y = y;
	this.c = c;
	this.diameter = diameter;
	this.drawMoon = function(){
		fill(this.c);
		ellipse(moon.x,moon.y,moon.diameter,moon.diameter);

	}
}

//========================
// draw buildings
//========================

function Building (x,y,w,h){
	this.x = x*100;
	this.y = y-h;
	this.w = w;
	this.h = h;
	this.drawBuilding = function (){
		fill("gray");
		rect(this.x,this.y,this.w,this.h);

	}
}

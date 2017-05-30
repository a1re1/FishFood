var player;
var w = window.innerWidth;
var h = window.innerHeight/6*5;
var canvas;
function setup() {
	canvas = createCanvas(w,h);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 5*2;
	canvas.position(x, y);
	player = new Player();
}

function draw() {
	background(0);
	player.update();
	if ( keyIsDown(LEFT_ARROW) || keyIsDown(65)){
		player.x -= 5;
	}
	if ( keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
		player.x += 5;
	}
	player.show();
}

window.onresize = function() {
	canvas.size(window.innerWidth, window.innerHeight/6*5);
	var x = (window.innerWidth - width) / 2;
	var y = (window.innerHeight - height) / 5*2;
	canvas.position(x, y);
}

function keyPressed(){
	//console.log(keyCode);
	if (key == ' ' && player.velocity == 0) {
		player.up();
		//console.log("UP");
	}
	if (keyCode == '65' || keyCode == LEFT_ARROW) {
		player.up();
		console.log(player.velocity);
	}
	if (keyCode == '68' || keyCode == RIGHT_ARROW) {
		player.up();
		console.log(player.velocity);
	}
}
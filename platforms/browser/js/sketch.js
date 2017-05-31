var player;
var w = 450;
var h = window.innerHeight/6*5;
var canvas;
var seaweed = [];
var sharks = [];
var score = 0;
var lives = 3;

function setup() {
	canvas = createCanvas(w,h);
	var x = 0;
	var y = (windowHeight - height) / 5*2;
	canvas.position(x, y);
	player = new Player();
	button = createButton('RESET');
	button.position(width/2 - button.width/2, 20);
	button.mousePressed(reset);
}

function draw() {
	if(lives > 0){
		background(20,110,212);
		fill(255);
		textSize(32);
		text("Score: " + score, 20, height - 20);
		fill(255);
		textSize(32);
		text("Lives: " + lives, width - 130, height - 20);
		player.update();
		if ( keyIsDown(LEFT_ARROW) || keyIsDown(65)){
			player.x += 3;
			player.y -= velocity + 3;
		}
		if ( keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
			player.x -= 3;
			player.y -= velocity + 3;
		}
		player.show();
		
		for (var i = seaweed.length-1; i >= 0; i--){
			seaweed[i].show();
			seaweed[i].update();
			
			if(seaweed[i].hits(player)){
				console.log("lose a life");
			} 
			
			if(seaweed[i].offscreen()){
				seaweed.splice(i, 1);
				score += 1;
			}
		}
		
		for (var i = sharks.length-1; i >= 0; i--){
			sharks[i].show();
			sharks[i].update();
			
			if(sharks[i].hits(player)){
				console.log("shark attack");
			} 
			
			if(sharks[i].offscreen()){
				sharks.splice(i, 1);
				score += 1;
			}
		}
		
		if(frameCount % Math.floor(60/(velocity/3)) == 0){
			seaweed.push(new Seaweed());
			sharks.push(new Shark());
		}
	}
	else{
		background(200,10,0);
		fill(255);
		textSize(32);
		text("Fin.",15,height - 140);
		text("Last score: " + score,15,height - 100);
	}
}

function reset(){
	lives = 3;
	score = 0;
	velocity = 1;
	seaweed = [];
	sharks = [];
	player.x = width/2;
	player.y = height/2;

}

window.onresize = function() {
	canvas.size(w, window.innerHeight/6*5);
	var x = 0;
	var y = (window.innerHeight - height) / 5*2;
	canvas.position(x, y);
}

function keyPressed(){
	//console.log(keyCode);
	if (keyCode == '65' || keyCode == LEFT_ARROW) {
		player.up();
		//console.log(player.velocity);
	}
	if (keyCode == '68' || keyCode == RIGHT_ARROW) {
		player.up();
		//console.log(player.velocity);
	}
}
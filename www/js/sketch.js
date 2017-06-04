/**
* @filename: player.js
* @desc: a player module for Fin the Fish.
* @author: Tyler Whitehurst (a1re1) twwhitehurst@gmail.com
*/

var player;
var w = window.innerWidth;
var h = window.innerHeight;
var canvas;
var seaweed = [];
var sharks = [];
var score = 0;
var lives = 3;

function setup() {
	canvas = createCanvas(w,h);
	var x = 0;
	var y = 0;
	canvas.position(x, y);
	player = new Player();
	button = createButton('RESET');
	button.position(20, 20);
	button.mousePressed(reset);
}

function touchStarted(){
}

function draw() {
	if(lives > 0){
		background(20,110,212);
		fill(255);
		textSize(width/12);
		text("Score: " + score, 20, height - 20);
		fill(255);
		textSize(width/12);
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
		if(touches.length > 0){
			for(var i = touches.length-1; i>=0; i--){
				if(touches[i].x <= 190){
					player.x += 3;
					player.y -= velocity + 3;
				}
				else{
					player.x -= 3;
					player.y -= velocity + 3;
				}
			}
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
		
		if(frameCount % 110 == 0 && velocity<3){
			player.up();
			seaweed.push(new Seaweed());
			sharks.push(new Shark());
		}
		else if(frameCount % 50 == 0 && velocity>=3){
			player.up();
			seaweed.push(new Seaweed());
			sharks.push(new Shark());
		}
		if(frameCount % 110 == 0 && velocity>2){
			sharks.push(new Shark());
		}
	}
	else{
		for(var i = seaweed.length-1; i >= 0; i--){
			seaweed[i].l.remove();
			seaweed[i].r.remove();
			seaweed.splice(i,1);
		}
		for(var i = sharks.length-1; i >= 0; i--){
			sharks[i].shark.remove();
			sharks.splice(i,1);
		}
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
	for(var i = seaweed.length-1; i >= 0; i--){
		seaweed[i].l.remove();
		seaweed[i].r.remove();
		seaweed.splice(i,1);
	}
	for(var i = sharks.length-1; i >= 0; i--){
		sharks[i].shark.remove();
		sharks.splice(i,1);
	}
	player.x = width/2;
	player.y = height/2;

}

window.onresize = function() {
	canvas.size(window.innerWidth, window.innerHeight);
	var x = 0;
	var y = 0;
	canvas.position(x, y);
	reset();
}

function keyPressed(){
	//console.log(keyCode);
	if (keyCode == '65' || keyCode == LEFT_ARROW) {
		//player.up();
		//console.log(player.velocity);
	}
	if (keyCode == '68' || keyCode == RIGHT_ARROW) {
		//player.up();
		//console.log(player.velocity);
	}
}
/**
* @filename: player.js
* @desc: a player module for Fin the Fish.
* @author: Tyler Whitehurst (a1re1) twwhitehurst@gmail.com
*/

function Shark(){
	this.pos = height/2 + 100 - random(height/2 + 300);
	this.side = 1 - Math.floor(random(2));
	this.top = this.pos - this.d2/2;
	this.bottom = this.pos + this.d2/2;
	this.x;
	this.d1 = 60;
	this.d2 = 30;
	this.shark = createImg("resources/shark.gif");
	this.shark.size(this.d1, this.d2);
	if(this.side == 1){
		this.x = width;
		this.speed = 3;
		this.shark.size(this.d1, this.d2);
	}
	else{
		this.x = 0;
		this.speed = -3;
		this.shark.size(-this.d1, this.d2);
	}

	this.left = this.x - this.d1/2;
	this.right = this.x + this.d1/2;

	this.update = function(){
		this.x -= this.speed;
		this.pos += velocity/4;
	}
	
	this.hit = false;
	
	this.hits = function(player){
		if(player.x > this.right && player.x < this.left){
			console.log("between the sides");
			if(player.y > this.bottom && player.y < this.top && !this.hit){
				this.hit = true;
				lives -= 1;
				return true;
			}
		}
		return false;
	}
	this.show = function(){
		this.shark.position(this.x-this.d1/2, this.pos-this.d2/2);
		fill(50,0,243);
		if(this.hit){
			fill(255, 0, 0);
		}
		//ellipse(this.x, this.pos , this.d1, this.d2);
	}
	

	this.offscreen = function(){
		if(this.side == 1 && this.x < -this.d1/2){
			this.shark.remove();
			return true;
		}
		else if(this.side == 0 && this.x > width + this.d1/2){
			this.shark.remove();
			return true;
		}
		
	}
}
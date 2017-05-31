function Shark(){
	this.pos = height/2 + 100 - random(height/2 + 300);
	this.side = 1 - Math.floor(random(2));
	this.top = this.pos - this.d2/2;
	this.bottom = this.pos + this.d2/2;
	this.x;
	if(this.side == 1){
		this.x = width;
		this.speed = 3;
	}
	else{
		this.x = 0;
		this.speed = -3;
	}
	this.d1 = 40;
	this.d2 = 20;
	this.left = this.x - this.d1/2;
	this.right = this.x + this.d1/2;

	this.update = function(){
		this.x -= this.speed;
		this.pos += velocity;
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
		fill(50,150,73);
		if(this.hit){
			fill(255, 0, 0);
		}
		ellipse(this.x, this.pos , this.d1, this.d2);
	}
	

	this.offscreen = function(){
		return this.x < -this.d1/2;
	}
}
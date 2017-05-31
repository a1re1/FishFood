function Seaweed(){
	this.left = random(width/2);
	this.right = random(width/2);
	this.y = 0;
	this.w = 20;
	
	this.update = function(){
		this.y += velocity;
	}
	
	this.hit = false;
	
	this.hits = function(player){
		if(player.x < this.left || player.x > width - this.right){
			if(player.y > this.y && player.y < this.y + this.w && !this.hit){
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
		rect( 0, this.y, this.left, this.w);
		rect( width - this.right, this.y, this.right, this.w)
	}
	

	this.offscreen = function(){
		return this.y > height + this.w;
	}
}
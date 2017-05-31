function Seaweed(){
	this.left = random(width/2);
	this.right = random(width/2);
	this.y = 0;
	this.w = 20;
	
	this.show = function(){
		fill(50,150,73);
		rect( 0, this.y, this.left, this.w);
		rect( width - this.right, this.y, this.right, this.w)
	}
	
	this.update = function(){
		this.y += velocity;
	}

	this.offscreen = function(){
		return this.y > height + this.w;
	}
}
var velocity = 1;

function Player(){
	this.x = width/2;
	this.y = height/2;
	this.d1 = 64;
	this.d2 = 64;
	this.gravity = 1;
	img = createImg("resources/crimson.png");
	
	this.show = function(){
		img.size(this.d1, this.d2);
		img.position(this.x - this.d1/2, this.y + this.d2/2*.9);
		//ellipse(this.x, this.y, this.d1, this.d2);
	}
	
	this.update = function(){
		//this.velocity += this.gravity;
		this.y += velocity + 1;
		
		if(this.y < this.d1/2){
			this.y = this.d1/2;
		}
		
		if(this.y > height - this.d1/2){
			this.y = height - this.d1/2;
		}

		if(this.x > width - this.d2/2){
			this.x = width - this.d2/2;
		}
		
		if(this.x < this.d2/2){
			this.x = this.d2/2;
		}
	}
	
	this.up = function(){
		if(velocity < 8){velocity = velocity*1.01;}
	}
}
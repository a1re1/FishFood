/**
* @filename: player.js
* @desc: a player module for Fin the Fish.
* @author: Tyler Whitehurst (a1re1) twwhitehurst@gmail.com
*/

/**Global velocity used to keep track of canvas pace.*/
var velocity = 1;

/**
* A constructor for the player which sets the scene and controls.
*/
function Player(){
	this.x = width/2;//player x-position
	this.y = height/2;//player y-position
	this.d1 = 64;//player collision is set as an ellipse. This is x-diameter
	this.d2 = 64;//player collision is set as an ellipse. This is y-diameter
	img = createImg("resources/crimson.png");//the player image
	
	/*Load the player onto the canvas*/
	this.show = function(){
		img.size(this.d1, this.d2);
		img.position(this.x - this.d1/2, this.y - this.d2/2*.9);
		/*Uncomment below to see player hitbox*/
		//ellipse(this.x, this.y, this.d1, this.d2);
	}
	
	/*Used to check player position.*/
	this.update = function(){
		this.y += velocity + 1;
		
		if(this.y < this.d1/2){
			this.y = this.d1/2;
		}
		
		if(this.y > height - 2*this.d1){
			this.y = height - 2*this.d1;
		}

		if(this.x > width - this.d2/2){
			this.x = width - this.d2/2;
		}
		
		if(this.x < this.d2/2){
			this.x = this.d2/2;
		}
	}
	
	/*Triggers a velocity update*/
	this.up = function(){
		if(velocity < 6){velocity = velocity*1.02;}
	}
}
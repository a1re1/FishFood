/**
* @filename: seaweed.js
* @desc: a way to add new seaweed objects to the scene.
* @author: Tyler Whitehurst (a1re1) twwhitehurst@gmail.com
*/

/**
* A constructor for a seaweed object.
*/
function Seaweed(){
	this.left = random(width/2);//rendomly generated left kelp length
	this.right = random(width/2);//randomly genrated right kelp length
	this.y = 0;//kelp y-position
	this.w = 20;//width of a kelp
	this.l = createImg("resources/Kelp.gif");//left kelp
	this.r = createImg("resources/Kelp.gif");//right kelp
	this.l.size(width, this.w);//sets size
	this.r.size(width, this.w);//sets size
	
	/*Makes the kelp fall at the speed of velocity*/
	this.update = function(){
		this.y += velocity;
	}
	
	this.hit = false;//flag to determine if player has hit a kelp.
	
	/*Checks if player has hit either kelp*/
	this.hits = function(player){
		if(player.x < this.left || player.x > width - this.right){
			if(player.y > this.y && player.y < this.y + this.w && !this.hit){
				this.hit = true;
				lives -= 1;
				tint(240, 35, 0);
				this.l.size(width, 40);
				this.r.size(width, 40);
				return true;
			}
		}
		return false;
	}
	
	/*Displays kelp on the canvas*/
	this.show = function(){

		/**Uncomment the three lines below to display kelp hitbox.*/
		//fill(50,150,73);
		//rect( 0, this.y, this.left, this.w);
		//rect( width - this.right, this.y, this.right, this.w)
		this.l.position(-(width-this.left-10), this.y - this.w/2);
		this.r.position(width-this.right, this.y - this.w/2);
		
	}
	
	/*Helper function used to remove offscreen kelp*/
	this.offscreen = function(){
		if(this.y > height + this.w){
			this.l.remove();
			this.r.remove();
			return true;
		}
		return false;
	}
}
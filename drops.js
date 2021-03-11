class Drops
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	fall(speed){
        this.y +=speed;
	}


	update(){     
		if(this.body.position.y > height){

		 Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
	 }
 }

	display()
	{
			
			var d=this.body.position;		

			push()
			translate(d.x, d.y);
            ellipseMode(CENTER);
			strokeWeight(0)
			fill(22, 0, 166)
			ellipse(0,0,this.r, this.r);
			pop()
			
		}

}






class Umbrella
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("umbrella.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var u=this.body.position;		
			push()
			translate(u.x, u.y+33);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}
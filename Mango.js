class Mango{
	constructor(x,y,){	
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
        this.image = loadImage("Plucking_mangoes/mango.png");
		this.body=Bodies.circle(x, y, options);
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		fill(255,0,255)
		imageMode(CENTER)
		pop()
 }
}
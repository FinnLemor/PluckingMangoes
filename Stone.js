class Stone{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.3
        }
        this.image = loadImage("Plucking_mangoes/stone.png");
		this.body=Bodies.circle(x, y, options);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		fill(255,0,255)
		imageMode(CENTER);
		pop()
 }
}
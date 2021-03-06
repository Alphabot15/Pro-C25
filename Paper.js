class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
        this.image= loadImage("RedBird.webp")
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width, this.height);
    ellipse(0, 0, this.radius);
    pop();
  }
};

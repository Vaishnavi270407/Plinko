class Plinko {
    constructor(x, y, radius){
      var options = {
        restitution:0.8,
        friction:1.0,
        density: 1.0,
        isStatic: true
    }
 
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
}
display(){
    fill("brown");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
  }
}
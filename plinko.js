class Plinko{
constructor(x,y,radius){

  var options={
    isStatic:true
  }

    this.body=Bodies.circle(x,y,radius-10,options);
    this.radius=radius;
    World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    noStroke();
    fill(255);
    ellipse(0, 0, this.radius);
    pop();
  }


}
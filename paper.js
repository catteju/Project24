class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'isStatic': false,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      //this.body.scale = 0.5;
      console.log(this.body);

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS);
      fill("orange");
      stroke("green");
      strokeWeight(4);
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };
  
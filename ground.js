class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.groundImage=loadImage("sling.jpg");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        fill("peach");
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.groundImage,pos.x, pos.y, this.width, this.height);
    }
  }
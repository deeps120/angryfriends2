class Ball{
    constructor(x,y,width,height){
        var options={
            restitution:2.0,
            density:1.0
        }
        this.body=Bodies.circle(x,y,width,height);
        this.ballImage=loadImage("face.png");
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        fill("pink");
        var pos= this.body.position;
        image(this.ballImage,pos.x,pos.y,this.body.width,this.body.height);
      //  this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
       
    }
    
}
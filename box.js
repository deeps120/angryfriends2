class Box{
    constructor(x,y,width,height){
       
        var options={
            restitution:0.8,
            friction:0.8,
            density:0.8
        }
        this.visiblity=255;
        this.body=Bodies.rectangle(x,y,width,height);
        this.boxImage=loadImage("taylor.jpg");
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed>15){
            World.remove(world,this.body);
            this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
        }
                var pos=this.body.position;
            image(this.boxImage,pos.x,pos.y,this.width,this.height);
    
        
        }
        score(){
    if(this.visiblity<255 && this.visiblity>-1000){
    score++;
    }
        }
}

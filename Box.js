class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 1.0,
            friction:0.6,
            density:1.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options); 
        this.width = width;
        this.height = height;

        World.add(myWorld,this.body);
    }


    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}
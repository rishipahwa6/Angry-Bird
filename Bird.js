class Bird{
    constructor(x,y){
    
      var options={
          restitution : 0.8,
          friction :0.6,
          density :1.5
    }
      this.body = Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
       World.add(myWorld,this.body);
    }
    display(){
      //namespacing
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("blue");
      rectMode(CENTER);
      fill("green");
      rect(0,0,this.width,this.height);
      pop();
    
    }
    
    }
    
    
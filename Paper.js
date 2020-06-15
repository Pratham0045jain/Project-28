class Paper extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("Sprites/ball.png");
      //this.image.setScale= 1.6;
      this.Visiblity = 255;
    }

    display(){

      //console.log(this.body.speed);
      //console.log(this.body.position.x)
      console.log(this.body.position.y)

      if( this.body.position.x > 674 && this.body.position.x < 752 && this.body.position.y > 200 ){
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
    }else{
      super.display();
    }



    }
  
  };
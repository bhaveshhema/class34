class Ball {
    constructor(x,y,width,height){
        var options = {
            frictionAir: 0.05,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill('brown');
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
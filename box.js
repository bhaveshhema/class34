class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0.2,
            friction: 1.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill('lightblue');
        strokeWeight(7);
        stroke('brown');
        rect(0,0, this.width, this.height);
        pop();
    }
}
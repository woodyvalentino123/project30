class Box extends BaseClass{
    constructor(x,y){
        super(x,y,30,30);
        rect(x,y,30,30);
        this.visibility = 255;
}
display(){
    if(this.body.speed<3){
        var pos = this.body.position
        var angle = this.body.angle
        push();
       translate(pos.x,pos.y)
       rotate(angle)
       fill("blue")
        rectMode(CENTER)
        rect(0,0,30,30);
        pop();
    }else{
        World.remove(world,this.body);
         
        push();
        this.visibility = this.visibility-5;
        pop();
    }

}
}



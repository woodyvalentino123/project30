class Box extends BaseClass{
    constructor(x,y){
        super(x,y,30,30);
        rect(x,y,30,30);
        this.visibility = 255;
}
display(){
    if(this.body.speed<3){
        super.display();
    }else{
        World.remove(world,this.body);
        var pos = this.body.position
        push();
        this.visibility = this.visibility-5;
        rect(pos.x,pos.y,30,30)
        tint(255,this.visibility);
        rect(pos.x,pos.y,30,30);
        pop();
    }

}
}



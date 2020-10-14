class DustbinP2{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,20,100,{isStatic:true});
        this.height = 100;
        this.width = 20;    
        World.add(world,this.body);    
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
class DustbinP1{
  constructor(){

this.body= Bodies.rectangle(700,680,200,20,{isStatic:true});
  this.height = 20;
  this.width =300;
  World.add(world,this.body);
  }
  display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
  }
}

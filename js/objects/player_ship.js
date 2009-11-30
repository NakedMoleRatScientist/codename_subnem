// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja

function Player()
{
  this.image_file = Object.loadImage("assets/game/fighter_x1/main.png");
  this.image = new ImageNode(this.image_file);
  this.physical_object = new PhysicalObject(100,0);
  this.image.physical_object = this.physical_object;
  var kb_move = function(t, dt){
    if(this.root.keys.left){
      console.log("wah!");
      this.physical_object.turn_left();
    }
    if(this.root.keys.up){
      this.physical_object.accelerate_forward();
      console.log(this.physical_object.velocity);
    }
  }
  this.image.addFrameListener(kb_move);
}

player = new Player();

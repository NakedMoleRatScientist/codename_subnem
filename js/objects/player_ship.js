// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja

function Player()
{
  this.image_file = Object.loadImage("assets/game/fighter_x1/main.png");
  this.image = new ImageNode(this.image_file);
  this.image.centered = true;
  this.image.y += 90;
  this.physical_object = new PhysicalObject(200,0);
  this.image.physical_object = this.physical_object;
  var kb_move = function(t, dt){
    if(this.root.keys.left){
      this.physical_object.turn_left();
    }
    if(this.root.keys.right){
      this.physical_object.turn_right();
    }
    if(this.root.keys.up){
      this.physical_object.accelerate();
      console.log(this.physical_object.velocity);
    }
    if(this.root.keys.down){
      this.physical_object.decelerate();
      console.log(this.physical_object.velocity);
    }
    var location = this.physical_object.convert_to_cartesian();
    this.x += location.x;
    this.y += location.y;
    this.rotation = location.angle - (Math.PI/2);
  }
  this.image.addFrameListener(kb_move);
}

player = new Player();

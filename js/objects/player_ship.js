// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja

function Player()
{
    this.image_file = Object.loadImage("assets/game/fighter_x1/main.png");
    this.image = new ImageNode(this.image_file);
    this.physical_object = new PhysicalObject(100,30);
    this.movement = new Movement(this.physical_object,this.image);
    this.addFrameListener = function()
    {
      this.image_file.addFrameListener(function(t)
      {
        this.movement.move();
      }
    }
}

player = new Player();
player.addFrameListener();
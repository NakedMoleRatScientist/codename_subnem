// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja

function Player()
{
    this.image_file = Object.loadImage("assets/game/fighter_x1/main.png");
    this.image = new ImageNode(this.image_file);
    this.image.addFrameListener(function(t) 
    {
      this.x += 5;
      this.y += 5;
    });
}

player = new Player();
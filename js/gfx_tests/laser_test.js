function LaserTest(){
  this.canvas = null;
  this.setup = function(){
    // set up a canvas
    var c = E.canvas(500, 500);          // create a new canvas element
    var canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
    canvas.fill = [0,0,0,1];           // set the Canvas background to black
    canvas.clear = true;                 // don't show previous frame
    this.canvas = canvas;
    document.body.appendChild(c);        // append the canvas element to document body
  };

  this.run = function(){
    // Initialize a laser in the middle of the screen
    var _laser = new Laser(100, 100, this.canvas);
    //
    // Fire it once directly to the right
    _laser.rotate_to(0);
    _laser.fire();

    // Fire it once directly to the left
    _laser.rotate_to(180);
    _laser.fire();
  }
}

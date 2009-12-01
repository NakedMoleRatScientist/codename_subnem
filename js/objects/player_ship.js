// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja

Player = Klass(Drawable, {
  image_file: Object.loadImage(settings.player_ship_image_path),
  image: null,
  initialize: function(){
    this.image = new ImageNode(this.image_file);
    this.image.centered = true;
    this.image.y += 90;
    this.image.physical_object = new PhysicalObject(200,0);
    this.image.addFrameListener(this.kb_move);
  },
  kb_move: function(t, dt){
    if(this.root.keys.left){
      this.physical_object.turn_left();
      hud.rotation_gauge.text = this.physical_object.angle_in_degrees();
    }
    if(this.root.keys.right){
      this.physical_object.turn_right();
      hud.rotation_gauge.text = this.physical_object.angle_in_degrees();
    }
    if(this.root.keys.up){
      this.physical_object.accelerate();
      hud.velocity_gauge.text = this.physical_object.velocity;
    }
    if(this.root.keys.down){
      this.physical_object.decelerate();
      hud.velocity_gauge.text = this.physical_object.velocity;
    }
    var location = this.physical_object.convert_to_cartesian();
    this.x += location.x;
    this.y += location.y;
    this.rotation = location.angle - (Math.PI/2);
  }
});

// A Particle class, for the particle system.  -Josh Adams 2009
//
// NOTE: If this weren't an actual class, it would inevitably be faster

Particle = Klass(CanvasNode, {
  x: null,
  y: null,
  color: null,
  direction: null,
  size: null,           // each particle can have a different size
  time_to_live: null,   // how long in ms is this particle going to be on the screen?
  time_alive: null,     // how long has this particle been alive?
  _initial_color: null, // store the initial color
  _particle: null,      // the actual drawing object...
  initialize: function(x, y, color, direction, size, time_to_live){
    CanvasNode.initialize.call(this);
    this.x = x;
    this.y = y;
    this._initial_color = color;
    this.color = color;
    this.direction = direction;
    this.size = size;
    this.time_to_live = time_to_live;
    this.time_alive = 0;
    this.add_particle();

    this.addFrameListener(this.step);
  },
  step: function(t, dt){
    // translate the particle per the direction vector
    this.x += this.direction.x * dt;
    this.y += this.direction.y * dt;

    // increment the time_alive
    this.time_alive += dt;

    // translate the particle per the fade amount (for now, linearly through ttl)
    var percent_of_ttl = this.time_alive / this.time_to_live;
    this.color = [this.color[0], this.color[1], this.color[2], this._initial_color[3] - percent_of_ttl];
    this._particle.fill = this.color;
    
    // remove the particle if ttl is past
    if(this.time_alive > this.time_to_live){
      this.removeSelf();
    }
  },
  add_particle: function(){
    this._particle = new Rectangle(this.size, this.size, { fill: this.color });
    this.append(this._particle);
  }
});

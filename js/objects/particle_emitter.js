// A ParticleEmitter class, for the particle system.  -Josh Adams 2009
//
// A ParticleEmitter will have an x, a y, and a direction, initially.

ParticleEmitter = Klass(CanvasNode, {
  x: null,
  y: null,
  direction: null,
  counter: null,
  initialize: function(x, y, direction){
    CanvasNode.initialize.call(this);
    this.x = 0;
    this.y = 0;
    this._x = x;
    this._y = y;
    this.direction = direction;
  },
  emit_every_few: function(t, dt){
    this.counter += dt;
    this._x = this.root.mouseX;
    this._y = this.root.mouseY;
    if(this.counter > 5){
      this.counter = 0;
      var color1 = this.get_random_color();
      var color2 = this.get_random_color();
      var color3 = this.get_random_color();
      var rand_color = [color1, color2, color3, 1];
      var fire_color1 = [213, 20,  0, .7];
      var fire_color2 = [235, 146, 0, .7];
      var fire_color3 = [235, 212, 0, .7];
      var fire_colors = [fire_color1, fire_color2, fire_color3];
      var which_fire = parseInt(Math.random() * fire_colors.length) - 1;
      which_fire = (which_fire < 0) ? 0 : which_fire;
      this.emit_jittered_particle(4, fire_colors[which_fire]);
    }
  },
  emit_particle: function(num){
    white = [255, 255, 255, 1];
    dir = this.direction;
    size = 1;
    ttl = 2000;
    p = new Particle(this.x, this.y, white, dir, size, ttl);
    this.append(p);
  },
  jitter: function(){
    return Math.random();
  },
  emit_with_jitter: function(direction, color){
    var dir = new b2Vec2(direction.x, direction.y);
    dir.x += this.jitter() / 200;
    dir.y += this.jitter() / 200;
    color[0] += parseInt(this.jitter() * 32);
    color[1] += parseInt(this.jitter() * 32);
    color[2] += parseInt(this.jitter() * 32);
    var size_jitter = parseInt(this.jitter() * 4);
    var size = 1 + size_jitter;
    var ttl = 3000;
    var p = new Particle(this._x, this._y, color, dir, size, ttl);
    this.append(p);
  },
  emit_jittered_particle: function(num, color){
    if(color == undefined){
      var color = this.get_fire_color();
    }
    for(i=0;i<num;i++){
      this.emit_with_jitter(this.direction, color);
    }
  },
  reverse_emit_jittered_particle: function(num, color){
    if(color == undefined){
      var color = this.get_fire_color();
    }
    for(i=0;i<num;i++){
      reverse_direction = b2Math.MulFV(-1, this.direction);
      this.emit_with_jitter(reverse_direction, color);
    }
  },
  get_fire_color: function(){
    var fire_color1 = [213, 20,  0, .7];
    var fire_color2 = [235, 146, 0, .7];
    var fire_color3 = [235, 212, 0, .7];
    var fire_colors = [fire_color1, fire_color2, fire_color3];
    var which_fire = parseInt(Math.random() * fire_colors.length) - 1;
    which_fire = (which_fire < 0) ? 0 : which_fire;
    return fire_colors[which_fire];
  },
  get_random_color: function(){
    return parseInt(Math.random() * 255);
  }
});

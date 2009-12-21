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
    this.addFrameListener(this.emit_every_few);
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
      var fire_color1 = [213, 20,  0, 1];
      var fire_color2 = [235, 146, 0, 1];
      var fire_color3 = [235, 212, 0, 1];
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
  emit_jittered_particle: function(num, color){
    white = [255, 255, 255, 1];
    if(color == undefined){
      color = white;
    }
    for(i=0;i<num;i++){
      dir = new b2Vec2(this.direction.x, this.direction.y);
      var jitter1 = Math.random(1);
      var jitter2 = Math.random(1);
      var jitter3 = Math.random(1);
      var jitter4 = Math.random(1);
      var jitter5 = Math.random(1);
      dir.x = jitter1 / 20;
      dir.y = jitter2 / 20;
      color[0] += parseInt(jitter3 * 32);
      color[1] += parseInt(jitter4 * 32);
      color[2] += parseInt(jitter5 * 32);
      var size = 1;
      var ttl = 3000;
      var p = new Particle(this._x, this._y, color, dir, size, ttl);
      this.append(p);
    }
  },
  get_random_color: function(){
    return parseInt(Math.random() * 255);
  }
});

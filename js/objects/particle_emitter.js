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
    if(this.counter > 250){
      this.counter = 0;
      this.emit_jittered_particle(10);
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
  emit_jittered_particle: function(num){
    white = [255, 255, 255, 1];
    for(i=0;i<num;i++){
      dir = new b2Vec2(this.direction.x, this.direction.y);
      var jitter1 = Math.random(1);
      var jitter2 = Math.random(1);
      dir.x = jitter1 / 20;
      dir.y = jitter2 / 20;
      var size = 1;
      var ttl = 3000;
      var p = new Particle(this._x, this._y, white, dir, size, ttl);
      this.append(p);
    }
  }
});

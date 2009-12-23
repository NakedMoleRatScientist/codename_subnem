Bullet = Klass(CanvasNode, 
{
  x: null,
  y: null,
  size: 3,
  direction: null,
  color: [000,170,000],
  bullet: null,
  body: null,
  initialize: function(x_initial,y_initial, dir)
  {
    CanvasNode.initialize.call(this);
    x = x_initial;
    y = y_initial;
    body = this.create_bullet_body(x,y);
    direction = dir;
    this.add_bullet();
    this.addFrameListener(this.step)
  },
  step: function(t, dt)
  {
    this.x += direction.x * dt;
    this.y += direction.y * dt;
  },
  add_bullet: function()
  {
    bullet = new Circle(this.size, { fill: this.color});
    this.append(bullet);
  },
  create_bullet_body: function()
  {
    var bullet_def = new b2BoxDef();
    var world = physics_world.world;
    bullet_def.extentsSet(1,3);
    bullet_def.density = 0.3;
    
    var bullet_body = new b2BodyDef();
    bullet_body.addShape(bullet_def);
    bullet_body.Set(this.x = x);
    bullet_body.Set(this.y = y);
     
    return world.CreateBody(bullet_body);
  }
});
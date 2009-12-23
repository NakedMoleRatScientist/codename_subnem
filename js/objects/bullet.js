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
    body.isBullet = true;
    direction = dir;
    this.start_thrust();
    this.add_bullet();
    this.addFrameListener(this.step)
  },
  get_thrust_vec: function(amount)
  {
    var thrust_vec = new b2Mat22(new b2Vec2(1, 0), new b2Vec2(1, 1));
    thrust_vec.Set(body.m_rotation);
    var vec = b2Math.MulFV(amount, thrust_vec.col2);
    return vec;
  },
  start_thrust: function()
  {
    body.ApplyImpulse(direction,body.GetCenterPosition());
  },
  step: function(t, dt)
  {
    this.x += body.m_position.x;
    this.y += body.m_position.y;
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
    bullet_def.extents.Set(1,3);
    bullet_def.density = 0.3;
    
    var bullet_body = new b2BodyDef();
    bullet_body.AddShape(bullet_def);
    bullet_body.position.Set(this.x = x, this.y = y);
     
    return world.CreateBody(bullet_body);
  }
});
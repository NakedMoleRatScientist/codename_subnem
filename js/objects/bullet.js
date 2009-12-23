Bullet = Klass(CanvasNode, 
{
  x: null,
  y: null,
  _x: null,
  _y: null,
  size: 3,
  direction: null,
  color: [000,170,000],
  bullet: null,
  body: null,
  initialize: function(x_initial,y_initial, dir)
  {
    CanvasNode.initialize.call(this);
    this._x = x_initial;
    this._y = y_initial;
    this.x = 0;
    this.y = 0;
    this.body = this.create_bullet_body();
    this.body.isBullet = true;
    this.direction = dir;
    this.start_thrust();
    this.add_bullet();
    this.addFrameListener(this.step)
  },
  get_thrust_vec: function(amount)
  {
    var thrust_vec = new b2Mat22(new b2Vec2(1, 0), new b2Vec2(1, 1));
    thrust_vec.Set(this.body.m_rotation);
    var vec = b2Math.MulFV(amount, thrust_vec.col2);
    return vec;
  },
  start_thrust: function()
  {
    var vec = this.get_thrust_vec(1000);
    this.body.ApplyImpulse(vec,this.body.GetCenterPosition());
  },
  step: function(t, dt)
  {
    this.x = this.body.m_position.x - this._x;
    this.y = this.body.m_position.y - this._y;
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
    bullet_body.position.Set(this._x,this._y);
     
    return world.CreateBody(bullet_body);
  }
});
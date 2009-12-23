
WeaponDischarger = Klass(CanvasNode, {
  x: null,
  y: null,
  direction: null,
  counter: null,
  initialize: function(x , y , direction)
  {
    CanvasNode.initialize.call(this);
    this.x = 0;
    this.y = 0;
    this._x = x;
    this._y = y;
    this.direction = direction;
  },
  create_bullet: function()
  {
    b = new Bullet(this.x,this.y,this.direction);
    this.append(b)
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
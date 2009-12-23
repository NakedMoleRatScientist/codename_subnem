
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
  }
});
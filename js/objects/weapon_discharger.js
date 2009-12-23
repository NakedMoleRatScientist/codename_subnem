
WeaponDischarger = Klass(CanvasNode, {
  x: null,
  y: null,
  _x: null,
  _y: null,
  direction: null,
  counter: null,
  initialize: function(x , y , direction)
  {
    CanvasNode.initialize.call(this);
    this.x = 500;
    this.y = 500;
    this._x = x;
    this._y = y;
    this.direction = direction;
  },
  create_bullet: function()
  {
    b = new Bullet(this._x,this._y,this.direction);
    this.append(b)
  }
});
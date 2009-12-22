
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
  discharge: function(t,dt)
  {
    this.counter += dt;
    this._x = this.root.mouseX;
    this._y = this.root.mouseY;
    if(this.counter > 5){
      this.counter = 0;
      this.create_bullet();
    }
  },
  create_bullet: function()
  {
    b = new Bullet(x,y,direction);
    this.append(b)
  }
});
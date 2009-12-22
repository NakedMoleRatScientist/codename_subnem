
WeaponDischarger = Klass(CanvasNOde, {
  x: null,
  y: null,
  direction: null,
  counter: null,
  initialize: function(x , y , direction)
  {
    CanvasNOde.initialize.call(this);
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
}
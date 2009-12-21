Bullets = Klass(CanvasNode,
{
  x: null,
  y: null,
  size: 3,
  direction: null,
  color: [000,170,000],
  bullet: null,
  initialize: function(x_initial,y_initial, dir)
  {
    CanvasNode.iniitalize.call(this);
    x = x_initial;
    y = y_initial;
    direction = dir;
  }
  add_bullet: function()
  {
    bullet = new Circle(size, { fill: color});
    this.append(bullet);
  }
}
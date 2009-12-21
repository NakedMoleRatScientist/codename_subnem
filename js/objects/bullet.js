Bullet = Klass(CanvasNode,
{
  x: null,
  y: null,
  initialize: function(x_initial,y_initial)
  {
    CanvasNode.iniitalize.call(this);
    x = x_initial;
    y = y_initial;
  }
}
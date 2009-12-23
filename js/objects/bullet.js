Bullet = Klass(CanvasNode, 
{
  x: null,
  y: null,
  size: 3,
  direction: null,
  color: [000,170,000],
  bullet: null,
  initialize: function(x_initial,y_initial, dir)
  {
    CanvasNode.initialize.call(this);
    x = x_initial;
    y = y_initial;
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
  }
});
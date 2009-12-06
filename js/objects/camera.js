Camera = Klass(
{
  initialize: function(target,width,length)
  {
    this.target = target;
    this.width = width / 2;
    this.height = height / 2;
  }
  return_motion: function()
  {
    motion_x = this.target.x - width;
    motion_y = this.target.y - height;
    return {x: motion_x, y: motion_y};
  }
});  
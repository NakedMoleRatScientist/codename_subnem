Camera = Klass(
{
  initialize: function(target,width,length,size_x,size_y)
  {
    this.target = target;
    this.limit_x = size_x - width;
    this.limit_y = size_y - height;
    this.width = width / 2;
    this.height = height / 2;
  }
  return_motion: function()
  {
    motion_x = this.target.x - width;
    motion_y = this.target.y - height;
    return {x: motion_x, y: motion_y};
  }
  forward: function()
  {
    if (this.target.x > this.width)
    {
      width = -(this.target.x - this.width)
    }
  }
});  
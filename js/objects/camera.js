Camera = Klass(
{
  initialize: function(target,width,length,size_x,size_y)
  {
    this.target = target;
    this.limit_x = size_x - width;
    this.limit_y = size_y - height;
    this.width = width / 2;
    this.height = height / 2;
  },
  position_check: function()
  {
    if (this.target.x == this.width)
    {
      logger.info("excat positions");
    }
  },
  forward: function()
  {
    if (this.target.x > this.width)
    {
      width = -(this.target.x - this.width)
    }
  }
});  
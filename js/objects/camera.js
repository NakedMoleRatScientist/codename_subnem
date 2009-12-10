Camera = Klass(
{
  target: null,
  limit_x: null,
  limit_y: null,
  width: null,
  height: null,
  initialize: function(target,width,height,size_x,size_y)
  {
    this.target = target;
    this.limit_x = size_x - width;
    this.limit_y = size_y - height;
    this.width = width / 2;
    this.height = height / 2;
  },
  position_check: function()
  {
    if (this.target.x == this.width && this.target.y == this.height)
    {
      logger.info("Perfect!");
    }
    else
    {
      logger.info("Imperfect!");
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
Camera = Klass(
{
  target: null,
  limit_x: null,
  limit_y: null,
  fix_x: null,
  fix_y: null,
  initialize: function(player,width,height,size_x,size_y)
  {
    target = player;
    limit_x = size_x - width;
    limit_y = size_y - height;
    fix_x = width / 2;
    fix_y = height / 2;
  },
  position_check: function()
  {
    if (target._x == fix_x && target._y == fix_y)
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
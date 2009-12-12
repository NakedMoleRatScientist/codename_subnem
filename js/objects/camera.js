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
  x_position_check: function()
  {
    if (target.image.x == fix_x)
    {
      return true;
    }
    return false;
  },
  y_position_check: function()
  {
    if (target.image.y == fix_y)
    {
      return true;
    }
    return false;
  },
  log_position: function()
  {
    logger.info("x: " + target.ship.m_position.x + "; y: " + target.ship.m_position.y);
  },
  width_motion: function()
  {
    correction_x = 0;
    if (target.image.x < fix_x)
    {
      correction_x = -(target.image.x - fix_x);
    }
    else if (target.image.x > fix_x)
    {
      correction_x = (target.image.x - fix_x);
    }
    return correction_x;
  },
  get_motion: function()
  {
    move_x = 0;
    move_y = 0;
    this.log_position();
    if (this.x_position_check() == false)
    {
      move_x = this.width_motion();
      logger.info(move_x);
    }
    return {x: move_x, y: move_y};
  }
});  

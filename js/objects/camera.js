Camera = Klass(
{
  fix_x: null,
  fix_y: null,
  initialize: function(width,height)
  {
    fix_x = width / 2;
    fix_y = height / 2;
  },
  x_position_check: function(x)
  {
    if (x == fix_x)
    {
      return true;
    }
    return false;
  },
  y_position_check: function(y)
  {
    if (y == fix_y)
    {
      return true;
    }
    return false;
  },
  log_position: function()
  {
    logger.info("x: " + target.ship.m_position.x + "; y: " + target.ship.m_position.y);
  },
  width_motion: function(x)
  {
    correction_x = 0;
    correction_x = (fix_x - x);
    return correction_x;
  },
  height_motion: function(y)
  {
    correction_y = 0;
    correction_y = (fix_y - y);
    return correction_y;
  },
  get_motion: function(x,y)
  {
    move_x = 0;
    move_y = 0;
    if (this.x_position_check(x) == false)
    {
      move_x = this.width_motion(x);
    }
    if (this.y_position_check(y) == false)
    {
      move_y = this.width_motion(y);
    }
    return {offset_x: move_x, offset_y: move_y};
  }
});  

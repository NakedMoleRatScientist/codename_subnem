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
    logger.info("x: " + target.ship.m_position.x + "; y: " + target.ship.m_position.y);
    if (target.ship.m_position.x == fix_x && target.ship.position.y == fix_y)
    {
      return true;
    }
    return false;
  },
  width_motion: function()
  {
    correction_x = 0;
    if (target.ship.m_position.x > fix_x)
    {
      correction_x = -(target.ship.m_position.x - fix_x);
    }
    else if (target.ship.m_position.x < fix_x)
    {
      correction_x = (target.ship.m_position.x - fix_x);
    }
    return correction_x;
  },
  get_motion: function()
  {
    move_x = 0;
    move_y = 0;
    if (position_check == false)
    {
      move_x = width_motion();
    }
    return (x: move_x, y: move_y);
  }
});  

ViewPort = Klass(CanvasNode,
{
  x: 0,
  y: 0,
  entities: null,
  initialize: function()
  {
  },
  move: function(motion)
  {
    this.x += motion.offset_x;
    this.y += motion.offset_y;
  },
  appendObject: function(object)
  {
    this.append(object);
  },
  appendObjectGroup: function(group)
  {
    logger.info("Are we here?");
    for (n = 0; n < group.length; n++)
    {
      logger.info(group[n].image.x);
      logger.info(group[n].image.y);
      this.appendObject(group[n]);
    }
  }
});
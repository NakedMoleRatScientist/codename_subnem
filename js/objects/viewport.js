ViewPort = Klass(CanvasNode,
{
  x: 0,
  y: 0,
  initialize: function()
  {
    CanvasNode.initialize.call(this);
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
    for (n = 0; n < group.length; n++)
    {
      logger.info(group[n].image.x);
      logger.info(group[n].image.y);
      this.appendObject(group[n]);
    }
  }
});
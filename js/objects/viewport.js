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
    for (n = 0; n < entities.length; n++)
    {
      entities[n].image.x += motion.offset_x;
      entities[n].image.y += motion.offset_y;
    }
  },
  appendObject: function(object)
  {
    this.append(object);
  }
});
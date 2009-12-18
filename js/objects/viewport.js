ViewPort = Klass(CanvasNode,
{
  x: 0,
  y: 0,
  entities: null,
  initialize: function()
  {
  },
  add: function(entity)
  {
    entities.push(entity);
  },
  move: function(motion)
  {
    for (n = 0; n < entities.length; n++)
    {
      entities[n].image.x += motion.offset_x;
      entities[n].image.y += motion.offset_y;
    }
  },
  appendToCanvas: function()
  {
    for (n = 0; n < entities.length; n++)
    {
      this.append(entities[n]);
    }
         
  }
});
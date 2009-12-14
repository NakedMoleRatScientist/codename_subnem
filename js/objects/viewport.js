ViewPort = Klass(
{
  entities: null,
  initialize: function()
  {
  },
  add: function(entity)
  {
    entities.push(entity);
  }
  move: function(motion)
  {
    for (n = 0; n < entities.length; n++)
    {
      entities[n].image.x += motion.offset_x;
      entities[n].image.y += motion.offset_y;
    }
  }
}
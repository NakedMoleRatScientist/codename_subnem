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
  }
});
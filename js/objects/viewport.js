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
    this.x = motion.offset_x;
    this.y = motion.offset_y;
  },
  appendObjectGroup: function(group)
  {
    for (n = 0; n < group.length; n++)
    {
      this.append(group[n]);
    }
  }
});
/* Each maps are measured in pixels. Everything in the map have an exact coordinate, centered.

For some purpose, it may be helpful to use a more general coordinate system to refer to regions of space. We called them quadrants, which are 1000 by 1000 pixels in size. They are each located in a grid. For example, an object in [3023,4442] is said to be in quadrant 3,4.

The quadrant system is likely to be used for large scale objects, such as planets, carrier starships, and various large bodies.

Setting the map size meant the number of quadrants by hieght and width.
*/
Map = Klass (
{
  initialize: function(width,height)
  {
    this.x = width * 1000;
    this.y = height * 1000;
    this.objects = [];
  },
  add: function(object)
  {
    this.objects.append(object);
  },
  move: function(motion)
  {
    for (int n = 0; n < this.objects.length; n ++)
    {
      objects.x += motion.x;
      objects.y += motion.y;
    }
  }
});
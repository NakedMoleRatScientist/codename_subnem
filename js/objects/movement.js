function Movement(physical_object,image)
{
    this.physical_object = physical_object;
    this.image = image;
    this.act = function()
    {
      location = this.physical_object.convert_to_cartesian();
      this.image.x += location.x;
      this.image.y += location.y;
    }
}
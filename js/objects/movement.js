function Movement(physical_object,image)
{
    this.physical_object = physical_object;
    this.image = image
    move = function()
    {
      this.image += this.physical_object.convert_to_cartesian();
    }
}
function PhysicalObject(mass , speeed)
{
  this.mass = mass;
  this.velocity = velocity;
  this.inertia = mass * velocity;
  this.direction = 0;
  this.radius = 1;
  //Convert polar coordinates into retangular ones
  covert_to_cartesian = function()
  {
    x = this.radius * Math.cosine(this.direction);
    y = this.radius * Math.sine(this.direction);
    return {x: x, y: y}
  }
}
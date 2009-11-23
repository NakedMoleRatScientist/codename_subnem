function PhysicalObject(mass , velocity)
{
  this.mass = mass;
  this.velocity = velocity;
  this.inertia = this.calculate_inertia;
  this.direction = 0;
  //Convert polar coordinates into retangular ones
  covert_to_cartesian = function()
  {
    x = this.velocity * Math.cosine(this.direction);
    y = this.velocity * Math.sine(this.direction);
    return {x: x, y: y}
  }
  calculate_inertia = function()
  {
    return this.mass * this.velocity
  }
}
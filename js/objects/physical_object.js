function PhysicalObject(mass, velocity)
{
  this.mass = mass;
  this.velocity = velocity;
  this.inertia = this.calculate_inertia;
  this.angle = 0;
  this.x = 0;
  this.y = 0;
  this.turn_step = 1;
  this.accel_step = 0.01;

  //Convert polar coordinates into retangular ones
  this.rotate_to = function(angle){
    this.angle = (angle / 180) * Math.PI;
  }

  this.angle_in_degrees = function(){
    return (this.angle * 180) / Math.PI;
  }

  this.convert_to_cartesian = function()
  {
    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);
    return {x: this.x, y: this.y, angle: this.angle}
  }
  this.calculate_inertia = function()
  {
    return this.mass * this.velocity
  }
  this.turn_left = function()
  {
    this.rotate_by(-1 * this.turn_step);
  }
  this.turn_right = function()
  {
    this.rotate_by(this.turn_step);
  }
  this.rotate_by = function(amount){
    logger.info("angle: " + this.angle_in_degrees());
    logger.info("step: " + amount);
    this.rotate_to(this.angle_in_degrees() + amount);
  }
  this.accelerate = function()
  {
    this.accelerate_by(this.accel_step);
  }
  this.decelerate = function()
  {
    this.accelerate_by(-1 * this.accel_step);
  }
  this.accelerate_by = function(amount){
    this.velocity += amount;
    logger.info("velocity: " + this.velocity);
  }
}

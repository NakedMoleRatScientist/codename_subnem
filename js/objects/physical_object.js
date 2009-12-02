PhysicalObject = Klass({
  initialize: function(mass){
    // mass is given in kg units
    this.mass = mass;
    // acceleration is given in m/s**2
    this.acceleration = 0;
    // velocity is given in m/s
    this.velocity = 0;
    this.inertia = this.calculate_inertia;
    this.angle = 0;
    this.x = 0;
    this.y = 0;
    this.turn_step = 2;
    this.accel_step = 0.01;
  },
  rotate_to: function(angle){
    //Convert polar coordinates into retangular ones
    angle = (360 + angle) % 360;
    this.angle = (angle / 180) * Math.PI;
  },
  angle_in_degrees: function(){
    var ang = (360 + this.angle) % 360;
    return (ang * 180) / Math.PI;
  },
  convert_to_cartesian: function(){
    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);
    return {x: this.x, y: this.y, angle: this.angle};
  },
  calculate_inertia: function(){
    return this.mass * this.velocity;
  },
  turn_left: function(){
    this.rotate_by(-1 * this.turn_step);
  },
  turn_right: function(){
    this.rotate_by(this.turn_step);
  },
  rotate_by: function(amount){
    logger.info("angle: " + this.angle_in_degrees());
    logger.info("step: " + amount);
    this.rotate_to(this.angle_in_degrees() + amount);
  },
  accelerate: function(){
    this.accelerate_by(this.accel_step);
  },
  decelerate: function(){
    this.accelerate_by(-1 * this.accel_step);
  },
  accelerate_by: function(amount){
    this.velocity += amount;
    logger.info("velocity: " + this.velocity);
  }
});

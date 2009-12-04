// TODO: The thruster should have mass, and the assembly's mass should be the total mass of the ship
Thruster = Klass({
  thrust: null,
  max_thrust: 200, // initial guess...
  min_thrust: 0,
  thrust_increment: 5,
  initialize: function(){
    // thrust is in newtons
    this.thrust = 0;
  },
  increase_thrust: function(){
    var _the_thrust = this.thrust;
    if(this.thrust < this.max_thrust){
      _the_thrust += this.thrust_increment;
    }
    this.thrust = Math.min(_the_thrust, this.max_thrust);
  },
  decrease_thrust: function(){
    var _the_thrust = this.thrust;
    if((this.thrust > this.min_thrust)){
      _the_thrust -= this.thrust_increment;
    }
    this.thrust = Math.max(_the_thrust, this.min_thrust);
  },
  get_force: function(){
    return this.thrust;
  }
});

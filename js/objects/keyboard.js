Keyboard = Klass({
  handle_keypress: function(t, dt){
    if(this.root.keys.left){
      //this.physical_object.turn_left();
      //hud.rotation_gauge.text = this.physical_object.angle_in_degrees();
    }
    if(this.root.keys.right){
      //this.physical_object.turn_right();
      //hud.rotation_gauge.text = this.physical_object.angle_in_degrees();
    }
    if(this.root.keys.up){
      //this.physical_object.accelerate();
      //this.ship.thruster.increase_thrust();
      //hud.thruster_gauge.text = this.ship.thruster.thrust;
      //hud.velocity_gauge.text = this.physical_object.velocity;
    }
    if(this.root.keys.down){
      logger.info("keypress");
      //this.physical_object.decelerate();
      //this.ship.thruster.decrease_thrust();
      //hud.thruster_gauge.text = this.ship.thruster.thrust;
      //hud.velocity_gauge.text = this.physical_object.velocity;
    }
    //var _location = this.physics_proxy.GetCenterPosition();
    //var _rotation = this.physics_proxy.GetRotation();
    //this.x = _location.x;
    //this.y = _location.y;
    //this.rotation = _rotation - (Math.PI/2);
  }
});

Keyboard = Klass({
  initialize: function(){
  },
  frame_listener: function(t, dt){
    if(this.root.keys.left){
      player_ship.rotate(-1);
    }
    if(this.root.keys.right){
      player_ship.rotate(1);
    }
    if(this.root.keys.up){
      player_ship.thrust(1);
    }
    if(this.root.keys.down){
      player_ship.thrust(-1);
    }
  }
});

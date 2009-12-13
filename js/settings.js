logger.info("loading settings");

Settings = Klass(Object, {
  width: 1000,
  height: 800,
  //player_ship_image_path: "assets/game/fighter_x1/main.png",
  player_ship_image_path: "assets/game/javelin/javelin.png",
  //asteroid_image_path: "assets/game/asteroid/asteroid.png", // this doesn't exist yet
  initialize: function(){
  }
});

var settings = new Settings();

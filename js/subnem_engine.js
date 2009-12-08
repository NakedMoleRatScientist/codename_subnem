function initializeSubnemEngine(){
  logger.info("initializing subnem");

  var c = E.canvas(settings.width, settings.height);          // create a new canvas element
  canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
  physics_world = new PhysicsWorld;
  logger.info("successfully created canvas");

  //canvas.fill = [0,0,0,0.8];           // set the Canvas background to 0.8 opacity black
  canvas.clear = true;                 // don't show previous frame

  main_scene = new Rectangle(settings.width, settings.height);
  main_scene.fill = [0, 0, 0, 1];
  main_scene.addFrameListener(stepPhysicsWorld);
  canvas.append(main_scene);

  overlay_scene = new Rectangle(settings.width, settings.height);
  canvas.append(overlay_scene);

  // Add the Hud
  logger.info("setting up HUD");
  hud = new Hud;
  main_scene.append(hud);

  main_scene.when("keydown", function (ev) {
      ev.preventDefault();
    }
  );
  main_scene.when("keypress", function (ev) {
      ev.preventDefault();
    }
  );
  main_scene.when("keyup", function (ev) {
      logger.info("up");
      ev.preventDefault();
    }
  );
  logger.info("successfully set up keybindings");

  // Add the starfields
  //var starfield = new Starfield(settings.width, settings.height);
  //canvas.append(starfield);

  player_ship = new PlayerShipBox2D(350, 350);
  canvas.append(player_ship);
  document.body.appendChild(c);         // append the canvas element to document body

  logger.info("finished");
}

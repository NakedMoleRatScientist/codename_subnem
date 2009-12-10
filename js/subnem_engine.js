function initializeSubnemEngine(){
  logger.info("initializing subnem");

  var c = E.canvas(settings.width, settings.height);          // create a new canvas element
  var canvas = new Canvas(c);          // create a CAKE [Canvas] for the element

  var player = new Player();
  var map = new Map(30,30);

  logger.info("successfully created canvas");
  
  canvas.fill = [0,0,0,0.8];           // set the Canvas background to 0.8 opacity black
  canvas.clear = true; // don't show previous frame
  main_scene = new Rectangle(settings.width, settings.height);
  main_scene.fill = [0,0,0,1];
  canvas.append(main_scene);
  canvas.when("keydown", function (ev) {
      ev.preventDefault();
    }
  );
  canvas.when("keypress", function (ev) {
      ev.preventDefault();
    }
  );
  canvas.when("keyup", function (ev) {
      ev.preventDefault();
    }
  );
  logger.info("successfully set up keybindings");

  // Add the Hud
  hud = new Hud;
  canvas.append(hud);

  // Add the starfields
  var starfield = new Starfield(settings.width, settings.height);
  canvas.append(starfield);

  // Add the player
  canvas.append(player.image);

  document.body.appendChild(c);        // append the canvas element to document body

  logger.info("finished");
}

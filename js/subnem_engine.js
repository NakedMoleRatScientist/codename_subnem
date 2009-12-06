function initializeSubnemEngine(){
  logger.info("initializing subnem");

  var c = E.canvas(settings.width, settings.height);          // create a new canvas element
  var canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
  logger.info("successfully created canvas");

  canvas.fill = [0,0,0,0.8];           // set the Canvas background to 0.8 opacity black
  canvas.clear = true;                 // don't show previous frame
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
  var map = Map(30,30);
  // Add the Hud
  hud = new Hud;
  canvas.append(hud);

  // Add the starfields
  var starfield = new Starfield(settings.width, settings.height);
  canvas.append(starfield);

  // Add the player
  var player = new Player();
  canvas.append(player.image);

  document.body.appendChild(c);        // append the canvas element to document body

  logger.info("finished");
}

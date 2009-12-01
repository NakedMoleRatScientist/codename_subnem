function initializeSubnemEngine(){
  console.log("initializing subnem");

  var c = E.canvas(500, 500);          // create a new canvas element
  var canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
  console.log("successfully created canvas");

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
  console.log("successfully set up keybindings");

  starfield.appendLayersToCanvas(canvas);
  canvas.append(player.image);

  document.body.appendChild(c);        // append the canvas element to document body

  console.log("finished");
}

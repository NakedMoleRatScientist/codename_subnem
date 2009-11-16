function initializeSubnemEngine(){
   var c = E.canvas(500, 500);          // create a new canvas element
   var canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
   canvas.fill = [255,255,255,0.8];     // set the Canvas background to 0.8 opacity white
   canvas.clear = true;                 // don't show previous frame
   canvas.append(player_ship);
   document.body.appendChild(c);        // append the canvas element to document body
}

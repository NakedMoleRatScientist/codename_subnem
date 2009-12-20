function initializeParticleTest(){
  logger.info("initializing particle test");

  var c = E.canvas(settings.width, settings.height);          // create a new canvas element
  canvas = new Canvas(c);          // create a CAKE [Canvas] for the element
  logger.info("successfully created canvas");

  //canvas.fill = [0,0,0,0.8];           // set the Canvas background to 0.8 opacity black
  canvas.clear = true;                 // don't show previous frame

  main_scene = new Rectangle(settings.width, settings.height);
  main_scene.fill = [0, 0, 0, 1];
  canvas.append(main_scene);

  emitter = new ParticleEmitter(200, 200, new b2Vec2(.05, .01)); // create a new emitter, set in a given location and direction
  emitter.emit_particle(1); // emit a single particle
  emitter.emit_jittered_particle(1); // emit a single jittered particle
  emitter.emit_jittered_particle(10); // emit a lot of jittered particles
  main_scene.append(emitter);

  document.body.appendChild(c);         // append the canvas element to document body

  logger.info("finished");
}

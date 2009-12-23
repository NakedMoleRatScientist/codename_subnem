PlayerShipBox2D = Klass(CanvasNode, {
  _x: null,
  _y: null,
  image_file: Object.loadImage(settings.player_ship_image_path),
  image: null,
  ship: null,
  rotate_increment: null,
  particle_emitter: null,
  weapon_discharger: null,
  initialize: function(x, y, camera, viewport){
    CanvasNode.initialize.call(this);
    this._x = x;
    this._y = y;
    this.camera = camera;
    this.viewport = viewport;
    this.ship = this.create_ship(this._x, this._y);
    this.ship.isBullet = true; // This doesn't work, it seems :(
    this.image = new ImageNode(this.image_file);
    this.image.centered = true;
    this.image.x = this._x;
    this.image.y = this._y;
    this.rotate_increment = .1;
    this.particle_emitter = new ParticleEmitter(0, 0, new b2Vec2(0, 0));
    this.weapon_discharger = new WeaponDischarger(0,0, new b2Vec2(0, 0));
    this.image.root_object = this;
    this.image.addFrameListener(this.sync_image_with_ship);
    this.addFrameListener(this.sync_particle_emitter_with_ship);
    this.addFrameListener(this.sync_weapon_discharger_with_ship);
    this.append(this.particle_emitter);
    this.viewport.append((this.weapon_discharger));
    this.append(this.image);
    this.thrust(5000);
  },
  create_ship: function(){
    logger.info("== creating ship ==");
    var ship_def = new b2BoxDef();
    var world = physics_world.world;
    ship_def.extents.Set(5, 20);
    ship_def.density = 0.5;
    logger.info(ship_def);

    var ship_body = new b2BodyDef();
    ship_body.AddShape(ship_def);
    ship_body.position.Set(this._x, this._y);

    logger.info(ship_body);
    logger.info("== done creating ship ==");
    return world.CreateBody(ship_body);
  },
  get_thrust_vec: function(amount){
    var thrust_vec = new b2Mat22(new b2Vec2(1, 0), new b2Vec2(1, 1));
    thrust_vec.Set(this.ship.m_rotation);
    var vec = b2Math.MulFV(amount, thrust_vec.col2);
    return vec;
  },
  thrust: function(amount){ // 1 is forward, -1 is backwards
    var vec = this.get_thrust_vec(amount);
    this.ship.ApplyImpulse(vec, this.ship.GetCenterPosition());
    var small_amount = parseInt(amount / 2500);// we thrust by 5000 typically, and this is way too many particles to emit, geez...
    if(amount > 0){
      this.particle_emitter.emit_jittered_particle(1 * small_amount);
    }else{
      this.particle_emitter.reverse_emit_jittered_particle(-1 * small_amount);
    }
  },
  shoot: function()
  {
    this.weapon_discharger.create_bullet();
  },
  sync_image_with_ship: function(t, dt){
    // sync_image_with_ship is called from the context of the Image itself, so here we're modifying the image's x and y, not the playership object
    this.x = this.root_object.ship.m_position.x;
    this.y = this.root_object.ship.m_position.y;
    this.rotation = this.root_object.image_rotation();
    //Camera offset
    motion = this.root_object.camera.get_motion(this.x,this.y);
    this.x += motion.offset_x;
    this.y += motion.offset_y;
    this.root_object.viewport.move(motion);
  },
  sync_particle_emitter_with_ship: function(t, dt){
    var vec = this.get_thrust_vec(.05);
    vec = b2Math.MulFV(-1, vec);
    this.particle_emitter.x = this.image.x;
    this.particle_emitter.y = this.image.y;
    this.particle_emitter.direction = vec;
  },
  sync_weapon_discharger_with_ship: function(t , dt)
  {
    var vec = this.get_thrust_vec(.05);
    vec = b2Math.MulFV(1, vec);
    this.weapon_discharger._x = this.ship.m_position.x;
    this.weapon_discharger._y = this.ship.m_position.y;
    this.weapon_discharger.direction = vec;
  },
  image_rotation: function(){
    // compensate for the image being in a funky orientation by default...
    return this.ship.m_rotation;
  },
  // FIXME: rotate_to should really exist on a Ship object...rather than the ship object being implicit in that body
  rotate: function(direction){ // direction: 1 is clockwise, -1 is counterclockwise
    this.ship.m_rotation += (direction * this.rotate_increment);
    this.ship.m_angularVelocity = 0;
    //this.ship.ApplyTorque(500000 * direction);
  }
});

PlayerShipBox2D = Klass(CanvasNode, {
  _x: null,
  _y: null,
  image_file: Object.loadImage(settings.player_ship_image_path),
  image: null,
  ship: null,
  thruster: null,
  initialize: function(x, y){
    CanvasNode.initialize.call(this);
    this._x = x;
    this._y = y;
    this.ship = this.create_ship(this._x, this._y);
    this.image = new ImageNode(this.image_file);
    this.image.centered = true;
    this.image.x = this._x;
    this.image.y = this._y;
    console.log(this.image);
    this.thruster = new Thruster();
    this.thrust();
    this.image.root_object = this;
    this.image.addFrameListener(this.sync_image_with_ship);
    this.append(this.image);
  },
  create_ship: function(){
    logger.info("== creating ship ==");
    var ship_def = new b2BoxDef();
    var world = physics_world.world;
    ship_def.extents.Set(20, 5);
    ship_def.density = 0.5;
    console.log(ship_def);

    var ship_body = new b2BodyDef();
    ship_body.AddShape(ship_def);
    ship_body.position.Set(this._x, this._y);

    console.log("2");
    console.log(ship_body);
    logger.info("== done creating ship ==");
    return world.CreateBody(ship_body);
  },
  thrust: function(){
    var vec = new b2Vec2(20000, 3000);
    this.ship.ApplyImpulse(vec, this.ship.GetCenterPosition());
  },
  sync_image_with_ship: function(t, dt){
    // sync_image_with_ship is called from the context of the Image itself, so here we're modifying the image's x and y, not the playership object
    this.x = this.root_object.ship.m_position.x;
    this.y = this.root_object.ship.m_position.y;
    this.rotation = this.root_object.ship.m_rotation;
  }
});

Asteroid = Klass(CanvasNode, {
  _x: null,
  _y: null,
  image_file: 'asset/game/asteroid.png',
  image: null,
  physics_proxy: null,
  initialize: function(x, y){
    CanvasNode.initialize.call(this);
    this._x = x;
    this._y = y;
    this.image = new ImageNode(this.image_file);
    this.image.x = this._x;
    this.image.y = this._y;
    this.append(this.image);
    this.physics_proxy = this.create_asteroid(this._x, this._y);
  },
  create_asteroid: function(x, y){
    logger.info("== creating asteroid ==");
    var asteroid_def = new b2BoxDef();
    var world = physics_world.world;
    asteroid_def.extents.Set(2, 2);
    logger.info("setup asteroid");

    var asteroid_body = new b2BodyDef();
    asteroid_body.AddShape(asteroid_def);
    asteroid_body.position.Set(this._x, this._y);
    logger.info("heyooo");

    return world.CreateBody(asteroid_body);
  }
});

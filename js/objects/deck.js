Deck = Klass(CanvasNode, {
  _x: null,
  _y: null,
  image_file: Object.loadImage(settings.deck_image_path),
  image: null,
  physics_proxy: null,
  initialize: function(x, y){
    CanvasNode.initialize.call(this);
    this._x = x;
    this._y = y;
    this.image = new ImageNode(this.image_file);
    this.image.x = this._x;
    this.image.y = this._y;
    this.image.centered = true;
    this.append(this.image);
    this.physics_proxy = this.create_deck(this._x, this._y);
  },
  create_deck: function(x, y){
    logger.info("== creating deck ==");
    var deck_def = new b2BoxDef();
    var world = physics_world.world;
    deck_def.extents.Set(2, 2);
    logger.info("setup deck");

    var deck_body = new b2BodyDef();
    asteroid_body.AddShape(deck_def);
    asteroid_body.position.Set(this._x, this._y);
    logger.info("heyooo");

    return world.CreateBody(deck_body);
  }
});

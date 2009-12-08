PhysicsWorld = Klass({
  initialize: function(){
    console.log("initializing physics world.");
    this.world = this.createWorld();
  },
  createWorld: function(){
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    var gravity = new b2Vec2(0, 0);
    var doSleep = true;
    var world = new b2World(worldAABB, gravity, doSleep);
    this.createGround(world);
    this.createBox(world, 50, 50, 10, settings.height);
    this.createBox(world, settings.width - 50, 50, 10, settings.height);
    return world;
  },
  createGround: function(world) {
    var groundSd = new b2BoxDef();
    groundSd.extents.Set(settings.width, 10);
    groundSd.restitution = 0.2;
    var groundBd = new b2BodyDef();
    groundBd.AddShape(groundSd);
    groundBd.position.Set(0, settings.height-50);
    return world.CreateBody(groundBd);
  },
  createBox: function(world, x, y, width, height, fixed) {
    if (typeof(fixed) == 'undefined') fixed = true;
    var boxSd = new b2BoxDef();
    if (!fixed) boxSd.density = 1.0;
    boxSd.extents.Set(width, height);
    var boxBd = new b2BodyDef();
    boxBd.AddShape(boxSd);
    boxBd.position.Set(x,y);
    return world.CreateBody(boxBd);
  }
});

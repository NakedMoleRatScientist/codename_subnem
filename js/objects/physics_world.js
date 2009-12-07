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
    return world;
  }
});

function drawPhysicsWorld(t, dt) {
  var world = physics_world.world;
	//for (var j = world.m_jointList; j; j = j.m_next) {
		//drawJoint(j, context);
	//}
	for (var b = world.m_bodyList; b; b = b.m_next) {
		for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
			drawShape(s);
		}
	}
}
function drawJoint(joint, context) {
	var b1 = joint.m_body1;
	var b2 = joint.m_body2;
	var x1 = b1.m_position;
	var x2 = b2.m_position;
	var p1 = joint.GetAnchor1();
	var p2 = joint.GetAnchor2();
	context.strokeStyle = '#00eeee';
	context.beginPath();
	switch (joint.m_type) {
	case b2Joint.e_distanceJoint:
		context.moveTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		break;

	case b2Joint.e_pulleyJoint:
		// TODO
		break;

	default:
		if (b1 == world.m_groundBody) {
			context.moveTo(p1.x, p1.y);
			context.lineTo(x2.x, x2.y);
		}
		else if (b2 == world.m_groundBody) {
			context.moveTo(p1.x, p1.y);
			context.lineTo(x1.x, x1.y);
		}
		else {
			context.moveTo(x1.x, x1.y);
			context.lineTo(p1.x, p1.y);
			context.lineTo(x2.x, x2.y);
			context.lineTo(p2.x, p2.y);
		}
		break;
	}
	context.stroke();
}
function drawShape(shape) {
	switch (shape.m_type) {
	case b2Shape.e_circleShape:
		{
      /*
			var circle = shape;
			var pos = circle.m_position;
			var r = circle.m_radius;
			var segments = 16.0;
			var theta = 0.0;
			var dtheta = 2.0 * Math.PI / segments;
			// draw circle
			context.moveTo(pos.x + r, pos.y);
			for (var i = 0; i < segments; i++) {
				var d = new b2Vec2(r * Math.cos(theta), r * Math.sin(theta));
				var v = b2Math.AddVV(pos, d);
				context.lineTo(v.x, v.y);
				theta += dtheta;
			}
			context.lineTo(pos.x + r, pos.y);
	
			// draw radius
			context.moveTo(pos.x, pos.y);
			var ax = circle.m_R.col1;
			var pos2 = new b2Vec2(pos.x + r * ax.x, pos.y + r * ax.y);
			context.lineTo(pos2.x, pos2.y);
      */
		}
		break;
	case b2Shape.e_polyShape:
		{
			var poly = shape;
      var vertex_array = [];
      poly.m_vertices.each(function(vertex){
        vertex_array.push(vertex.x);
        vertex_array.push(vertex.y);
      });
      var cakePoly = new Polygon(vertex_array, { fill: [255, 255, 255, 1]});
      cakePoly.x = poly.m_position.x;
      cakePoly.y = poly.m_position.y;
      overlay_scene.append(cakePoly);
      cakePoly.rotation = poly.m_body.m_rotation;
		}
		break;
	}
}

function stepPhysicsWorld(cnt) {
  var stepping = false;
  var timeStep = 1.0/60;
  var iteration = 2;
  var world = physics_world.world;
  var ctx = canvas.getContext('2d');
  var canvasElm = canvas.canvas;
  var canvasWidth = parseInt(canvasElm.width);
  var canvasHeight = parseInt(canvasElm.height);
  var canvasTop = parseInt(canvasElm.style.top);
  var canvasLeft = parseInt(canvasElm.style.left);

  world.Step(timeStep, iteration);
  overlay_scene.removeAllChildren();
  //ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawPhysicsWorld(world, ctx);
}

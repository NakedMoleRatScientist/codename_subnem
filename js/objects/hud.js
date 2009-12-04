Hud = Klass(CanvasNode, {
  velocity_display: null,
  x: 0,
  y: 0,
  velocity_gauge_x: 20,
  velocity_gauge_y: 20,
  velocity_gauge: null,
  rotation_gauge_x: settings.width - 80,
  rotation_gauge_y: 20,
  rotation_gauge: null,
  thruster_gauge_x: 20,
  thruster_gauge_y: settings.height - 20,
  thruster_gauge: null,
  initialize: function(){
    CanvasNode.initialize.call(this);
    this.draw_velocity_gauge();
    this.draw_rotation_gauge();
    this.draw_thruster_gauge();
  },
  draw_velocity_gauge: function(){
    this.velocity_gauge = new TextNode("Velocity", { fill: [255, 0, 0, 1] });
    this.velocity_gauge.x = this.velocity_gauge_x;
    this.velocity_gauge.y = this.velocity_gauge_y;
    this.append(this.velocity_gauge);
  },
  draw_rotation_gauge: function(){
    this.rotation_gauge = new TextNode("Rotation", { fill: [255, 0, 0, 1] });
    this.rotation_gauge.x = this.rotation_gauge_x;
    this.rotation_gauge.y = this.rotation_gauge_y;
    this.append(this.rotation_gauge);
  },
  draw_thruster_gauge: function(){
    this.thruster_gauge = new TextNode("Thruster", { fill: [255, 0, 0, 1] });
    this.thruster_gauge.x = this.thruster_gauge_x;
    this.thruster_gauge.y = this.thruster_gauge_y;
    this.append(this.thruster_gauge);
  }
});

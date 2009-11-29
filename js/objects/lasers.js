function Laser(x, y, scene){
  this.x = x;
  this.y = y;
  this.scene = scene;
  this.angle = 0;
  this.rotate_to = function(angle){
    this.angle = (angle / 180) * Math.PI;
  }
  this.fire = function(){
    var _beam = new Circle(2,
      {
        fill: [192, 192, 192, 1],
        stroke: "gray"
      }
    );
    _beam.x = this.x;
    _beam.y = this.y;
    _beam.angle = this.angle;
    _beam.addFrameListener(function(t){
      var k = 3;
      if(t < 5000){
        this.x += k * Math.cos(this.angle);
        this.y += k * Math.sin(this.angle);
      }
    });
    this.scene.append(_beam);
  }
}

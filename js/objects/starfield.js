_starfield_image_one = Object.loadImage('assets/game/starfield_1.png');
_starfield_image_two = Object.loadImage('assets/game/starfield_2.png');
_starfield_image_three = Object.loadImage('assets/game/starfield_3.png');
starfield_one = new ImageNode(_starfield_image_one);
clone_one = new ImageNode(_starfield_image_one);
clone_one.x = -500
starfield_two = new ImageNode(_starfield_image_two);
clone_two = new ImageNode(_starfield_image_two);
clone_two.x = -500
starfield_three = new ImageNode(_starfield_image_three);
clone_three = new ImageNode(_starfield_image_three);
clone_three.x = -500

function move(object, speed)
{
  object.x += speed;
  if (object.x > 500)
  {
    object.x = -500;
  }
}
starfield_one.addFrameListener(function(t)
{
  move(this,1);
});
starfield_two.addFrameListener(function(t)
{
  move(this,2);
});
starfield_three.addFrameListener(function(t) 
{
  move(this,3);
});
clone_one.addFrameListener(function(t)
{
  move(this,1);
});
clone_two.addFrameListener(function(t)
{
  move(this,2);
});
clone_three.addFrameListener(function(t)
{
  move(this,3);
});
function Star(x , y, size, color)
{
  this.c = new Circle(size,
    { fill: color });
  this.c.x = x
  this.c.y = y
}

function random(n)
{
  return (Math.floor(Math.random() * n + 1));
}

function Starfield(x,y) {
  this.height = y / 10;
  this.width = x / 10;
  this.size = this.height * this.width / 100;
  this.layer_one = new Array();
  this.layer_two = new Array();
  this.layer_three = new Array();
  this.random_colors = function()
  {
    choice = random(3);
    switch (choice)
    {
	    case 1: color = [255,255,255,1]; break;
	    case 2: color = [0,255,255,1]; break;
	    case 3: color = [255,255,0,1]; break;
    }
    return color;
  }
  this.addFrameListener = function(star,  speed)
  {
    star.c.addFrameListener(function(t)
    {
      move(this,speed);
    });
  }
  this.random_generate = function()
  {
    this.layer_one = this.random_layer();
    this.layer_one = this.addFrameListenerToLayer(this.layer_one,1);
    this.layer_two = this.random_layer();
    this.layer_one = this.addFrameListenerToLayer(this.layer_two,2);
    this.layer_three = this.random_layer();
    this.layer_three = this.addFrameListenerToLayer(this.layer_three,3);
  }
  this.random_layer = function()
  {
    layer = new Array();
    for (i = 0; i < 50; i++)
    {
      width = this.width * Math.random();
      height = this.height * Math.random();
      size = this.size * random(3);
      layer.push(new Star(width,height,size,this.random_colors()));
    }
    return layer;
  }
  this.addFrameListenerToLayer = function(layer, speed)
  {
    for (i = 0; i < layer.length; i++)
    {
      this.addFrameListener(layer[i],speed);
    }
    return layer;
  }
  this.appendLayerToCanvas = function(layer,canvas)
  {
    for (i = 0; i < layer.length; i++)
    {
      canvas.append(layer[i]);
    }
  }
}

starfield = new Starfield(500,500);
starfield.random_generate();

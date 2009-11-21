function move(object, speed)
{
  object.x += speed;
  if (object.x > 500)
  {
    object.x = -500;
  }
}

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
  this.height = y;
  this.width = x;
  this.size = this.height * this.width / 400000;
  this.layer_one = new Array();
  this.layer_two = new Array();
  this.layer_three = new Array();
  this.random_colors = function()
  {
    choice = random(4);
    switch (choice)
    {
	    case 1: color = [255,255,255,1]; break;
	    case 2: color = [0,255,255,.7]; break;
	    case 3: color = [255,255,0,.7]; break;
	    case 4: color = [255,0,0,.2]; break;
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
    this.layer_one   = this.random_layer();
    this.layer_one   = this.addFrameListenerToLayer(this.layer_one,1);
    this.layer_two   = this.random_layer();
    this.layer_one   = this.addFrameListenerToLayer(this.layer_two,2);
    this.layer_three = this.random_layer();
    this.layer_three = this.addFrameListenerToLayer(this.layer_three,3);
  }
  this.random_layer = function()
  {
    layer = new Array();
    for (i = 0; i < 200; i++)
    {
      width  = this.width * Math.random();
      height = this.height * Math.random();
      size   = this.size * random(3);
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
      canvas.appendChild(layer[i].c);
    }
  }
}

starfield = new Starfield(500,500);
starfield.random_generate();

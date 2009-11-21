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
  this.layers = new Array();
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
    counter = 0;
    for (i = 0; i < 6; i++)
    {
      layer_one = this.random_layer();
      layer_one = this.addFrameListenerToLayer(layer_one,counter);
      layer_two = this.random_layer();
      layer_two = this.addFrameListenerToLayer(layer_two,counter);
      layer_two.x = -500
      layers.push(layer_one);
      layers.push(layer_two);
      counter += 1;
    }
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
  this.appendLayersToCanvas = function(canvas)
  {
    for (i = 0; i < this.layers.length; i++)
    {
      for(l = 0; l < this.layers[i].length; l++)
      {
        canvas.appendChild(this.layers[i][l].c);
      }
    }
  }
}

starfield = new Starfield(500,500);
starfield.random_generate();

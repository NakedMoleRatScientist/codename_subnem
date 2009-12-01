/*Known weirdness and problems:

The loop that is contained in function random_generate of the Starfield class cannot use "i" for some reason. So the name "time" was instead used.  
This is because i would automatically terminate after the first passing of the loop for inexplict reason.
Perhaps this is caused by the overuse of "i"?
In any case someone more knowledgable than me should investigate it more closely. Also, if you can't replacate this bug, feel free to delete it. 
              --Kiba, 11/21/09


*/

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
    console.log("in random_generate");
    counter = 1;
    for (time = 0; time < 3; time++)
    {
      layer_one = this.new_layers(counter);
      layer_two = this.new_layers(counter,-500);
      this.layers.push(layer_one);
      this.layers.push(layer_two);
      counter ++;
    }
  }
  this.new_layers = function(speed,x)
  {
    if (x == null)
    {
      x = 0;
    }
    layer = this.random_layer(x);
    layer = this.addFrameListenerToLayer(layer,speed);
    return layer;
  }
  this.random_layer = function(offset)
  {
    if (offset == null)
    {
      offset = 0;
    }
    layer = new Array();
    for (i = 0; i < 50; i++)
    {
      width  = this.width * Math.random() + offset;
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

var starfield = new Starfield(500,500);
starfield.random_generate();
console.log("created starfield");

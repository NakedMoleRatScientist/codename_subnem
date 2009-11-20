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
    this.x = x
    this.y = y
    this.size = size
    this.color = color
}

function random(n)
{
  return (Math.floor(Math.random() * n + 1));
}

function Starfield() {
    this.layer_one = new Array();
    this.layer_two = new Array();
    this.layer_three = new Array();
    this.random_colors = function()
    {
	choice = random(3);
	switch (choice)
	{
	    case 1; color = "ffffff"; break;
	    case 2; color = "00ffff"; break;
	    case 3; color = "ffff00"; break;
	}
	return color;

    }
    this.random_generate = function()
    {
	this.layer_one = random_layer();
	this.layer_two = random_layer();
	this.layer_three = random_layer();
    }
    this.random_layer = function()
    {
	layer = new Array();
	for (i = 0; i < 50; i++)
	{
	  layer.push(new Star(Math.random(),Math.Random(),random(3),"fffaf"));
	}
	return layer;
    }
}
starfield = new Starfield();
starfield.random_generate();
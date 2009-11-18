_starfield_image_one = Object.loadImage('assets/game/starfield_1.png');
_starfield_image_two = Object.loadImage('assets/game/starfield_2.png');
_starfield_image_three = Object.loadImage('assets/game/starfield_3.png');
starfield_one = new ImageNode(_starfield_image_one);
starfield_two = new ImageNode(_starfield_image_two);
starfield_three = new ImageNode(_starfield_image_three);
starfield_one.addFrameListener(function(t)
{
    this.x += 1;
});
starfield_two.addFrameListener(function(t)
{
    this.x += 2;
});
starfield_three.addFrameListener(function(t) 
{
    this.x += 3;
});
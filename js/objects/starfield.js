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
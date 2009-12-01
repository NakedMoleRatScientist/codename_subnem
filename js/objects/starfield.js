/*Known weirdness and problems:

The loop that is contained in function random_generate of the Starfield class cannot use "i" for some reason. So the name "time" was instead used.  
This is because i would automatically terminate after the first passing of the loop for inexplict reason.
Perhaps this is caused by the overuse of "i"?
In any case someone more knowledgable than me should investigate it more closely. Also, if you can't replacate this bug, feel free to delete it. 
              --Kiba, 11/21/09


*/
Starfield = Klass(CanvasNode, {
  x: 0,
  y: 0,
  layers: null,
  initialize: function(width, height){
    this.width = width;
    this.height = height;
    this.size = .625;
    CanvasNode.initialize.call(this);
    logger.info("initialized starfield canvas node.")
    this.layers = new Array();
    this.random_generate();
    this.appendLayersToCanvas();
    logger.info("drew starfield");
  },
  random: function(n){
    return (Math.floor(Math.random() * n + 1));
  },
  random_colors: function(){
    choice = this.random(4);
    switch (choice)
    {
      case 1: color = [255,255,255,1]; break;
      case 2: color = [0,255,255,.7]; break;
      case 3: color = [255,255,0,.7]; break;
      case 4: color = [255,0,0,.2]; break;
    }
    return color;
  },
  addFrameListenerToStar: function(star, speed){
    star.addFrameListener(function(t)
    {
      this.x += speed;
      if (this.x > settings.width)
      {
        this.x = -1 * settings.width;
      }
    });
  },
  random_generate: function(){
    console.log("in random_generate");
    counter = 1;
    for (time = 0; time < 3; time++)
    {
      layer_one = this.new_layers(counter);
      layer_two = this.new_layers(counter,-1 * settings.width);
      this.layers.push(layer_one);
      this.layers.push(layer_two);
      counter ++;
    }
    console.log("finished random_generate");
  },
  new_layers: function(speed, x){
    if (x == null)
    {
      x = 0;
    }
    layer = this.random_layer(x);
    this.addFrameListenerToLayer(layer,speed);
    return layer;
  },
  random_layer: function(offset){
    if (offset == null)
    {
      offset = 0;
    }
    layer = new Array();
    for (i = 0; i < 50; i++)
    {
      size   = this.size * this.random(3);
      star   = new Circle(size, { fill: this.random_colors() });
      star.x = this.width * Math.random() + offset;
      star.y = this.height * Math.random();
      layer.push(star);
    }
    return layer;
  },
  addFrameListenerToLayer: function(layer, speed){
    for (i = 0; i < layer.length; i++)
    {
      this.addFrameListenerToStar(layer[i],speed);
    }
    return layer;
  },
  appendLayersToCanvas: function(){
    for (i = 0; i < this.layers.length; i++)
    {
      logger.info(this.layers[i]);
      for(l = 0; l < this.layers[i].length; l++)
      {
        logger.info(this.layers[i][l]);
        this.append(this.layers[i][l]);
      }
    }
  }
});

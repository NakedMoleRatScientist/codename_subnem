Keyboard = Klass(Effect, 
{
    description : "Respond to player command for movement.",
    initialize : function (player)
    {
	Effect.initialize.apply(this, arguments);
	var kb_move = function (t,dt) {
          if (this.root.keys.left)
	      alert("test"); 
        }
    }
}
// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja
_player_ship_image = Object.loadImage('assets/game/fighter_x1/main.png');
player_ship = new ImageNode(_player_ship_image);

// Make the png rotate
player_ship.addFrameListener(function(t) {
});
function Player()
{
}
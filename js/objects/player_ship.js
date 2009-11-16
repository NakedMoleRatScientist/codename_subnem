// This should not be in a global namespace...we should have each of these be
// instance variables in the game world or something, rather than global-floating
// variables. -ja
_player_ship_image = Object.loadImage('assets/tyrian/tyrian.shp.007D3C.png');
player_ship = new ImageNode(_player_ship_image);

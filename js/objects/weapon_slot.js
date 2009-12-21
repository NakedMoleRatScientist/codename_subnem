WeaponSlot = Klass(
{
  type: null,
  heat_capacity: null,
  parts: null,
  fire_rate: null,
  cool_rate: null,
  _x: null,
  _y: null,
  initialize: function(x,y)
  {
    _x: x;
    _y: y;
  }
  mount_radiator: function(type)
  {
    switch(type)
    {
      case 0: heat_capacity += 200; parts.push("radiator, 30 meters in length"); break;
    }
  }
}
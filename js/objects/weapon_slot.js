WeaponSlot = Klass(
{
  type: null,
  heat_capacity: 0.0,
  parts: [],
  fire_rate: null, //Firerate is rounds dispened in a minute
  heat_rate: null, //heat rate is increased per rounds fired.
  cool_rate: null, //cool rate is measured in a minute
  munition_capacity: null,
  munitions_actual: null,
  _x: null,
  _y: null,
  initialize: function(x,y)
  {
    _x: x;
    _y: y;
  },
  choose: function(type)
  {
    switch(type)
    {
      case 0: this.weapon_rg_one();
    }
  },
  weapon_rg_one: function()
  {
    heat_capacity += 500;
    parts.push("30mm RG| KMC inc.");
    fire_rate = 950;
    heat_rate = .1;
    cool_rate = 10;
    munition_capcity = 10000;
    munitions_actual = 10000;
  }
}
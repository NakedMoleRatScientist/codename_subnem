Body = Klass(
{
  slots: null,
  width: 100,
  height: 100,
  initialize: function()
  {
    this.add_weapon_slot();
    this.mount(0);
  },
  add_weapon_slot: function()
  {
    slots.push(new WeaponSlot(100,100));
  }
}
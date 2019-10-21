"use strict";
export default class Gladiator {
  constructor(name, weapon) {
    this.setName(name);
    this.setWeapon(weapon);
  }
  setName(name) {
    //  Fix the casing to have it first capital, the rest is small
    name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setWeapon(weapon) {
    weapon = weapon.charAt(0).toUpperCase() + weapon.substring(1).toLowerCase();
    //  Exception to only accept a valid weapon input
    if (weapon == "Spear" || weapon == "Club" || weapon == "Trident") {
      this.weapon = weapon;
    } else {
      console.log("Invlid weapon input");
    }
  }
  getWeapon() {
    return this.weapon;
  }
}

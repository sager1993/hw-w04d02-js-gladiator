"use strict";
import Gladiator from "./gladiator.js";
export default class Arena {
  constructor(name, gladiators = []) {
    this.setName(name);
    this.gladiators = gladiators;
  }
  addGladiator(glad = Gladiator) {
    if (this.gladiators.length < 2) this.gladiators.push(glad);
  }
  setName(name) {
    //  Change the casing to first capitalized
    this.name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  }
  getName() {
    return this.name;
  }
  fight() {
    if (this.gladiators.length == 2) {
      let weapon1 = this.gladiators[0].weapon;
      let weapon2 = this.gladiators[1].weapon;
      if (weapon1 == weapon2) {
        this.gladiators = [];
      } else if (
        (weapon1 == "Trident" && weapon2 == "Spear") ||
        (weapon1 == "Spear" && weapon2 == "Club") ||
        (weapon1 == "Club" && weapon2 == "Trident")
      ) {
        this.gladiators.pop();
      } else if (
        (weapon2 == "Trident" && weapon1 == "Spear") ||
        (weapon2 == "Spear" && weapon1 == "Club") ||
        (weapon2 == "Club" && weapon1 == "Trident")
      ) {
        this.gladiators.shift();
      }
    }
  }
}

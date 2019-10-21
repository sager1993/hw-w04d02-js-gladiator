"use strict";
import Arena from "./arena.js";
import Gladiator from "./gladiator.js";

/////     Instance of Gladiator     \\\\\
const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"

/////     Instance of Arena     \\\\\
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum
const colosseumMega = new Arena("megalopolis");
console.log(colosseumMega.name); // => Megalopolis

/////     Arena Gladiators     \\\\\
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Sword");
const andronicus = new Gladiator("Andronicus", "Sword");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators); // => 2

/////     Arena Fight     \\\\\
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(titus);
colosseum.addGladiator(max);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]

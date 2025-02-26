/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(create) {
  this.createdAt = create.createdAt;
  this.name = create.name;
  this.dimensions = create.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(human) {
  CharacterStats.call(this, human);
  this.team = human.team;
  this.weapons = human.weapons;
  this.language = human.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

function Hero(heroClass) {
  Humanoid.call(this, heroClass);
  this.armorType = heroClass.armorType;
  this.special = heroClass.special;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.attack = function() {
  let attackDmg = 200;
  let enemy = arthas.name;
  let enemyHealth = arthas.healthPoints;
  return () => {
    enemyHealth = enemyHealth - attackDmg;
    enemyHealth > 1
      ? console.log(
          `${this.name} ${this.special}'s ${enemy} for ${attackDmg}. ${enemy} has ${enemyHealth} health points.`
        )
      : console.log(`${this.name} ${this.special}'s ${enemy} and ${enemy} crumbles and falls dead.`);
  };
};

function Villain(villainClass) {
  Humanoid.call(this, villainClass);
  this.armorType = villainClass.armorType;
  this.special = villainClass.special;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.attack = function() {
  let attackDmg = 200;
  let enemy = thrall.name;
  let enemyHealth = thrall.healthPoints;
  return () => {
    enemyHealth = enemyHealth - attackDmg;
    enemyHealth > 1
      ? console.log(
          `${this.name} ${this.special}'s ${enemy} for ${attackDmg}. ${enemy} has ${enemyHealth} health points.`
        )
      : console.log(`${this.name} ${this.special}'s ${enemy} and ${enemy} crumbles and falls dead.`);
  };
};

const thrall = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 3,
    height: 6
  },
  healthPoints: 1000,
  name: 'Thrall',
  team: 'Horde',
  weapons: ['Axe'],
  language: 'Orcish',
  armorType: 'Plate',
  special: 'Mortal Strike'
});

const arthas = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 7
  },
  healthPoints: 1000,
  name: 'Arthas',
  team: 'Alliance',
  weapons: ['Sword'],
  language: 'Common Tongue',
  armorType: 'Plate',
  special: 'Heart Strike'
});

let thrallAttack = thrall.attack();
let arthasAttack = arthas.attack();

thrallAttack(); // Thrall Mortal Strike's Arthas for 200. Arthas has 800 health points.
arthasAttack(); // Arthas Heart Strike's Thrall for 200. Thrall has 800 health points.
arthasAttack(); // Arthas Heart Strike's Thrall for 200. Thrall has 600 health points.
arthasAttack(); // Arthas Heart Strike's Thrall for 200. Thrall has 400 health points.
thrallAttack(); // Thrall Mortal Strike's Arthas for 200. Arthas has 600 health points.
thrallAttack(); // Thrall Mortal Strike's Arthas for 200. Arthas has 400 health points.
arthasAttack(); // Arthas Heart Strike's Thrall for 200. Thrall has 200 health points.
thrallAttack(); // Thrall Mortal Strike's Arthas for 200. Arthas has 200 health points.
thrallAttack(); // Thrall Mortal Strike's Arthas and Arthas crumbles and falls dead.

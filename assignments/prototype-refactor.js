/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject(attributes) {
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
//   this.dimensions = attributes.dimensions;
  
// }

// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`
// }

class GameObject {
    constructor(attributes) {
      this.createdAt = attributes.createdAt
      this.name = attributes.name
      this.dimensions = attributes.dimensions
    }
  
    destroy() {
    return `${this.name} was removed from the game.`
    }
  }
  
  // function CharacterStats(attributes) {
  //   GameObject.call(this, attributes);
  //   this.healthPoints = attributes.healthPoints;
  // }
  
  // CharacterStats.prototype = Object.create(GameObject.prototype)
  // CharacterStats.prototype.takeDamage = function() {
  //   return `${this.name} took damage.`
  // }
  
  class CharacterStats extends GameObject {
    constructor(charAttrs) {
      super(charAttrs)
      this.healthPoints = charAttrs.healthPoints
    }
    takeDamage() {
      return `${this.name} took damage.`
    }
  }
  
  // function Humanoid(attributes) {
  //   CharacterStats.call(this, attributes);
  //   this.team = attributes.team;
  //   this.weapons = attributes.weapons;
  //   this.language = attributes.language;
  // }
  
  // Humanoid.prototype = Object.create(CharacterStats.prototype);
  // Humanoid.prototype.greet = function() {
  //   return `${this.name} offers a greeting in ${this.language}.`
  // }
  
  class Humanoid extends CharacterStats {
    constructor(humAttrs) {
      super(humAttrs)
      this.team = humAttrs.team
      this.weapons = humAttrs.weapons
      this.language = humAttrs.language
    }
    greet() {
      return `${this.name} offers a greeting in ${this.language}.`
    }
  }
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
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
  
// //   Villain Constructor

//   function Villain(atts) {
//     Humanoid.call(this, atts);
//     this.armorName = atts.armor[0];
//     this.armorRating = atts.armor[1];
//   }
//   // Villain Methods

//   Villain.prototype = Object.create(Humanoid.prototype);
//   Villain.prototype.showcase = function () {
//     let weapons = this.weapons.join(', ');
//     return `${this.name}, from the ${this.team} team, is wearing ${this.armorName} and wields ${weapons}.`;
//   }
//   Villain.prototype.evilSmite = function (enemy) {
//     let damage = 3 - enemy.armorRating;
//     enemy.healthPoints = enemy.healthPoints - damage;
//     return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} point(s) of damage. ${enemy.destroy()}` : `${this.name} bonks ${enemy.name} with his ${this.weapons[1]} for ${damage} point(s) of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
//   }
//   Villain.prototype.deathRay = function (enemy) {
//     let damage = 5 - enemy.armorRating;
//     enemy.healthPoints = enemy.healthPoints - damage;
//     return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} point(s) of damage. ${enemy.destroy()}` : `${this.name} blasts ${enemy.name} with his ${this.weapons[0]} for ${damage} point(s) of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
//   }
//   Villain.prototype.heal = function () {
//     let healAmount = 2;
//     this.healthPoints = this.healthPoints + healAmount;
//     return `${this.name} healed ${healAmount} HP!`;
//   }

//   Refactored Villian Constructor with Methods

  class Villain extends Humanoid {
    constructor(atts) {
      super(atts)
      this.armorName = atts.armor[0];
      this.armorRating = atts.armor[1];
    }
  
    showcase() {
      let weapons = this.weapons.join(', ');
      return `${this.name}, from the ${this.team} team, is wearing ${this.armorName} and wields ${weapons}.`;
    }
  
    evilSmite(enemy) {
      let damage = 3 - enemy.armorRating;
  
      enemy.healthPoints = enemy.healthPoints - damage;
  
      return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} point(s) of damage. ${enemy.destroy()}` : `${this.name} bonks ${enemy.name} with his ${this.weapons[1]} for ${damage} point(s) of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
    }
  
    deathRay(enemy) {
      let damage = 5 - enemy.armorRating;
  
      enemy.healthPoints = enemy.healthPoints - damage;
  
      return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} point(s) of damage. ${enemy.destroy()}` : `${this.name} blasts ${enemy.name} with his ${this.weapons[0]} for ${damage} point(s) of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
    }
  
    heal() {
      let healAmount = 2;
  
      this.healthPoints = this.healthPoints + healAmount;
  
      return `${this.name} healed ${healAmount} HP!`;
    }
  }
  
//   // Hero Constructor

//   function Hero(atts) {
//     Humanoid.call(this, atts);
//     this.armorName = atts.armor[0];
//     this.armorRating = atts.armor[1];
//   }
//   // Hero Methods

//   Hero.prototype = Object.create(Humanoid.prototype);
//   Hero.prototype.showcase = function () {
//     let weapons = this.weapons.join(', ');
//     return `${this.name}, from the ${this.team} team, is wearing ${this.armorName} and wields ${weapons}.`;
//   }
//   Hero.prototype.mightySlash = function (enemy) {
//     let damage = 5 - enemy.armorRating;
//     enemy.healthPoints = enemy.healthPoints - damage;
//     return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} points of damage. ${enemy.destroy()}` : `${this.name} slashes ${enemy.name} with his ${this.weapons[0]} for ${damage} points of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
//   }
//   Hero.prototype.secondarySlash = function (enemy) {
//     let damage = 2 - enemy.armorRating;
//     enemy.healthPoints = enemy.healthPoints - damage;
//     return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} points of damage. ${enemy.destroy()}` : `${this.name} slashes ${enemy.name} with his ${this.weapons[1]} for ${damage} points of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
//   }
//   Hero.prototype.heal = function () {
//     let healAmount = 2;
//     this.healthPoints = this.healthPoints + healAmount;
//     return `${this.name} healed ${healAmount} HP!`;
//   }

  // Refactored Villian Constructor with Methods

  class Hero extends Humanoid {
    constructor(atts) {
      super(atts)
      this.armorName = atts.armor[0];
      this.armorRating = atts.armor[1];
    }
  
    showcase() {
      let weapons = this.weapons.join(', ');
  
      return `${this.name}, from the ${this.team} team, is wearing ${this.armorName} and wields ${weapons}.`;
    }
  
    mightySlash(enemy) {
      let damage = 5 - enemy.armorRating;
  
      enemy.healthPoints = enemy.healthPoints - damage;
  
      return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} points of damage. ${enemy.destroy()}` : `${this.name} slashes ${enemy.name} with his ${this.weapons[0]} for ${damage} points of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
    }
  
    secondarySlash(enemy) {
      let damage = 2 - enemy.armorRating;
  
      enemy.healthPoints = enemy.healthPoints - damage;
  
      return enemy.healthPoints <= 0 ? `${enemy.name} took ${damage} points of damage. ${enemy.destroy()}` : `${this.name} slashes ${enemy.name} with his ${this.weapons[1]} for ${damage} points of damage. ${enemy.name} has ${enemy.healthPoints} HP left!`;
    }
  
    heal() {
      let healAmount = 2;
  
      this.healthPoints = this.healthPoints + healAmount;
  
      return `${this.name} healed ${healAmount} HP!`;
    }
  }
  
  // Characters

  let darkdrar = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Darkdrar',
    team: 'Evil',
    weapons: [
      'Magic',
      'Staff',
    ],
    language: 'Jibberish',
    armor: [
      'Mage Garb',
      1,
    ]
  });
  
  let brellin = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 12,
    name: 'Brellin',
    team: 'Good',
    weapons: [
      'Katana',
      'Dagger',
    ],
    language: '日本語',
    armor: [
      'Plate Mail',
      2,
    ]
  });
  
  // Testing
  
  console.log(brellin.mightySlash(darkdrar), darkdrar.deathRay(brellin), darkdrar.heal(), brellin.secondarySlash(darkdrar), darkdrar.evilSmite(brellin), brellin.secondarySlash(darkdrar), darkdrar.evilSmite(brellin), brellin.mightySlash(darkdrar), darkdrar.deathRay(brellin), brellin.heal(), darkdrar.evilSmite(brellin), brellin.mightySlash(darkdrar));
  
  console.log(brellin.showcase());
  
  console.log(darkdrar.showcase());
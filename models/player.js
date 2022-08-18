class Hero {
  constructor({ name, hpRate, powRate }) {
    this.name = name;
    this.hpRate = hpRate;
    this.atkRate = atkRate;
    this.defRate = defRate;
  }
}

class UserHero {
  constructor() {
    this.hero = hero;
    this.level = level;
    this.ownerID = ownerID;
    this.amount = amount;
    // 1* = 3^0
    // 2* = 3^1
    // 3* = 3^2
    // 4* = 3^3
    // 5* = 3^4
  }
}

class Demon {
  constructor() {
    this.name = "Demon";
    this.level = 1;
    this.id = "Demon1";
  }
}

database.add(new Player("Slimaeus", 23, 30));
var player = new Creature(Player);

class Effect {
  constructor() {}
}

class Creature {
  constructor(player) {
    this.maxHP = player.level * hp;
    this.currentHP = this.maxHP;
    this.attack = player.attack;
    this.def = player.def;
    this.int = player.int;
    this.res = player.res;
    this.spd = player.spd;
    this.mspd = player.mspd;
  }
  attack(creature) {
    const damage = func(this.attack, creature.def);
    creature.currentHP -= damage;
  }
  func(a, b) {
    return a - b;
  }
}

var player = new Creature(Player);
var monster = new Creature(Player);

player.attack(monster);

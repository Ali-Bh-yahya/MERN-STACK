class Ninja {
  constructor(name, helth) {
    this.name = name;
    this.helth = helth;
    this.speed = 3;
    this.strength = 3;
  }

  // Methods
  sayName() {
    console.log("My name is " + this.name);
  }
  showStatus() {
    console.log(`The name is ${this.name}, the speed is ${this.speed}, the health is ${this.helth}, and the strength is ${this.strength}`);
  }

  drinkSake() {
    this.helth += 10;
    console.log(`You drank the sake and your new health is ${this.helth}`);
  }
}

const Ayman = new Ninja("Ayman", 15);

Ayman.sayName();

Ayman.showStatus();

Ayman.drinkSake(); // Fixed typo here

Ayman.showStatus();

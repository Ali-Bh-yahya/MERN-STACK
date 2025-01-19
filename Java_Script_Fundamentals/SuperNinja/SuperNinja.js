class  Ninja {
  constructor(name, health = 100, speed=3 ,strength=3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  // Methods
  sayName() {
    console.log("My name is " + this.name);
  }
  showStatus() {
    console.log(`The name is ${this.name}, the speed is ${this.speed}, the health is ${this.health}, and the strength is ${this.strength}`);
  }

  drinkSake() {
    this.health += 10;
    console.log(`You drank the sake and your new health is ${this.health}`);
  }
}

class Sensei extends Ninja{
  constructor(name , health = 200, speed = 10,strength = 10 ,wisdom = 10) { 
    super(name, health, speed ,strength);
    this.wisdom = wisdom;
  }
  // Methods// 
  // -> "What one programmer can do in one month, two programmers can do in two months."
  speakWidsom(){
     this.drinkSake();
     this.wisdom += 10;
     console.log("What one programmer can do in one month, two programmers can do in two months.");
 }
}
const Ayman = new Ninja("Ayman", 15);

Ayman.sayName();

Ayman.showStatus();

Ayman.drinkSake(); 

Ayman.showStatus();

const Omar =  new Sensei("omar")

Omar.speakWidsom();




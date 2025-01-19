import { Vehicle } from "./Vehicle.js";

class Cls63 extends Vehicle{
  costructor(color){
    super("mercedes","cls63",color);
    this.hp = 550;
  }
  printSpecSummary(){
    console.log('Mercedes Cls63 a 5.5L V6 the horsepower is {this.hp} HP and 500 Ib-ft ')
  }
}
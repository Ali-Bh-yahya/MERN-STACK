export class Vehicle{
  constructor(manufacturer , model  , color){
    this.miles = 0;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
  }
  drive(){
    this.miles += 50;

    console.log(`${this.manufacturer} ${this.model} is driving, miles: ${this.miles}`);
  }
}
const car = new Vehicle("mercedes", "cls63","black")
car.drive();
console.log(car.mils)

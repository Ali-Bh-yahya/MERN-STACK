//Problem 1:
const cars = ['Tesla', 'Mercedes','Honda']
const[randomCar] = cars
const[,otherRandomCar] = cars

console.log(randomCar)//Tesla
console.log(otherRandomCar)// Mercedes

//Problem 2:
const employees = {
  name:'Ali' ,
  age: 20 , 
  company: 'Mercedes' 
}

const{name: otherName} = employees;

//console.log(name) //name is not defined
console.log(otherName)// Ali

//Problem 3:

const person = {
  name : 'Phil Smith',
  age : 41,
  height : "6 feet"
}
const password = '123456';
const{password:hashedPassword} =person;

console.log(password) //123456
console.log(hashedPassword) //undefined

//Problem 4:
const numbers = [8,2,3,5,6,1,67,12,2];
const[,first] = numbers;
const[,,,second] = numbers;
const[,,,,,,,,third] = numbers;
console.log(first == second) ;//false
console.log(second == third);//false

//Problem 5:
const lastTest = {
  key : 'value',
  secondkey : [1,2,3,4,5,6,7]
}

const{key} = lastTest;
const{secondKey} = lastTest;
// const[,willTHisWork] = secondKey.last;

console.log(key) ;

console.log(secondKey);//undefined
// console.log(secondKey[0]);//error
console.log(willThisWork); //error
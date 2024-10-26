//დავალება 1
// ძირითადი კლასი
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    speak() {
      console.log("This animal makes a sound.");
    }
  }
  
  // შვილკლასი Dog, რომელიც მემკვიდრეობით იღებს Animal-ს
  class Dog extends Animal {
    speak() {
      console.log("Bark!");
    }
  }
  
  // შვილკლასი Cat, რომელიც მემკვიდრეობით იღებს Animal-ს
  class Cat extends Animal {
    speak() {
      console.log("Meow!");
    }
  }
  
  const animal = new Animal("Generic Animal", 5);
  const dog = new Dog("Buddy", 3);
  const cat = new Cat("Whiskers", 2);
  
  animal.speak();  // This animal makes a sound.
  dog.speak();     // Bark!
  cat.speak();     // Meow!
  


//დავალება2
// მშობელი კლასი Vehicle
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    displayInfo() {
      console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
  }
  
  // შვილი კლასი Car, რომელიც მემკვიდრეობით იღებს Vehicle-ს
  class Car extends Vehicle {
    constructor(make, model, fuelType) {
      super(make, model); // 
      this.fuelType = fuelType;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Fuel Type: ${this.fuelType}`);
    }
  }
  
  const myCar = new Car("Bmw", "F90", "Gasoline");
  myCar.displayInfo();
  // შედეგი:
  // Make: Bmw, Model: F90
  // Fuel Type: Gasoline


//დავალება 3
// მშობელი კლასი Shape
class Shape {
    constructor(name, sides) {
      this.name = name;
      this.sides = sides;
    }
  }
  
  // შვილი კლასი Triangle, რომელიც მემკვიდრეობით იღებს Shape-ს
  class Triangle extends Shape {
    constructor(base, height) {
      super('Triangle', 3); // მშობლის კონსტრუქტორის გამოძახება
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  const myTriangle = new Triangle(10, 5);
  console.log(`Shape: ${myTriangle.name}, Sides: ${myTriangle.sides}`); 
  console.log(`Area: ${myTriangle.calculateArea()}`); 
  

//დავალება 4

// ძირითადი კლასი Appliance
class Appliance {
    constructor(brand, power) {
      this.brand = brand;
      this.power = power;
    }
  
    turnOn() {
      console.log("The appliance is now on.");
    }
  }
  
  // შვილი კლასი WashingMachine, რომელიც მემკვიდრეობით იღებს Appliance-ს
  class WashingMachine extends Appliance {
    washClothes() {
      console.log("The washing machine is washing clothes.");
    }
  }
  
  // შვილი კლასი Microwave, რომელიც მემკვიდრეობით იღებს Appliance-ს
  class Microwave extends Appliance {
    heatFood() {
      console.log("The microwave is heating food.");
    }
  }
  
  const myWashingMachine = new WashingMachine("LG", 2000);
  myWashingMachine.turnOn(); 
  myWashingMachine.washClothes(); 
  
  const myMicrowave = new Microwave("Samsung", 1000);
  myMicrowave.turnOn(); 
  myMicrowave.heatFood(); 

//დაავლება 5
const productMap = new Map();

productMap.set('Mandarin', 1.5);
console.log('Mandarin successfully added with price $1.5');

productMap.set('Banana', 0.9); 
console.log('Banana successfully added with price $0.9'); 

productMap.set('Strawberry', 1.2);
console.log('Strawberry successfully added with price $1.2');

productMap.set('Milk', 2.5);
console.log('Milk successfully added with price $2.5');

console.log(productMap);

//დავალება 6
const productMapp = new Map();
productMap.set('Mandarin', 1.5);
productMap.set('Banana', 0.9);
productMap.set('Strawberry', 1.2);
productMap.set('Milk', 2.5);

const mandarinPrice = productMap.get('Mandarin');
console.log(`The price of Mandarin is $${mandarinPrice}`);

const bananaPrice = productMap.get('Banana');
console.log(`The price of Banana is $${bananaPrice}`);

const strawberryPrice = productMap.get('Strawberry');
console.log(`The price of Strawberry is $${strawberryPrice}`);

const milkPrice = productMap.get('Milk');
console.log(`The price of Milk is $${milkPrice}`);

//დავალება 7
const movieMap = new Map();
movieMap.set('Titanic', 1997);
movieMap.set('The Matrix', 1999);
movieMap.set('Interstellar', 2014);
movieMap.set('The Godfather', 1972);
const movieToCheck = 'Inception'; 
if (movieMap.has(movieToCheck)) {
  console.log(`${movieToCheck} is in the map and was released in ${movieMap.get(movieToCheck)}.`);
} else {
  console.log(`${movieToCheck} is not in the map.`);
}
const anotherMovieToCheck = 'Titanic'; 
if (movieMap.has(anotherMovieToCheck)) {
  console.log(`${anotherMovieToCheck} is in the map and was released in ${movieMap.get(anotherMovieToCheck)}.`);
} else {
  console.log(`${anotherMovieToCheck} is not in the map.`);
}

//დავალება 8
const athleteRecords = new Map([
    ['LeBron James', 4],     
    ['Tom Brady', 7],           
    ['Roger Federer', 20],       
    ['Cristiano Ronaldo', 5]     
  ]);
  const athleteToRemove = 'Tom Brady';
  const removalSuccessful = athleteRecords.delete(athleteToRemove);
  if (removalSuccessful) {
    console.log(`${athleteToRemove} has been successfully removed from the records.`);
  } else {
    console.log(`${athleteToRemove} was not found in the records.`);
  }
  if (!athleteRecords.has(athleteToRemove)) {
    console.log(`${athleteToRemove} is no longer in the records.`);
  } else {
    console.log(`${athleteToRemove} is still in the records.`);
  }
  console.log(athleteRecords);

//დავალება 9
// შექმენით Map მანქანის ბრენდების და მოდელების შესანახად
const carModels = new Map([
    ['Bmw', 'F90'],
    ['Honda', 'Civic'],
    ['Ford', 'Mustang'],
    ['Toyota', 'Supra']
  ]);
  
  console.log('Car models before clearing:', carModels);
  
  carModels.clear();
  console.log('Car models have been cleared.');
  
  if (carModels.size === 0) {
    console.log('The car models map is now empty.');
  } else {
    console.log('The car models map is not empty.');
  }
  console.log('Car models after clearing:', carModels);
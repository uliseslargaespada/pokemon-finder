/* ES6 */
/* OOP - Object Oriented Programming */
// How to create an object
const person = {
  name: "Ulises",
  age: 1256
};

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// };

class Person {
  /* Constructor */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /* Public Methods */
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
};

const person1 = new Person("Ulises", 12321);
person1.name = "Eduardo";

console.log(person1.name);

/* Encapsulation
  Keeping the data controlled
*/
class BankAccount {
  // Private properties
  #balance = 0;

  constructor(owner) {
    this.owner = owner
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const bankAccount1 = new BankAccount(person1.name);
bankAccount1.deposit(1000);

console.log(bankAccount1.getBalance());

/* Inheritance */
class Animal {
  constructor(name, canFly) {
    this.name = name;
    this.canFly = canFly;
  }

  speak() {
    return(`${this.name} makes a sound`)
  }
}

const cow = new Animal("Cowy", false);

class Dog extends Animal {
  constructor(name, canFLy, breed) {
    super(name, canFLy);
    this.breed = breed;
  }

  // Create new methods
  speak() {
    return(`${this.name} barks!`)
  }
}

const scooby = new Dog("Scooby", false, "Great Dane");

console.log(cow instanceof Animal);
console.log(scooby instanceof Dog);

/* Polymorphism */
// They do not require a constructor
class Shape {
  area() {
    return 0;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return this.base * this.height;
  }
}

/* Composition */
// Unifying classes with other classes
class Vehicle { 
  constructor(type) {
    this.type = type;
  }
}

class Engine {
  start() {
    return "Starting...";
  }
}

class Car extends Vehicle{
  constructor(type, brand) {
    super(type);
    this.brand = brand;
    this.engine = new Engine();
  }

  turnOn() {
    console.log("First turning on the Engine...");
    this.engine.start();
  }
}

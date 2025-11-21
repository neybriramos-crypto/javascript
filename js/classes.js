/**
 * Classes
 *
 * A class is a blueprint for creating objects with predefined
 * properties and methods.
 */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    console.log()
  }
}

let person1 = new Person("José", "Guillen", 30);
let person2 = new Person("Daniel", "Miranda", 25);

console.log(person1.firstName);
console.log(person2.age);

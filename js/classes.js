/**
 * Classes
 *
 * A class is a blueprint for creating objects with predefined
 * properties and methods.
 */

class Person {
  constructor(firstName, lastName, age, country = "Venezuela") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
  }

  greet() {
    console.log("Hello!");
  }

  introduce() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old. I live in ${this.country}.`
    );
  }
}

let person1 = new Person("José", "Guillen", 30, "USA");
let person2 = new Person("Daniel", "Miranda", 25);

console.log(person1);
console.log(person2);

console.log(person1.firstName);
console.log(person2.age);

person1.greet();

person2.introduce();

class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log("Woof! Woof!");
  }

  searchBall() {
    console.log(`${this.name} is searching for the ball.`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  meow() {
    console.log("Meow! Meow!");
  }

  chaseMouse() {
    console.log(`${this.name} is chasing a mouse.`);
  }
}

let perrito = new Dog("Firulais", "Labrador");
let gatito = new Cat("Mittens", "Gray");

console.log(perrito);
console.log(gatito);

perrito.bark();
perrito.searchBall();
perrito.eat();
perrito.sleep();

gatito.meow();
gatito.chaseMouse();
gatito.eat();
gatito.sleep();

/**
 * Ejercicios
 *
 * Crea una clase llamada Circle que tenga una propiedad radio
 * y un método para calcular el área del círculo.
 *
 * Crea una clase llamada Person con propiedades como nombre,
 * apellido y edad, y un método para mostrar una introducción
 * personal.
 * Crea otras 3 clases que hereden de Person: Student, Teacher
 * y Administrator. Cada una debe tener propiedades y métodos
 * adicionales específicos.
 * - Student: grade, enrollment (array de materias), study() (método
 * que imprima un mensaje)
 * - Teacher: subject, salary, teach() (método que imprima un
 * mensaje)
 * - Administrator: department, manage() (método que imprima un
 * mensaje)
 */

class Circle {
  constructor(radio) {
    this.radio = radio;
  }

  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

let circle = new Circle(20);

console.log(circle.area());

class Human {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`);
  }
}

class Administrator extends Human {
  constructor(firstName, lastName, age, department) {
    super(firstName, lastName, age);
    this.department = department;
  }

  manage() {
    console.log(
      `${this.firstName} ${this.lastName} is managing very important stuff.`
    );
  }
}

class Teacher extends Human {
  constructor(firstName, lastName, age, subject, salary) {
    super(firstName, lastName, age);
    this.subject = subject;
    this.salary = salary;
  }

  teach() {
    console.log(
      `${this.firstName} ${this.lastName} is teaching students about ${this.subject}.`
    );
  }
}

class Student extends Human {
  constructor(firstName, lastName, age, grade, enrollment = []) {
    super(firstName, lastName, age);
    this.grade = grade;
    this.enrollment = enrollment;
  }

  study() {
    console.log(
      `${this.firstName} ${this.lastName} is studying about ${
        this.enrollment[Math.floor(Math.random() * this.enrollment.length)]
      }!`
    );
  }
}

let administrator = new Administrator("Luis", "Gozzo", 30, "HR");
let teacher = new Teacher("Neymar", "Brito", 28, "Biology", 200);
let student = new Student("Mauricio", "López", 13, "8th Grade", [
  "Math",
  "English",
  "History",
]);

administrator.introduce();
administrator.manage();

teacher.introduce();
teacher.teach();

student.introduce();
student.study();

/**
 * Ejercicio Estelar
 * 
 * Crear una clase llamada TaskManager que permita gestionar una
 * lista de tareas. La clase debe tener los siguientes métodos:
 * - addTask(task): Agrega una nueva tarea a la lista.
 * - removeTask(task): Elimina una tarea de la lista.
 * - getTasks(): Devuelve todas las tareas en la lista.
 * - markTaskAsCompleted(task): Marca una tarea como completada.
 * 
 * Cada tarea debe ser un objeto (clase Task) con las siguientes
 * propiedades:
 * - title: Título de la tarea.
 * - description: Descripción de la tarea.
 * - completed: Estado de la tarea (completada o no). 
 */

class TaskManager {
  constructor() {
    this.list = [];
  }

  add(task) {
    this.list.push(task);
    console.log(`${task.title} has been added to the list successfully.`);
  }

  remove(task) {
    const index = this.list.indexOf(task);

    if (index === -1) console.log("Task not found.");

    this.list.splice(index, 1);
    console.log(`${task.title} was removed successfully.`);
  }

  get() {
    let count = 0;

    for (let element of this.list) {
      let status;
      if (element.completed) status = "Completed";
      else status = "Incompleted";

      console.log(`Task No. ${count}`);
      console.log(`${element.title} (Status: ${status})\n`);

      count++;
    }
  }

  markAsCompleted(task) {
    task.completed = !task.completed;
    console.log(`Status of ${task.title} was changed successfully.`);
  }
}

class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }
}

let task1 = new Task("Pasear al perro");
let task2 = new Task("Regar las plantas");

let manager = new TaskManager();

manager.add(task1);
manager.add(task2);

manager.markAsCompleted(task2);

manager.get();

manager.remove(task1);

manager.get();
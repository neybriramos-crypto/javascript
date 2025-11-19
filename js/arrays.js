/**
 * Data Structures
 *
 * In programming, data structures are ways to organize and store
 * data so that it can be accessed and modified efficiently.
 * Common data structures include arrays, objects, linked lists,
 * stacks, queues, trees, and graphs.
 */

/**
 * Arrays
 *
 * They are sructures that allow us to store multiple values in a
 * single variable.
 * Each value is identified by an index, which represents its
 * position within
 * the array. Arrays are useful for organizing and manipulating
 * collections of data.
 */

let fruits = ["apple", "mango", "pineapple", "grape", "orange"];
let frankestein = [1, 2, 3, [1, 2, 3], "hello", true, fruits];

console.log(fruits); // Accessing the entire array
console.log(fruits[2]); // Accessing specific element

console.log(frankestein); // Accessing the entire array
console.log(frankestein[3][2]); // Accessing nested array element

// Modifying an element
fruits[1] = "kiwi";
console.log(fruits);

// Array methods
console.log(fruits.length); // Getting the length of the array

console.log(fruits.indexOf("grape")); // Finding the index of an element

console.log(fruits.includes("lemon")); // Checking if an element exists

fruits.push("banana"); // Adding an element to the end
console.log(fruits);

fruits.pop(); // Removing the last element
console.log(fruits);

fruits.unshift("strawberry"); // Adding an element to the beginning
console.log(fruits);

fruits.shift(); // Removing the first element
console.log(fruits);

fruits.slice(1, 4); // Creating a sub-array from index 1 to 3
console.log(fruits);

fruits.splice(2, 1); // Removing an element at index 2
console.log(fruits);

// Iterating over an array

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach method
fruits.forEach((fruit) => {
  console.log(fruit);
});

/**
 * Objects
 *
 * Objects are data structures that allow us to store multiple
 * values as key-value pairs.
 * Each key is a unique identifier that maps to a specific value.
 * Objects are useful for representing complex data and
 * organizing related information.
 */

let person = {
  firstName: "Angélica",
  lastName: "Rivas",
  age: 25,
  hobbies: ["programming", "gamming", "reading manga", "suffering"],
  address: {
    country: "Venezuela",
    city: "Valencia",
    street: "Av. Bolívar",
  },
};

console.log(person); // Accessing the entire object
console.log(person.firstName); // Accessing specific property
console.log(person.hobbies[1]); // Accessing nested array element

// Modifying a property (key-value pair)
person.age = 26;
console.log(person);

// Adding a new property
person.email = "angelica.rivas@example.com";
console.log(person);

// Deleting a property
// delete person.address.street;
// console.log(person);

// Soft-delete
person.address.street = "";
console.log(person);

// Object methods
console.log(Object.keys(person)); // Getting all keys
console.log(Object.values(person)); // Getting all values
console.log(Object.entries(person)); // Getting all key-value pairs

// Iterating over an object (for...in loop)
for (let key in person) {
  console.log(key + ": " + person[key]);

  // Iterating over nested structures
  if (key === "hobbies") {
    for (let hobby of person.hobbies) {
      console.log("Hobby: " + hobby);
    }
  }

  // Iterating over nested object
  if (key === "address") {
    for (let addrKey in person.address) {
      console.log(addrKey + ": " + person.address[addrKey]);
    }
  }
}

let persons = [
  {
    firstName: "Angélica",
    lastName: "Rivas",
    age: 25,
    hobbies: ["programming", "gamming", "reading manga", "suffering"],
    address: {
      country: "Venezuela",
      city: "Valencia",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Daniel",
    lastName: "Querales",
    age: 25,
    hobbies: ["programming", "gamming", "watching series"],
    address: {
      country: "Venezuela",
      city: "Caracas",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Kevin",
    lastName: "Singer",
    age: 32,
    hobbies: ["programming", "gamming", "math"],
    address: {
      country: "Venezuela",
      city: "Delta Amacuro",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Juan",
    lastName: "Padilla",
    age: 29,
    hobbies: ["coocking", "baking", "ham"],
    address: {
      country: "Venezuela",
      city: "Bolívar",
      street: "Av. Bolívar",
    },
  },
  {
    firstName: "Yeferson",
    lastName: "Adames",
    age: 16,
    hobbies: ["dinosaurs", "Leage of Legends", "Valorant"],
    address: {
      country: "Venezuela",
      city: "Zulia",
      street: "Av. Bolívar",
    },
  },
];

/**
 * Del array anterior, imprimir:
 * - Nombres completos de cada persona.
 * - Ciudad de residencia de cada persona.
 * - Primer hobby de cada persona.
 * - La segunda persona en el array.
 * - La última persona en el array.
 * - Todas las personas que vivan en "Valencia".
 * - Todas las personas mayores de 25 años.
 * - Todas las personas que tengan "programming" como hobby.
 */
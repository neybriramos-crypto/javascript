/**
 * Del siguiente array, imprimir:
 * - Nombres completos de cada persona.
 * - Ciudad de residencia de cada persona.
 * - Primer hobby de cada persona.
 * - La segunda persona en el array.
 * - La última persona en el array.
 * - Todas las personas que vivan en "Valencia".
 * - Todas las personas mayores de 25 años.
 * - Todas las personas que tengan "programming" como hobby.
 */

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
      city: "Valencia",
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
      city: "Maracaibo",
      street: "Av. Bolívar",
    },
  },
];

for (let person of persons) {
  console.log(`${person.firstName} ${person.lastName}`);
}

for (let person of persons) {
  console.log(person.address.city);
}

for (let person of persons) {
  console.log(person.hobbies[0]);
}

// for (let person of persons) {
//   for (let hobby of person.hobbies) {
//     console.log(hobby);
//   }
// }

console.log(persons[1]);

console.log(persons[persons.length - 1]);

for (let person of persons) {
  if (person.address.city === "Valencia") {
    console.log(person);
  }
}

for (let person of persons) {
  if (person.age >= 25) {
    console.log(person)
  }
}

for (let person of persons) {
  if (person.hobbies.includes("programming")) {
    console.log(person);
  }
}
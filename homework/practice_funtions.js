/**
 * Pedir al usuario que ingrese una serie de calificaciones
 * separadas por comas a través de un prompt y luego calcular:
 * - La cantidad de calificaciones ingresadas.
 * - El promedio de las calificaciones.
 * - La calificación más alta y la más baja.
 * - Mostrar los resultados en una alerta.
 *
 * Pista: Se deberá convertir la cadena ingresada en un array.
 */

function parseInput(input) {
  return input.split(", ");
}

function isNumber(value) {
  let number = parseFloat(value);
  return typeof number === "number" && !isNaN(number);
}

function calculateAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += parseFloat(grade);
  }
  return sum / grades.length;
}

function findMaxMin(grades) {
  let max = 0;
  let min = 20;

  for (let grade of grades) {
    if (parseFloat(grade) > max) {
      max = parseFloat(grade);
    }

    if (parseFloat(grade) < min) {
      min = parseFloat(grade);
    }
  }
  return { max, min };
}

function main__grades() {
  let input = prompt(
    "Ingrese una serie de calificaciones separadas por comas:"
  );
  console.log(input);

  let grades = parseInput(input);

  for (let grade of grades) {
    if (!isNumber(grade) || grade < 1 || grade > 20) {
      alert(
        "Por favor, ingrese solo números separados por comas, entre 1 y 20."
      );
      throw new Error("Invalid input");
    }
  }

  let total = grades.length;
  let average = calculateAverage(grades);
  let { max, min } = findMaxMin(grades);

  alert(
    `Cantidad de calificaciones: ${total}\nPromedio: ${average}\nCalificación más alta: ${max}\nCalificación más baja: ${min}`
  );
}

/**
 * Pedir al usuario que ingrese un número a través de un prompt
 * (validando que sea un valor válido) y luego mostrar en una alerta
 * todos los números primos menores o iguales al número ingresado.
 *
 * Pista: Un número primo es aquel que solo es divisible por 1 y
 * por sí mismo.
 */

function isPrime(num) {
  if (num <= 1) return false;

  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function main__primes() {
  let num = prompt("Ingrese un número:");
  let numbers = [];

  if (!isNumber(num) || num < 1) {
    alert("Por favor, ingrese un número válido mayor o igual a 1.");
    throw new Error("Invalid input");
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      numbers.push(i);
    }
  }
  alert(`Los números primos o iguales a ${num} son: ${numbers}`);
}

/**
 * Crear una función que simule el lanzamiento de dos dados.
 * La función deberá ejecutarse hasta que ambos dados muestren el
 * mismo número (es decir, se obtenga un par).
 *
 * Al finalizar, mostrar en una alerta cuántos lanzamientos
 * fueron necesarios para obtener el par.
 */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function main__dice() {
  let dice1, dice2;
  let rolls = 0;

  do {
    dice1 = getRandomInt(6) + 1;
    dice2 = getRandomInt(6) + 1;
    rolls++;
    console.log(`Lanzamiento ${rolls}: Dado 1 = ${dice1}, Dado 2 = ${dice2}`);
  } while (dice1 !== dice2);

  alert(`Se necesitaron ${rolls} lanzamientos para obtener un par.`);
}

// main__grades();
// main__primes();
// main__dice();

/**
 * Loops
 * A loop is a programming structure that repeats a sequence of instructions
 * until a specific condition is met.
 * If the condition is true, the loop continues; if false, the loop ends.
 *
 * The condition must return a boolean value (true or false).
 *
 * The condition is evaluated before each iteration of the loop.
 * 
 * while se usa cuando no sabemos cuántas veces se repetirá el ciclo.
 * do...while se usa cuando queremos que el ciclo se ejecute al menos una vez.
 * for se usa cuando sabemos cuántas veces se repetirá el ciclo.
 */

let turns = 1;

while (turns <= 5) {
  console.log("Girar el lápiz en el sacapuntas.");
  console.log(`Este es el giro No. ${turns}`);
  turns++;
}
console.log("Lapiz afilado.");

// The While Loop
// The while loop continues to execute as long as the specified condition is true.

let num = 11;

while (num <= 10) {
  console.log(`${num} * 7 = ${num * 7}`);
  num++;
}

// The Do...While Loop
// The do...while loop is similar to the while loop, but it guarantees that
// the code block will be executed at least once before checking the condition.

do {
  console.log(`${num} * 7 = ${num * 7} (do...while)`);
  num++;
} while (num <= 10);

// The For Loop
// The for loop is used when the number of iterations is known beforehand.
// For loops consist of three parts: initialization, condition, and increment/decrement.

for (let i = 1; i <= 10; i++) {
  console.log(`${i} * 7 = ${i * 7} (for loop)`);
}

// When to use each loop?
// Use a while loop when the number of iterations is unknown and depends on a condition.
// Use a do...while loop when you want to ensure that the code block is executed at least once.
// Use a for loop when the number of iterations is known beforehand.

/**
 * Excersise 1: Create a script that prints if an
 * number is even or odd from 1 to 20.
 */

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even!`);
  } else {
    console.log(`${i} is odd!`);
  }
}

/**
 * Excersise 2: Create a script capable of sum every value of a variable and show the final result after 100 iterations.
 */

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i; Acumulator (sum = sum + i)
  console.log(`Iteration ${i}: Sum is ${sum}`);
  if (i == 100) {
    console.log(`The value of sum is: ${sum}`);
  }
}

/** 
 * Practice.
 * Create a script that counts numbers from 20 to 0 and shows a custom message
 * if the number is multiple of 5.
 */

for (let i = 20; i >= 0; i--) {
  console.log(`This is the ${i} iteration`);
  
  if (i % 5 === 0 && i !== 0) {
    console.log(`Congrats this number is multiple of 5`);
  } 
}
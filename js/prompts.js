/**
 * alert() and prompt()
 * - alert(): Allows to show a message into a dialog box
 * - prompt(): Allows to capture user input from a dialog box
 */

let userName = prompt("What is your name?");
alert(`Hello, ${userName}! Welcome to the JavaScript course.`);
console.log(typeof userName); // Prompt always returns strings

/**
 * How to deal with prompt returning strings if we need numbers?
 * - parseInt: Converts a string into an integer number
 * - parseFloat: Converts a string into a floating-point number
 */
let num = prompt("Type a number");
num = parseFloat(num);

for (let i = num; i >= 0; i--) {
  console.log(`This is the ${i} iteration.`);

  if (i % 5 === 0 && i !== 0) alert(`Congrats! ${i} is multiple of 5`);
  console.log(`${i} is multiple of 5`);
}

/**
 * When to use alert() and console.log()?
 *
 * alert is for displaying info that needs to reach the
 * final user.
 *
 * console.log() is used for debugging. For print messages
 * intended to be seen only by developers.
 */
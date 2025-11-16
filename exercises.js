/**
 * Even more exercises
 * 
 * 1. Declare two variables, a = 10 and b = 3.
 * Calculate the remainder when a is divided by b and store it
 * in a variable called remainder.
 * 
 * 2. Declare a variable age = 25.
 * Write an expression using a comparison operator to check if age
 * is greater than or equal to 18. Store the result in a variable calle
 * isAdult.
 * 
 * 3. Declare a boolean variable isRaining = false.
 * Use the logical NOT operator (!) to reverse its value and store
 * the result in shouldStayInside.
 * 
 * 4. Declare a variable counter = 5. Use the post-increment operator (++)
 * once. What is the value of counter after the operation?
 * 
 * 6. Calculate the result of the expression: (5 * 4) + (20 / 5) - 3
 * WITHOUT executing the script.
 * 
 * 7. Declare numString = "5" and numInt = 5. Compare them first using the
 * loose equality operator (==) and then using the strict equality operator
 * (===). Store the results in looseResult and strictResult.
 * 
 * 8. Determine the final value of x after the following operations:
 * let x = 10;
 * x = x * 2 + 5 % 3;
 * WITHOUT executing the script.
 * 
 * 10. Determine if an integer year = 2024 is a leap year using only operators.
 * Other forms of code are not allowed. :)
 */

//1
let a=10
let b=3

console.log("b % a=", b % a);
let remainder = b % a 
console.log(`el resto es: ${remainder}`);

//2
let age=25
let isadult = age >= 18
// console.log("Is a greater than or equal to", age >= 18);
console.log(`${isadult}`);

//3
let isRaining= false
let shouldStayInside= !isRaining
console.log(`${shouldStayInside}`);

//4
let counter= 5
counter++
console.log(`The counter value is: ${counter}`);

//6
//(5 * 4) + (20 / 5) - 3
//20 + 4 - 3
//24 - 3
//21 
let result = (5 * 4) + (20 / 5) - 3;
console.log("Result of expression:", result);

//7
let numString="5";
let numInt=5
let looseResult=(numString == numInt);
let strictResult=(numString === numInt);
console.log("loose equality:", looseResult);
console.log("strict equality:", strictResult);

//8
let x=10
x= x * 2 + 5 % 3;
console.log("final value of x:", x);

//10
let year=2024
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log("is a leap year?", isLeap);
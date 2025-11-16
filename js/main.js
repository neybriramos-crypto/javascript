//Print "Hello world" to the console (COMENTARIO 1 LINEA)

/**COMENTARIO MULTILINEA 
 * 
 * 

console.log("Hello world");

//VARIABLES AND DATA TYPES

//STRING
let firstName="neymar"
console.log("Nice to meet you", firstName)

//INTEGER
let x=10
let y=18
console.log("the sum of x & y is:", x+y)

//FLOAT
x=18.9
console.log("Now, the sum of x & y is:", x+y)

/**Extra point - Low typing demostration
firstName = 10
console.log("Now firstName is:", firstName)

//BOOLEAN (Only accepts two possible values: true or false)
let isJavaScriptFun = true
console.log("Is JavaScript fun?", isJavaScriptFun)

// Undefined
let z
console.log("The value of z is:", z)

// Some ways to print variables and strings together

// Comma separation
console.log("Hi! My name is", firstName + ". I am", y, "years old.")

// String concatenation
console.log("Hi! My name is " + firstName + ". I am " + y + " years old.")

// Template literals (Template strings: ` `)
// Spanish layout: AltGr (Alt derecho + })
// English layout: ` (left of 1 key)
console.log(`Hi! My name is ${firstName}. I am ${y} years old.`)

// Operators
// Aritmetic operators: + - * / % ++ -- 

// Basic arithmetic operations
let a = 10
let b = 3
console.log("a + b =", a + b)
console.log("a - b =", a - b)
console.log("a * b =", a * b)
console.log("a / b =", a / b)

// Modulus operator (Remainder of a division)
a = 2
b = 2
console.log("a % b =", a % b)


// Increment and Decrement operators
a = 10
b = 5

a++ // Allows to increase the value of a by 1
console.log("Now, a =", a)

b-- // Allows to decrease the value of b by 1
console.log("Now, b =", b)

// Bonus: Replicate increment with addition
a = a + 1
console.log("Again, now a =", a)

// Numeric Comparison operators: == != > < >= <=

a = 10
b = 5
c = 10
console.log("Is a equal to b?", a == b)
console.log("Is a different from b?", a != b)
console.log("Is a greater than b?", a > b)
console.log("Is a less than b?", a < b)
console.log("Is a greater than or equal to c?", a >= c)
console.log("Is a less than or equal to c?", c <= b)

// Logical operators: && (AND) || (OR) ! (NOT)
// - AND (&&): Returns true if both operands are true
// - OR (||): Returns true if at least one operand is true
// - NOT (!): Inverts the value of a boolean

let isSunny = true
let iHaveEnergy = false
console.log("Is it a good day for a walk?", isSunny && iHaveEnergy)

let iFeelTired = true
let iFeelThirsty = false
console.log("Should I drink a cup of coffee?", iFeelTired || iFeelThirsty)

let doILikeCoding = false
console.log("Do I like coding?", !doILikeCoding)

// JavaScript-specific operators
// Comparison operator: === !==
// - Strict equality (===): Compares both value and type
// - Strict inequality (!==): Compares both value and type for inequality

let num1 = 5       // Integer
let num2 = "5"     // String
console.log("Is num1 strictly equal to num2?", num1 === num2)
console.log("Is num1 strictly different from num2?", num1 !== num2)*/








// Exercise No. 1
// Script made with 💖 by Daniel Miranda
let m = 7;
let n = 3;
console.log("The multiplication of m and n is: ", m * n); // Approved

// Exercise No. 2
// Script made with 💖 by Santiago Mejías
let edad = 70;
console.log(`La edad es: ${edad}`); // Approved

// Exercise No. 3
// Script made with 💖 by Bryant Facenda
// let iamHunger = true;
// let iamGoing = false;
// let iWantCoffee = false;
// let result1 = iamHunger && iamGoing;
// let result2 = iamHunger || iamGoing;
// let result3 = !iWantCoffee;
// console.log(result1);
// console.log(result2);
// console.log(result3);

// Changes made by the Instructor
let iAmHunger = true;
let iAmGoingToTheStore = true;
let iWantCoffe = false;

console.log(
  `I'm on my way to have some lunch? ${
    iAmHunger || iWantCoffe && iAmGoingToTheStore
  }`
);

// Exercise No. 4
// Script made with 🥔 by Angélica Rivas
let number = 2.14159265359;
console.log(`Is (number + 1) greater than pi? ${number++ < 3.14159265359}`);


// Typeof Operator
// The typeof operator is used to determine the data type of a variable or an expression.
// It returns a string indicating the type of the operand.
// The possible return values are: "string", "number", "boolean", "undefined", "object", "function", and "symbol", and all of them are strings.

let variable1 = "Hello, World!";
let variable2 = 42;
let variable3 = true;
let variable4;

console.log(`The type of variable1 is: ${typeof variable1}`);
console.log(`The type of variable2 is: ${typeof variable2}`);
console.log(`The type of variable3 is: ${typeof variable3}`);
console.log(`The type of variable4 is: ${typeof variable4}`);

// Data type Null
let variable5 = null; // Returns 'object' due to a historical bug in JavaScript

console.log(`The type of variable5 is: ${typeof variable5}`);

// A bug is an error, flaw, failure, or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.
// Howerver, they are remarkable for not interfering with the normal functionality of the language.
console.log(typeof(variable5) === "object"); // This will return true
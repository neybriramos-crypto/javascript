const message = "Hello! I'm a constant";
console.log(message)

// 1. Declare three variables to store numbers and compare them to find the largest
let a = 10, b = 25, c = 15;
if (a >= b && a >= c) {
  console.log(`The largest number is a: ${a}`);
} else if (b >= a && b >= c) {
  console.log(`The largest number is b: ${b}`);
} else {
  console.log(`The largest number is c: ${c}`);
} 

// 2. Declare three variables to store number and determine what kind of triangle they would be.
let aa=10 , bb=15 , cc=20;

if (aa === bb && bb === cc) {
  console.log("Triangulo equilatero");
}else if (aa===bb || bb===cc || aa===cc) {
  console.log("Triangulo isoceles");
}else {
  console.log("Triangulo escaleno");
}


// 3. Create a simple login system that compare an username and password with constant values and allows the access if both coincide
// Optional: Generate a customized message based on which value fails, if any.
const username= "ney"
const password="Brayan"

if (username == "neymar" && password== "Brayan") {
  console.log("Acceso concedido");
}else{
  console.log("Acceso denagado");
}


// 4. Determine tax bracked based on income according to:
// - Less or equal to 1000: 0% tax
// - Less or equal to 3000: 10% tax
// - Less or equal to 6000: 20% tax
// - Everything above: 30% tax

let income= 10000
let tax= 0

if (income <= 1000) {
  console.log ("No tax");
}else if (income <= 3000){
  tax= income * 0.1
  console.log(tax)
}else if (income <= 6000){
  tax= income * 0.2
  console.log(tax)
}else if (income > 6000){
  tax= income * 0.3
  console.log(tax)
}
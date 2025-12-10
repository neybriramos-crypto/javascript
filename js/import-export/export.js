/**
 * import and export in vanilla javascript
 * 
 * import allows you to bring in functions, objects, or primitives from other modules.
 * 
 * export allows you to share functions, objects, or primitives with other modules.
 * 
 * a module is a simply a jacascripy file that contains code you want to reuse in otrher files.
 */


// Exporting a function
export function greet(name){
  return `Hello, ${name}`;
}

//exporting a constant
export const PI = 3.14159;

//exporting a class
export class Circle{
  constructor(radius){
    this.radiis = radius;
  }
  area(){
    return PI * this.radius * this.radius;
  }
}

//exporting a data structure
export const users = [
  {id: 1, name:'Alice'},
  {id: 2, name:'Alice'},
  {id: 3, name:'Alice'},
  {id: 4, name:'Alice'},
]


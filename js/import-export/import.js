/**
 * import and export in vanilla javascript
 * 
 * import allows you to bring in functions, objects, or primitives from other modules.
 * 
 * export allows you to share functions, objects, or primitives with other modules.
 * 
 * a module is a simply a jacascripy file that contains code you want to reuse in otrher files.
 */

// importing from export.js
import {greet, PI, Circle, Users} from "./export.js";

//using the imported function
console.log(greet("World")); //output: Hello, World
/**
 * Mini proyecto
 * 
 * Crear un script de JS que simule un cajero automático :D
 * El cajeros debe poseer las siguientes características y
 * permitir las siguientes operaciones:
 * 
 * - Solicitar al usuario una entrada que indique la operación a realizar.
 *   Las posibles operaciones son:
 *      1) Depositar fondos.
 *      2) Retirar fondos.
 *      3) Mostrar balance.
 *      4) Culminar la sesión. 
 * 
 * - Las opciones "depositar" y "retirar" deben incrementar y reducir respectivamente
 * una variable destinada a almacenar el balance del usuario, el cual debe poder ser
 * visualizado a través de la opción "mostrar".
 * 
 * - La opción "culminar la sesión" termina el script.
 * 
 * - El programa debe responder correctamente si el usuario ingresa una opción
 * inválida y solicitar un nuevo ingreso de la información.
 * 
 * - Utilizar prompt() para capturar entradas; alert() para manejar salidas y
 * console.log para crear el registro del desarrollador.
 * 
 * - Opcional (LEYENDAS I):
 * Generar alertas adecuadas en caso de que el usuario intente retirar más de lo
 * que posee en su cuenta.
 * 
 * - Opcional (LEYENDAS II):
 * Diseñar pequeños algoritmos que validen si el usuario está
 * introduciendo números y que den una respuesta adecuada en caso de que no lo haga.
 * 
 * Fecha tentativa: 16-11-2025
 */
let balance = 0;
let sessionActive = true;

alert("¡Bienvenido al Cajero Automatico!");

while (sessionActive) {
  // Solicitar operacion
  let opcion = prompt(
    "Seleccione una operacion:\n" +
    "1) Depositar fondos\n" +
    "2) Retirar fondos\n" +
    "3) Mostrar balance\n" +
    "4) Culminar sesion"
  );

  console.log("El usuario selecciono la opcion:", opcion);

  // Validacion de ingreso de numero
  if (isNaN(opcion)) {
    alert("Entrada invalida. Debe ingresar un numero del 1 al 4.");
    continue; 
  }

  opcion = Number(opcion);

  switch (opcion) {
    case 1: // Depositar
      let deposito = prompt("Ingrese la cantidad a depositar:");
      console.log("Intento de depósito:", deposito);

      if (isNaN(deposito) || Number(deposito) <= 0) {
        alert("Cantidad inválida. Debe ingresar un número positivo.");
      } else {
        deposito = Number(deposito);
        balance += deposito;
        alert(`Depósito exitoso. Nuevo balance: $${balance}`);
      }
      break;

    case 2: // Retirar
      let retiro = prompt("Ingrese la cantidad a retirar:");
      console.log("Intento de retiro:", retiro);

      if (isNaN(retiro) || Number(retiro) <= 0) {
        alert("Cantidad inválida. Debe ingresar un número positivo.");
      } else {
        retiro = Number(retiro);

        // verificar fondos
        if (retiro > balance) {
          alert("Fondos insuficientes.");
        } else {
          balance -= retiro;
          alert(`Retiro exitoso. Nuevo balance: $${balance}`);
        }
      }
      break;

    case 3: // Mostrar balance
      alert(`Su balance actual es: $${balance}`);
      console.log("Balance mostrado:", balance);
      break;

    case 4: // Salir
      alert("Gracias por usar el cajero. ¡Hasta luego!");
      sessionActive = false;
      break;

    default:
      alert("Opcion invalida. Elija un numero entre 1 y 4.");
      break;
  }
}
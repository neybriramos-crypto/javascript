/**
 * Mini Proyecto
 * 
 * Crear un juego en JS que se ejecute completamente en consola y
 * que cumpla con las siguientes características:
 * 
 * El juego debe simular una auto batalla entre múltiples personajes.
 * 
 * Para la creación de los personajes, se deberá crear una clase
 * padre la cual cuente con las siguientes propiedades:
 * - hp: Valor numérico que representa la vida de los personajes.
 * - atk: Valor numérico que representa el poder de ataque.
 * - def: Valor numérico que representa el poder de defensa.
 * - spd: Valor numérico que representa la velocidad del personaje.
 * 
 * Nota: Todos los valores (salvo hp) deberán ser un valor
 * aleatorio entre 1 y un valor máximo definido por el desarrollador.
 * 
 * Además de una serie de clases hijas (mínimo 3) que representen
 * a cada tipo de personaje (Ej.: Guerrero, Mago, Arquero, etc.).
 * 
 * Cada clase hija deberá heredar las propiedades del padre y poseer
 * habilidades (mínimo 3) únicas que puedan ser utilizadas durante
 * la batalla.
 * 
 * El flujo del juego debe ser el siguiente:
 * 1. Crear múltiples personajes de diferentes clases y almacenarlos
 *    en un array.
 * 2. Iniciar la batalla donde los personajes se enfrenten entre sí
 *    de forma automática. El orden de ataque debe basarse en la
 *    propiedad spd (velocidad) de cada personaje.
 * 3. Durante cada turno, un personaje debe atacar a otro 
 *    seleccionado al azar. El daño infligido debe calcularse usando
 *    las propiedades atk y def de los personajes involucrados,
 *    seleccionando una de las habilidades disponibles al azar.
 * 4. Si un personaje pierde toda su hp, debe ser eliminado del    
 *    juego.
 * 5. La batalla continúa hasta que solo quede un personaje en pie,
 *    quien será declarado el ganador.
 * 
 * El juego debe mostrar en consola el progreso de la batalla,
 * incluyendo los ataques realizados, el daño infligido, los hp
 * restantes de cada personaje y finalmente el ganador.
 * 
 * Fecha: 26/11/2025;
 */


function randomStat(max) {
  return Math.floor(Math.random() * max) + 1;
}

class Personaje {
  constructor(nombre, hp = 100, maxAtk = 20, maxDef = 15, maxSpd = 10) {
    this.nombre = nombre;
    this.hp = hp;//vida
    this.atk = randomStat(maxAtk);//ataque
    this.def = randomStat(maxDef);//defensa
    this.spd = randomStat(maxSpd);//velocidad
  }

  recibirDanio(danio) {
    this.hp -= danio;
    if (this.hp < 0) this.hp = 0;
  }

  estaVivo() {
    return this.hp > 0;
  }
}

class Guerrero extends Personaje {
  constructor(nombre) {
    super(nombre);
    this.habilidades = ["Golpe fuerte", "Embate", "Defensa férrea"];
  }

  usarHabilidad() {
    let habilidad = this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    let bonus = habilidad === "Golpe fuerte" ? 5 : habilidad === "Embate" ? 3 : 0;
    return { habilidad, bonus };
  }
}

class Mago extends Personaje {
  constructor(nombre) {
    super(nombre);
    this.habilidades = ["Bola de fuego", "Rayo", "Escudo mágico"];
  }

  usarHabilidad() {
    let habilidad = this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    let bonus = habilidad === "Bola de fuego" ? 6 : habilidad === "Rayo" ? 4 : 0;
    return { habilidad, bonus };
  }
}

class Arquero extends Personaje {
  constructor(nombre) {
    super(nombre);
    this.habilidades = ["Flecha precisa", "Disparo múltiple", "Evasión"];
  }

  usarHabilidad() {
    let habilidad = this.habilidades[Math.floor(Math.random() * this.habilidades.length)];
    let bonus = habilidad === "Flecha precisa" ? 4 : habilidad === "Disparo múltiple" ? 3 : 0;
    return { habilidad, bonus };
  }
}

let userName = prompt("¿Cuál es tu nombre?");
alert(`Hola, ${userName}! Bienvenido a la auto batalla.`);

let personajes = [
  new Guerrero("Conan"),
  new Mago("Merlín"),
  new Arquero("Legolas"),
  new Guerrero("Xena"),
  new Mago("Gandalf")
];

console.log("=== Personajes iniciales ===");
personajes.forEach(p => {
  console.log(`${p.nombre} (HP:${p.hp}, ATK:${p.atk}, DEF:${p.def}, SPD:${p.spd})`);
  alert(`${p.nombre} entra en la batalla (HP:${p.hp}, ATK:${p.atk}, DEF:${p.def}, SPD:${p.spd})`);
});

function batalla(personajes) {
  while (personajes.length > 1) {
    personajes.sort((a, b) => b.spd - a.spd);

    for (let atacante of personajes) {
      if (!atacante.estaVivo()) continue;

      let posibles = personajes.filter(p => p !== atacante && p.estaVivo());
      if (posibles.length === 0) break;
      let objetivo = posibles[Math.floor(Math.random() * posibles.length)];

      let { habilidad, bonus } = atacante.usarHabilidad();
      let danio = Math.max(0, atacante.atk + bonus - objetivo.def);

      objetivo.recibirDanio(danio);

      let mensaje = `${atacante.nombre} usa ${habilidad} contra ${objetivo.nombre} e inflige ${danio} de daño. HP restante de ${objetivo.nombre}: ${objetivo.hp}`;
      console.log(mensaje);
      alert(mensaje);

      if (!objetivo.estaVivo()) {
        let derrota = `${objetivo.nombre} ha sido derrotado!`;
        console.log(derrota);
        alert(derrota);
        personajes = personajes.filter(p => p.estaVivo());
      }

      if (personajes.length === 1) break;
    }
  }

  let ganador = 'El ganador es ${personajes[0].nombre} con ${personajes[0].hp} HP restante!';
  console.log(ganador);
  alert(ganador);
}

batalla(personajes);

//Ejercicio 1
let cola = [
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
];

let colaColores = [];
let colaNones = [];

cola.forEach((color, i) => {
  if (i % 2 == 0) {
    colaColores.push(color);
  } else {
    colaNones.push(color);
  }
});

console.log(`Esta es la cola par ${colaColores}`);
console.log(`Esta es la cola impar ${colaNones}`);

//Ejercicio2
function retirarColados(cola) {
  const colaInicial = [...cola];
  const colaFinal = [];

  while (cola.length > 0) {
    const persona = cola.shift();

    if (persona.ticket) {
       colaFinal.push(persona);
    } else {
      console.log(`Se retiró a ${persona.user} de la cola.`);
    }
  }

  return { colaInicial, colaFinal };
}

const colaColados = [
  { user: "User1", ticket: true },
  { user: "User2", ticket: true },
  { user: "User3", ticket: false },
  { user: "User4", ticket: true },
  { user: "User5", ticket: false },
  { user: "User6", ticket: false },
  { user: "User7", ticket: true },
  { user: "User8", ticket: true },
  { user: "User9", ticket: true },
  { user: "User10", ticket: false },
  { user: "User11", ticket: true },
];

const resultado = retirarColados(colaColados);

console.log("Cola Inicial:");
console.log(resultado.colaInicial);
console.log("Cola sin colados:");
console.log(resultado.colaFinal);

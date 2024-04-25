// El nombre del archivo es en "teoria" indiferente
// typescript es un superset de javascript

// Hello World
// La consola es solamente una herramienta de desarrollo

// Yo puedo poner un comentario monlinea
/**
 * Un comentario multilnea
 * No deberia ser tan importante
 */

// console.log("Hello World"); // Loggear -> log
// console.log("Hola mundo!");
// console.log("Otro idioma :)");

// Tipos de datos primitivos

// Strings | Cadenas de texto
// console.log("Una cadena de texto un apostrofe's"); // String
// console.log('Cuando dentro de nuestro texto "Comillas normales"');
// console.log(`Tiene un uso especifico`);

// Integer | Numero
// console.log(10);
// console.log(20);

// Float | Numero decimal
// console.log(20.1);
// console.log(0.13);

// Booleanos | Si o No / Verdadero o falso
// console.log(false);
// console.log(true);

// Null | Nulo o inexistente
// console.log(null);

// Undefined | No definido
// console.log(undefined);

// Tipos de dato Objetos | Complejos

// Array | Arreglos/Listas [] ->  Corchetes
// En programacion las listas|Arreglos empiezan en 0
// console.log(["Gustavo", "Valentina", "Angie", "Omar", "Carlos"]);

// Objects | Objetos / Objetos literales {} -> Llaves / Curly Braces

// { key: value }
// { llave: valor }
// { propiedad: valor }
// console.log({
//   name: "Gustavo Random",
//   age: 20,
//   isStudent: true,
//   avgGrade: 9.8, // 10
// });

// console.log({
//   brand: "Chevrolet",
//   model: "Aveo",
//   kilometraje: 300000,
//   price: 4000,
//   cauchos: {
//     rin: 17,
//     medida: 20,
//     estadoCauchos: ["97%", "90%", "40%", "50%"],
//   },
//   locacion: "Maturin",
// });

// Una funcion es una serie de instrucciones
// Que se usan para realizar una tarea en especifico
// Que posiblemente queramos repetir/reutilizar
function freirPapas() {
  // Agarrar las papas
  // pelar las papas
  // etc etc
}

// camelCase
// laPrimeraPalabraEnMinusculaElRestoConLaPrimeraLetraEnMayuscula
// Sepamos cual es la convencion de nombrado

// NO LO USEN POR FAVOR
var nombreDeLaApp = "Twitter";

// console.log(nombreDeLaApp);
// console.log(nombreDeLaApp);
// console.log(nombreDeLaApp);

nombreDeLaApp = "X"; // Reasigno el valor a la variable
// console.log(nombreDeLaApp);
// console.log(nombreDeLaApp);
// console.log(nombreDeLaApp);

// Let -> Forma moderna de declarar una variable
let nombreDeDominio = "https://twitter.com";

// console.log(nombreDeDominio);

nombreDeDominio = "https://x.com";
// console.log(nombreDeDominio);

// constantes -> Variable no modificable
const informacionDePago = "Datos bancarios mixtos de twitter";

// console.log(informacionDePago);

let deuda = 0;
// console.log("Deuda inicial", deuda);
// Me compre un monitor de 32 pulgadas a credito -> 10
deuda = deuda + 10;

// console.log("Nueva deuda", deuda);

// Me compre un mouse gamer rgb 200
deuda = deuda + 200;
// console.log("Nueva deuda", deuda);

// Pago de 50 a la deuda
deuda = deuda - 50;
// console.log("Nueva deuda", deuda);

// Dividir la deuda
deuda = deuda / 2; // En dos pagos
// console.log("Cada pago queda en", deuda);

// Multiplicar la deuda
deuda = deuda * 2;
// console.log("Deuda nueva", deuda);

// deuda = deuda % 2;
// console.log("Modulo", 7 % 2);

deuda++;
// console.log(deuda);

++deuda;
// console.log(deuda);

--deuda;
// console.log(deuda);

deuda--;
// console.log(deuda);

// Shorthand -> Un Atajo
// Opera y guarda
deuda += 2;
// console.log(deuda);

deuda += 10;
// console.log(172);

deuda -= 10;
// console.log(deuda);

deuda *= 2;
// console.log(deuda);

deuda /= 10;
// console.log(deuda);

// Operadores de comparacion

// Igualdad
// UN simbolo de igual -> Asignacion
const nombreUsuario = "Gustavo";
const nombreEnBaseDeDatos = "Gustavo";

// Comparacion base -> Compara valores pero no tipos de dato
console.log(nombreUsuario == nombreEnBaseDeDatos);

// Comparador estricto -> Compara valor y tipo de dato
console.log(2 === "2");

// Diferencia
const password = "123456";
const passwordCompare = "1234567";

// En programacion el simbolo de exclamacion significa lo contrario
console.log(password != passwordCompare);

// Mayor o menor que
console.log(10 > 5);
console.log(10 < 5);

// Mayor|Menor o igual que
console.log(10 <= 11);
console.log(10 >= 11);

// Operadores Logicos

let edadMinimaParaEntrar = 18;
let edadMaximaParaEntrar = 50; // Boliche/ disctoca
let edadDeCliente = 20;

// && -> Sirve para evaluar dos cosas que SE TIENEN que cumplir
console.log(
  edadDeCliente >= edadMinimaParaEntrar && edadDeCliente < edadMaximaParaEntrar
);

// || -> sirve para evaluar si alguna de las condiciones se cumplen
console.log(
  edadDeCliente >= edadMinimaParaEntrar || edadDeCliente <= edadMaximaParaEntrar
);

const mensajes = {
  menorDeEdad: "No puedes entrar, vete pa' tu casa",
  mayorDeEdad: "Bienvenido! Disfruta concientemente",
  muyMayorDeEdad: "Señor vaya para su casa",
};

console.log("Bienvenido a 4geeks Bar");

// Condicional
if (edadDeCliente < edadMinimaParaEntrar) {
  console.log(mensajes.menorDeEdad);
} else if (edadDeCliente > edadMaximaParaEntrar) {
  console.log(mensajes.muyMayorDeEdad);
} else {
  console.log(mensajes.mayorDeEdad);
}

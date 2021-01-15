/**
 * Ejercicio #2: 

 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 */

/*
  EJERCICIO A: --------------------------------------------
  Los botones del 0 al 9 ya tienen el evento 'click'
  vinculado y que llama a la función botonClickeado
  con el numero index del recorrido que se está haciendo.

  Tu trabajo, es hacer que cuando se llame a la función
  se loguee el mensaje a la consola:

  "Hiciste click en el botón N"
  
  Tarea: Escribe el cuerpo de la función botonClickeado
*/

// Tu código aquí
function botonClickeado(i) {
  function numero() {
   return console.log(`Hiciste click en el botón ${i}`)
 }
  return numero;
}

// BOILERPLATE
var botones = document.querySelectorAll(".one button");
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', botonClickeado(i))
}

/*
  EJERCICIO B: --------------------------------------------
  Al hacer click en el botón "Incrementar"

  Tu trabajo, hacer que la función "incrementarFunc"
  permita incrementar el conteo comenzando desde 0.

  NO USAR VARIABLES GLOBALES, tienes que usar closure.

  "Hiciste click en el botón N"
  
  Tarea: Escribe el cuerpo de la función incrementarFunc
*/

// Tu código aquí
function incrementarFunc() {
  let a = 0;
  function actualizar() {
    return a += 1;
  }
  return actualizar;
}

// BOILERPLATE
const actualizar = incrementarFunc();
const incrementar = document.querySelector("#incrementar");
incrementar.addEventListener("click", function() {
  this.innerText = "Incrementar " + actualizar();
});

/*
  EJERCICIO C: --------------------------------------------
  El usuario ingresa el nombre y al hacer click debe inprimirlo en el DOM.
  
  Tarea: Arreglar el codigó que no funciona. No se esta imprimiento el valor del input
  Condicions: NO puedes usar "var".
*/

const button = document.querySelector("#mostrar");
const input = document.querySelector("#nombre");
const resultado = document.querySelector("#resultado");
let texto = "Aqui sale el resultado";
resultado.innerText = texto;

button.addEventListener("click", function() {
  if (input.value !== "") {
    texto = input.value;
  }
  resultado.innerText = texto;
});

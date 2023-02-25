// una funcion es un bloque donde van a encapsular instrucciones para poder usar luego.
//en el juego teniamos el MAIN method. Sería el arhivo

let nombre = "mariano";
//FUNCIONES

function sumar() {
  //delimita el bloque de codigo
  let a = 2;
  let b = 3;
  let result = a + b;
  return result;
  //si no hay return, va a dar undefined.
}
//para invocarla tengo que nombrarla y ponerle ().
//Casi siempre se le asigna una variable
let resultadoSuma = sumar();
console.log(resultadoSuma);

// 2 tipos de funciones: DECLARADAS Y EXPRESADAS
//DECLARACION ES EL ARMADO y EJECUCION ES LA INVOCACION DE LA MISMA.

//PARAMETROS: son como variables que viven dentro de la funcion ()

function sumar2(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

//por fuera de la funcion le daremos el argumento que son los valores que asumiran los parametros
let resultadoSuma2 = sumar2(223, 5);
//el primer parametro va a tomar el valor del primer parametro y asi sucesivamente. Gracias a los parametros es que se vuelve reutilizable la funcion.
console.log(resultadoSuma2);

function saludar(nombreDeUsuario) {
  return `Hola ${nombreDeUsuario}, como estás`;
}

let saludo = saludar(`Maria`);
console.log(saludo);
//funciones expresadas arrancan con let, mientras que las declaradas son las comunes.
//FUNCIONES EXPRESADAS O ANONIMAS (NO TIENEN NOMBRE) lo que tiene nombre es la variable
//const multiplicar = function (n1, n2) {
// return n1 * n2;
//};
//HOISTING
//let res = restar(console.log(res));
//function restar() {
//  return 10 - 4;
//}
//funciona aunque llamemos a la funcion antes de que exista porque las funciones declaradas son llamadas al principio de la funcion y las disponibiliza a nivel global.
//LA FUNCION EXPRESADA NO TIENE PROCESO DE HOISTING POR LO QUE DEBEN ESTAR ANTES DE SER LLAMADAS

//EXPRESADAS: COMUNES Y ARROW FUNCTIONS
//NORMAL
//const dividir = function(){
//}

//ARROW FUNCTION: ES LA QUE ESTAREMOS UTILIZANDO

const dividir = (num1, num2) => {
  return num1 / num2;
};
let a = dividir(234, 34);
console.log(dividir(10, 5));
console.log(a);

//EJERCICIO 4 playground
const anterior = (numero) => {
  return numero - 1;
};
let res1 = anterior(20);
console.log(res1);

const triple = (numero) => {
  return numero * 3;
};
let res2 = triple(5);
console.log(res2);

//USANDO FUNCIONES DENTRO DE LA FUNCION
const anteriorDelTriple = (numero) => {
  //let resultadoTriple = triple(numero);
  //let resultadoAnterior = anterior(resultadoTriple);
  //return resultadoAnterior;
  return anterior(triple(numero));
  //JS LLama de adentro hacia afuera. Estamos haciendo return de "el anterior del triple"
};
let res3 = anteriorDelTriple(40);
console.log(res3);

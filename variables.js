//VARIABLES: COMO UNA CAJA QUE GUARDAN ALGO. CONSTAN DE 4 PARTES:
// PALABRAS RESERVADAS (PROPIAS DE JS EN ESTE CASO. EJ.: VAR, LET)
//LET O CONST SON LOS 2 TIPOS DE VARIABLES (PALABRAS RESERVADAS) 2. LUEGO EL NOMBRE QUE QUIERO QUE TENGA ESA CAJA
//let permite que cambie el valor, const no puede cambiar su valor.
// 3. Signo = es de asignacion, no de comparacion. Quiere significar qué voy a giardar en esa caja.
//TIPOS DE DATOS
//OPERADORES
//una vez declarada la variable con let, con evocarla le podemos cambiar el valor
//si buscamos cambiar el valor de una const, nos va a dar error.
//Siempre se ejecuta de arriba para abajo.

let nombreDeUsuario = "Mariano";
//const apellido = "Perez";
nombreDeUsuario = "Pepito";
console.log(nombreDeUsuario);

//apellido = "GOnzalez" // No se puede porque fue declarado como const.

/*
TIPOS DE DATOS PRIMITIVOS:  String, Number, Booleanos, Undefined (Luego veremos mas complejos como Arrays)
 1) String: cadena de caracteres o de texto. let frase = "Hola como estás?"
 2) Number: ej let edad = 30 (sin "", si no se considera string). Pueden set enteros (integer)
    o con decimales (float)
*/
let edad = 30;
let precio = 12.2;
// 3) ANCHOR ----> Booleanos = boolean. Responden a true or false (palabras reservadas)
let estaLogeado = false;
// 4) ANCHOR ------> UNDEFINED. Es un tipo de dato "no definido". No hace falta poner "undefined"
// let email = undefined(no hace falta aclarar que no está definido)
let email;

//null (sin contenido) y el NaN (not a number)

// OPERADORES:
//+ : suma si son numericos, y concatena si son string.

let nombre = "Juancito";
let apellido = "Lopez";
console.log(nombre + " " + apellido);

//tipos de comillas inclinadas (backsticks) ```.
// ` me permite hacer interpolacion de variables insetandolas con ${variable} (TEMPLATE LITERALS)
let saludo = `Hola ${nombre}, cómo estás?`;
console.log(saludo);
//TODO LO QUE PONGAMOS DENTRO DE ${} es JS. Si ponemos solo numeros y suma los va a sumar.

//NUMEROS
let num1 = 10;
let num2 = 3;

let suma = num1 + num2;
let multi = num1 * num2;
let division = num1 / num2;
let resta = num1 - num2;
let modulo = num1 % num2;
//MODULO devuelve el resto. En este caso divide 10 dividido 3, sobra uno. El resto es 1. Sirve muchisimo para detectar si el numero es par, si devuelve decimal etc.

//OPERADORES DE COMPARACION
//OPERADORES LOGICOS

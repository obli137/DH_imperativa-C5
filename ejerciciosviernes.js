const dePulgadasACm = (pulgadas) => {
  return pulgadas * 2.54;
};
const respuesta = dePulgadasACm(40);
console.log(respuesta);

const aUrl = (palabra) => {
  return `http://www.${palabra}.com`;
};

console.log(aUrl("pepito"));

const admiracion = (palabra) => {
  return `¡¡¡${palabra}!!!`;
};
console.log(admiracion("PEPITO"));

const edadPerro = (edadHumano) => {
  return edadHumano * 7;
};
console.log(edadPerro(14));

const costoHora = (sueldo) => {
  return sueldo / 160;
};
console.log(costoHora(200000));

const imc = (peso, altura) => {
  return peso / (altura * altura);
};
console.log(imc(80, 1.8));

const aMayuscula = (palabra) => {
  return `${palabra}`.toUpperCase();
};
console.log(aMayuscula("pepito"));

const tipoDeDato = (dato) => {
  return typeof dato;
};
console.log(tipoDeDato("lalalal"));

let circunferenciaCirculo = (radio) => {
  return 2 * Math.PI * radio;
};
console.log(circunferenciaCirculo(2));

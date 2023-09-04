let getPrecioFinal = (numero, prefijo = "RX") => prefijo + numero;

//  Math.floor redondea hacia el numero entero anterior
let random = Math.floor(Math.random()*999);

let resultado = getPrecioFinal(random);

console.log("El robot se llama: " + resultado);


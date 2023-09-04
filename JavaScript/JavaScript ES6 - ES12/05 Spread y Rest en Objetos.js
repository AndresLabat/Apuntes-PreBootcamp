
const obj = {
    nombre: "John",
    edad: "32",
    ciudad: "Nueva York",
    direccion: "direccion"
}

//  REST (con desestructuracion):

const {nombre, edad, ...rest} = obj; 
// Aqui el rest son todos los parametros posteriores, se añadan o se quiten
console.log(nombre, edad, rest);
// me imprime todo lo que esta en rest, osease ciudad: "Nueva York", direccion: "direccion"

//  SPREAD (operador de propagacion):

const obj2 = {
    nombre: "John",
    edad: "32",
    direccion: "direccion"
}

const obj3 = {
    nombre: "John",
    edad: "32",
    trabajo: "programador"
}

const obj2Coned = {...obj2};
// Object {nombre: "John", edad: "32", direccion: "direccion"}
// Es exactamente igual, ha copiado todas sus propiedades actuales y futuras

const objUnion = {...obj2,...obj3};
// Object {nombre: "John", edad: "32", direccion: "direccion", trabajo: "programador"}
// los elementos que tiene comunes los deja como uno solo, y los distintos los añade.

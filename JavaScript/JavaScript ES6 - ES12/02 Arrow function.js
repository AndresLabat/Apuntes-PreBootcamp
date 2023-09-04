// ARROW FUNCTIONS son una manera de escribir funciones:
const Resta = (a,b) => { 
    return a - b;
}

// antes era:

function Suma(a,b){
    return a + b;
}

// ARROW FUNCTION "INLINE":
const nuevaResta = (a, b) => a - b;

// CON UN PARAMETRO UNICO:
const Elevar = a => a * a;

// antes era:
function ElevarDeNuevo(a){
    return a * a; 
}

// ARROW FUNCTION CON OBJETOS:
const Pokemon = nombre => {Pokemon: nombre}

// antes era:
function Pokemon(nombre){
    return {pokemon: nombre};
}

// EJEMPLO EN UN ARRAY:
let singulares = ["manzana", "banana", "naranja"];
let plurales = singulares.map(fruta => fruta + "s");
console.log(plurales);  //  ["manzanas", "bananas", "naranjas"]


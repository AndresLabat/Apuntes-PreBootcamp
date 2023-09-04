
// Creamos dos objetos de ejemplo:

var Ferrari = {
    marca: "Ferrari",
    modelo: "Serie x",
    anyoFabricacion: 2020,
    nPuertas: 4,
    deposito: 30,
    autonomia: 500
}

// las propiedades se declaran con ":" en vez de con un "="

var Tesla = {
    marca: "Tesla",
    modelo: "Serie 3",
    anyoFabricacion: 2018,
    nPuertas: 2,
    bateria: 5000,
    autonomia: 400
}

console.log(Ferrari.modelo);
console.log(Tesla.modelo);

function MejorAutonomia(coche1, coche2){
    if(coche1.autonomia > coche2.autonomia){
        console.log(coche1.marca);
    } else{
        console.log(coche2.marca);
    }
}

MejorAutonomia(Ferrari, Tesla);


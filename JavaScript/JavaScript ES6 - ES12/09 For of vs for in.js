
/* FOR OF (itera sobre objetos iterables, tipo Arrays, y nos da el valor de 
la posicion): */

let apellidos = ["Perez", "Garcia", "Gomez"];

// antes:
for(let i=0; i<apellidos.length; i++){
    console.log(apellidos); // Perez Garcia Gomez
}

// con el FOR OF:
for (let setname of apellidos){ //  setname es una variable que creamos nosotros, podria llamarse "i"
    console.log(setname);   // Perez Garcia Gomez
}

/* FOR IN (itera sobre todas las propiedades enumerables del objeto, dando el valor
de la clave de objeto a nuestra variable): */

let apelli2 = ["Perez", "Garcia", "Gomez"];

for(let index in apelli2){
    console.log("apellidos[" + index + "] =" + apelli2[index]);
}

/* con "index"(podria llamarse de cualquier forma) nos devuelve el indice 
del array, en este caso 0 1 2

/* con "apelli2[index]"" nos devuelve el valor de la posicion, en este caso
Perez Garcia Gomez */

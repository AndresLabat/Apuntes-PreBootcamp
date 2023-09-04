
//  REST(sirve para agregar parametros infinitos a una funcion o a una variable):

function sumar (a,b,...c){
    let resultado = a+b;

    c.forEach(function(n){resultado +=n;});

    return resultado;
}

console.log(sumar(1,2));    //  3
console.log(sumar(1,2,3,4,5));  //  15



function restar (a, b, ...c){
    resultado = a - b;

    c.forEach(function(n){resultado -=n;});

    return resultado;
}

console.log(restar(1,2));   //  -1
console.log(restar(1,2,3,4,5)); //  -13


// SPREAD (operador de propagacion):

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0]; // se declaran separado por una "," porque ambos con constantes

console.log(arr1, arr2); // usar "," dentro del parentesis es lo mismo que usar "+", los concatena   

// si quiero tener un Array de 2 posiciones que contenga los anteriores arrays:

const arr3 = [arr1, arr2];
console.log(arr3);

/* si por el contrario quiero tener un array que contenga todos los elementos seguidos
 de los dos anteriores usare el operador "Spread", en este caso tendra 10 posiciones */

 const arr4 = [...arr1, ...arr2];
 console.log(arr4);




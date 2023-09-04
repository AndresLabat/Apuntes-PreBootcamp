var saldo = 10;
var index = 0;

while(saldo > 0){   //  el bucle se va a ejecutar mientras se cumpla esta condicion
    index++;
    console.log("Nueva Partida nº " + index);
    saldo -= 1; //  Iterador (es la parte de bucle encargada de que termine)
}

console.log("Termino el Bucle");
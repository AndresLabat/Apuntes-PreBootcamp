function Suma(num1, num2){
    return num1 + num2;
}

function ElevarAlCuadrado(num1){
    return num1*num1;
}

console.log(Suma(1,2));
console.log(ElevarAlCuadrado(9));

// Podemos igualar una funcion a una variable:

var Elevar = function(num, exp){
    return num**exp;
}

console.log(Elevar(5,3));

// Podemos introducir un bucle en una funcion:

function DibujarTabla(table){
    for(var i=0;i<=10;i++){
        console.log(table + " * " + i + " = " + (table*i));
    }
}

DibujarTabla(3);
DibujarTabla(4);

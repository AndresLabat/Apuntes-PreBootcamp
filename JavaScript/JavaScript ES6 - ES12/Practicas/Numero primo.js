
// QUEREMOS QUE NOS DIGA SI EL NUMERO INTRODUCIDO ES UN PRIMO:

// Recogemos el nombre del usuario:
let nombre = prompt ("Hola, ¿Puedes decirme tu nombre?");

// Recogemos el numero que indica el usuario y lo transformamos a tipo Int (numero):
let num = parseInt(prompt("Ahora dime un numero para saber si es un numero primo"));

// esta funcion detectara si el numero es Primo:
const isPrime = num => {
    for (let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
    }

// En caso de que la funcion devuelva false:
if(!isPrime(num)){
    console.log(`Hola ${nombre}, el numero que has introducido, ${num}, NO es primo`);
} else{
    console.log(`Hola ${nombre}, el numero que has introducido, ${num}, SI es primo`);
}



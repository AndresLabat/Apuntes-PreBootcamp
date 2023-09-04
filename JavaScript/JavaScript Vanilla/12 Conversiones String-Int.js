
/*  int.TOSTRING():
transforma un numero (int) a un string */

let edad = 10;
edadString = edad.toString();
console.log(edadString);

// como ahora es un String, podemos recorrerlo con un "for of"
for(let variable of edadString){
    console.log(variable);
}

/*  PARSEINT(string):
transforma un string a numero (int), si se pudiera */

let nombreRobot = "589321";
let nombreRobotInt = parseInt(nombreRobot);

// como ahora es un Int, podemos sumarlo a otros numeros
let nuevoNumero = nombreRobotInt + 79;
console.log(nuevoNumero);
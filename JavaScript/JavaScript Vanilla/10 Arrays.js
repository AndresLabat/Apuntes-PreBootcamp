
var notas = [5,6,7,8,3,2,4,10,3];

// ACCEDER A UN ELEMENTO EN CONCRETO DEL ARRAY:
console.log(notas[2]); // es el numero 7 porque se empieza a contar desde cero

// CAMBIAR EL VALOR DE UN ELEMENTO DEL ARRAY:
notas[2] = 5; // ha substituido el 7 por el 5

// CANTIDAD DE ELEMENTOS DEL ARRAY:
console.log(notas.length); // 9, que son la cantidad de elementos del Array

//  RECORREMOS EL ARRAY:
for(var i = 0; i<notas.length; i++){
    console.log("Bucle nº " + i)
    console.log(notas[i]);
}

// ESTO NOS DIRA CUANTOS APROBADOS Y CUANTOS SUSPENDIDOS HAY:
for(var i=0; i<notas.length; i++){
    if(notas[i] < 5){
        console.log("Suspendidos");
    }else{
        console.log("Aprobados!");
    }
}

// METODOS DE ARRAYS:

// PUSH(introduce elementos en el array y los pone al final):
var nota = [];
var nAlumnos = 10;

for(var i = 1; i <= nAlumnos; i++){
    var newNotas = prompt("Introduce las notas nº " + i);
    notas.push(Number(newNotas));
    /* Number() transforma el dato de tipo String en un numero, el dato
    es de tipo String debido a que "prompt" siempre devuelve un String */
}

console.log(nota);

// .CONCAT(une dos Arrays):
var notas1 = [];
var notasClaseB = [3, 5, 8];
var numAlumnos = 6;

for(var i = 1; i <= numAlumnos; i++){
    var newNotaAlumno = prompt("introduce la nota nº " + i);
    notas1.push(Number(newNotaAlumno));
}

notas1 = notas1.concat(notasClaseB);
console.log(notas1);

// .JOIN(es la manera mas rapida de imprimir el array):
console.log(notas1.join(" - ")) // nos imprime los elementos del array separado por " - "

// .REVERSE() (le da la vuelta a los elementos del array):
notas1.reverse();

// .UNSHIFT() (introduce elementos en el array y los pone al principio):
var notasClaseC = [2, 9, 7];
var alumnoNuevo = notasClaseC.unshift(4);
console.log(notasClaseC);

// .SHIFT() (extrae el primer elemento de un array):
var notasClaseD = [10, 2, 3];
var alumnoNuevo2 = notasClaseD.shift();
console.log(alumnoNuevo2);
console.log(notasClaseD);

// .POP() (borra el ultimo elemento del array):
var notasClaseE = [10, 2, 3, 4];
notasClaseE.pop();
console.log(notasClaseE);

// .INCLUDES (comprueba si un determinado valor esta en un array): 
const array = [1, "string", true, 33]; 
console.log(array.includes("string")); // true 
console.log(array.includes(2)); // false 

// .FLAT (crea un array a partir de un array con arrays dentro):
const edades = [8,10,9,11, [13,18,20, [18,20,21]]];
console.log(edades);
// Resultado: (5) [8,10,9,11, Array(4)]
console.log(edades.flat());
// Resultado: (8)[8,10,9,11,13,18,20, Array(3)]

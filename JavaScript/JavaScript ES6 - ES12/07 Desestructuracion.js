//  DESESTRUCTURACION:

// desestructurar ARRAYS:

let arr = [1,2,3];
let [a,b,c] = arr;
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

console.log(a,b,c); //  1 2 3

// desestructurar OBJETOS:

// opcion 1:

let obj = {x:4, y:5, z:6};
let {x:d, y:e, z:f} = obj;

console.log(d,e,f); // 4 5 6

// opcion 2:

let objeto = {x:4, y:5, z:6};
let {x,y,z} = objeto;
// es lo mismo que esto => let {x:x, y:y, z:z} = objeto
// let x = objeto.x;
// let y = objeto.y;
// let z = objeto.z;
console.log(x,y,z); // 4 5 6


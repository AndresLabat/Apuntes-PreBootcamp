
// EJEMPLO 1:

//  se declaran como un objeto y usando "new Promise"
var hello = new Promise(function(resuelve, reject){
    resuelve("Hola");
})

hello.then(str => `${str} Mundo`)
.then(str => `${str}!`)
.then(str => console.log(str)); //  Hola Mundo!


// EJEMPLO 2: 

let saludo = new Promise(function(resuelto, error){
    resuelto("Te saludo");
})

saludo.then(sal => sal + " terricola")
.then(sal => `${sal}, vais a morir`)
.then(sal => console.log(sal));

//  TAMBIEN PODEMOS ENCADENAR PROMESAS (creando funciones que las contengan):

var resuelveteEnUno = () => new Promise((res, rej)=>{
    res(1);
})

var sumaUno = val => new Promise((resolve, reject) =>{
    resolve(val+1);
})

resuelveteEnUno().then(sumaUno)
                .then(sumaUno)
                .then(val => console.log(val)); //  3

/*  THEN (pasa por el then cuando se resuelve),
CATCH (cuando de un error o no se resuelve),
FINALLY (se resuelve independientemente de su resultado), se suele utilizar para 
no repetir codigo en then y catch, si una porcion de codigo se va a repetir en ambas,
en ese caso se pone en el finally:   */

console.time();
Promise
    .then(console.log)
    .catch(console.error)
    .finally(console.timeEnd);

    
/* PROMISE.ALL es un array de promesas y devuelve un array con los valores resueltos,
si alguna de las promesas es rechazada, rechaza esta tambien */

var resolveIn = delay => new Promise(resolve => {
    setTimeout(() => resolve(delay), delay)
    /* setTimeout() establece un temporizador en milisegundos para ejecutar una 
    función callback al finalizar dicho temporizador */
});

Promise.all([resolveIn(100), resolveIn(300), resolveIn(500)])
        .then(values => {console.log(values)}); //  [100, 300, 500]


/* PROMISE.RACE se le pueden aportar dos o mas promesas y devuelve el valor de la
promesa mas rapida */

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "uno");
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "dos");
});

Promise.race([p1, p2]).then(value => {console.log(value);});




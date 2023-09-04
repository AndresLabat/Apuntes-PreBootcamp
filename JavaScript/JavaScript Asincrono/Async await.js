
//  SIN ASYNC AWAIT:

let getFilm = () => new Promise((res, rej)=>{
    res("Matrix");
});

let getMain = film => new Promise((res, rej)=>{
    film ==="Matrix" ? res("Neo") : rej("404");
});

getFilm()
    .then(film => getMain(film))
    .then(main=>console.log(main))

// o lo que es lo mismo:
getFilm()
    .then(getMain)
    .then(console.log)



//  CON ASYNC AWAIT:

let getFilm2 = () => new Promise((res,rej)=>{
    res("Matrix");
});

let getMain2 = film => new Promise((res,rej)=>{
    film ==="Matrix" ? res("Neo") : rej("404");
});

async function queue(){
    var film = await getFilm2(); //  supongamos que toca "Matrix"
    var main = await getMain2(film); //  Neo
    console.log(main);
}
/*  "await" lo que indica es que nos devuelva el valor resultante de la promesa, 
no la promesa en si, si por el contrario nos devuelve una promesa rechazada, 
lanzara un error con la razon del rechazo */

queue();    //  escribira "Neo" en la consola



// la palabra ASYNC de async function devuelve una promesa:

async function get(){
    return 100;
}

get().then(console.log);    //  100

//  GESTION DE ERRORES:

async function throwError(){
    throw new Error("Esto no aparecera como un error, sino como una promesa rechazada");
}
throwError().catch(console.log);
// Error: Esto no aparecera como un error, sino como una promesa rechazada


/* Cuando una llamada precedida por await devuelve una promesa rechazada, esta se 
convierte en un error */

function rejectedPromise(){
    return new Promise(function(res,rej){
        rej("promesa rechazada");
    });
}
async function get(){
    await rejectedPromise();    //  al rechazarse la promesa esta linea lanza un error
}
get().catch(console.error); //  promesa rechazada


// Gestion de errores usando "TRY" y "CATCH":

function rejectedPromise(){
    return new Promise(function(res,rej){
        rej("promesa rechazada");
    });
}
async function get(){
    try{
        await rejectedPromise();    //  al rechazarse la promesa, esta lanza un error
    } catch (error){
        return error;
    }
}
get().then(console.log);

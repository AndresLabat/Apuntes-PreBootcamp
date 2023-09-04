
//  EVENTO EN TODO EL HTML:

/* Primero creamos un evento para todo el HTML que dice que cuando haya
un "input", ocurra algo, y le decimos que ese algo es una funcion */
let input1 = document.addEventListener("input", valorUpdate);

    /* los "manejadores" son lo que marca que cuando ocurra dicha accion, se 
    se desencadene el evento, en este caso el manejador es "input", otros:

   - onclick -> ocurre cuando pulsamos sobre el boton izquierdo del raton
   - ondblclick -> ocurre al hacer doble click con el boton izquierdo del raton */

/* Creamos la funcion dandole un parametro de entrada "e", y le decimos
que ese parametro de entrada e con .target.value es lo que vamos a comparar */
function valorUpdate(e){

    let escrito = e.target.value;

    if(escrito === "Andres"){
        // cuando se cumpla esta condicion, pinta en "parrafo este mensaje"
        document.getElementById("parrafo").innerHTML = "has escrito mi nombre correctamente.";
    }else{
        // cuando no se cumpla esta condicion, pinta string vacio
        document.getElementById("parrafo").innerHTML = "";
    }
}

//  SEGUNDO EVENTO EN TODO EL HTML:

let evento = document.addEventListener("input", funcionEspecifica);

function funcionEspecifica(texto){
    let textoEntrada= texto.target.value;
    if (textoEntrada === "Jose"){
        document.getElementById("parrafoNuevo").innerHTML = "efectivamente, es Jose"
    } else{
        document.getElementById("parrafoNuevo").innerHTML = ""
    }
}

//  PODEMOS CREAR UN EVENTO EN UN ELEMENTO DEL HTML EN ESPECIFICO:

let eventoEspecifico = document.querySelector("#inputEspecifico").addEventListener("input", funcionUnica);

function funcionUnica(texto){
    let textoEntrada = texto.target.value;
    if(textoEntrada==="Alba"){
        document.getElementById("parrafoEspecifico").innerHTML = "acertaste Albita";
    } else{
        document.getElementById("parrafoEspecifico").innerHTML = "";
    }
}


//  EVENTO CON INT EN EL "IF"

let evento2 = document.querySelector("#input1").addEventListener("input", funcion2);

function funcion2(texto){
    let textoEntrada = texto.target.value;
    if(textoEntrada<=5){
        document.getElementById("parrafoNuevo2").innerHTML = `${textoEntrada}`
    } else{
        document.getElementById("parrafoNuevo2").innerHTML = "No puede ser mayor a 5"
    }
}
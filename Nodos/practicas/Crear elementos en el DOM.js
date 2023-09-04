
function addHTML(){

    // asignamos una variable al input
    let escrito = document.getElementById("input1");

    // asignamos una variable al div donde queremos que se pinte
    let objetoDiv = document.getElementById("contenedor");

    // creamos un parrafo y le decimos que pinte lo que pongamos en el input
    let p = document.createElement("p");
    p.innerHTML = escrito.value;

    // le damos un valor cuando no haya nada en el input
    escrito.value = "";

    // introducimos el parrafo creado en el div de id="contenedor"
    objetoDiv.appendChild(p);
}
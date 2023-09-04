
/*  CREAR UN NODO DE TIPO ELEMENTO
document.createElement():
crea un elemento HTML especificado por su tagName   */

document.createElement("p");

/* "p" se pasa como un parametro, este ultimo va a especificar que tipo 
de parametro se va a crear  */

//---------------------------------------------------------------

/* CREAR UN NODO DE TIPO TEXTO
document.createTextNode():
Crea un nuevo nodo de texto, su sintaxis es la siguiente:   */

let texto1 = document.createTextNode(data);

let texto2 = document.createTextNode("Hola mundo, esto es Geekshubs");

//---------------------------------------------------------------

/* INTRODUCIR UN NODO DENTRO DE OTRO
document.appendChild():
agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento
padre especificado (mete un nodo en el interior de otro)*/

//  ejemplo 1:
let p = document.createElement("p");    //  creo el elemento tipo <p>
let newText = document.createTextNode("Hola, Mundo!");  //  creo un texto
p.appendChild(newText); //  introduzco el texto en el elemento <p>

// HTML resultante:      <p>Hola, Mundo!<p>


//  ejemplo 2:
var node = document.createElement("LI");   //  creo el elemento tipo <p>
var textnode = document.createTextNode("Agua"); //  creo un texto
node.appendChild(textnode); //  introduzco el texto en el elemento <p>
document.getElementById("lista").appendChild(node); 
/* introduzco ese elemento <li> que contiene el texto en el elemento 
con id = lista */

/* HTML resultante:      

    <ul id="lista">   
        <li>Agua</li>
    </ul> 
    */
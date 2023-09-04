
/* 
THEN (se introduce el codigo a comprobar y lo que quieres que haga)
CATCH (se introduce el posible codigo de error y lo que quieres que haga con el)
FINALLY (se ejecute con error o sin error, el codigo aqui metido se ejecutara siempre)
*/

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(Response => Response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
    .finally(() => console.log("Esto se mostrara siempre!"));

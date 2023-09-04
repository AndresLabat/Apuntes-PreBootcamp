/* EN EL BUCLE FOR SE PONE DENTRO DEL PARENTESIS:
    PRIMERO DESDE DONDE QUEREMOS QUE EMPIECE
    SEGUNDO QUE SE REPITA MIENTRAS SE CUMPLA ESA CONDICION, PARA CUANDO YA NO ES
    TERCERO DE QUE FORMA VARIA HASTA ALCANZAR EL PUNTO DE PARO
*/

var tabla = prompt("introduce la tabla que quieres imprimir");
/* prompt hace que cuando abrimos la pagina, nos pida que numero queremos 
   introducirle a la tabla para que se haga el bucle */
   
var multiplicador = 0; // en el bucle for, el multiplicador suele escribirse con una "i"

for(multiplicador = 0; multiplicador <= 10; ++multiplicador){
    console.log(tabla + " x " + multiplicador + " = " + (tabla*multiplicador));        
}
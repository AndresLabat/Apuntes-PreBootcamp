// DE ESTA FORMA, LE DAMOS VALOR A UNA VARIABLE DEPENDIENTO DE UNA CONDICION:

var edad = 18;
var puedoVerPelicula;

if(edad >= 18){
    puedoVerPelicula = "SI";
} else{
    puedoVerPelicula = "NO";
}

// CON EL OPERADOR TERNARIO, HACEMOS LO MISMO PERO MAS RAPIDO:

var edad2 = 18;
var puedoVerPelicula = (edad2 >= 18)
    ? "SI"
    : "NO";

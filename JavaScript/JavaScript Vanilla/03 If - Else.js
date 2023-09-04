var edad = 10;
var tituloPelicula = "Soy Leyenda";
var edadMinimaEntrada = 15;
var estasAcompañado = true;

// PRIMERA MANERA (if, else if, else):

if(edad >= edadMinimaEntrada){
    console.log("Puedes entrar a ver la pelicula");
}else if(estasAcompañado){
    console.log("Puedes entrar a ver la pelicula");
}else{
    console.log("No puedes ver la pelicula" + tituloPelicula);
}

console.log("yo estoy fuera del If");

// SEGUNDA MANERA (usar || o &&):

// si se cumple una condicion O la otra, || es igual a "o", && es igual a "y"
if(edad >= edadMinimaEntrada || estasAcompañado){
    console.log("Puedes entrar a ver la pelicula");
}else{
    console.log("No puedes ver la pelicula " + tituloPelicula);
}

console.log("yo estoy fuera del If");

//  TERCERA MANERA (if anidados dentro de if):

if(edad < edadMinimaEntrada){
    if(estasAcompañado == true){
        console.log("Puedes entrar a ver la pelicula");
    }
    if(estasAcompañado == false){
    console.log("No puedes ver la pelicula" + tituloPelicula);
    }
}else{
    console.log("puedes ver la pelicula" + tituloPelicula);
}

console.log("yo estoy fuera del If");



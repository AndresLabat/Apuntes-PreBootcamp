// EXTENSIONES DE OBJETOS LITERALES:

let nombre = "kEnAi",
edad = 7;

const perro = { //  declaramos un objeto
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("guau guau")
    }
}

console.log(perro);
perro.ladrar(); //  se imprime en consola el "guau guau"

const dog = {
    nombre,  /* JavaScript ya interpreta que la propiedad tiene el mismo 
    valor que el valor de la propiedad declarada fuera del objeto 
    por eso no hace falta hacer => nombre: nombre */
    edad,   /* JavaScript ya interpreta que la propiedad tiene el mismo 
    valor que el valor de la propiedad declarada fuera del objeto 
    por eso no hace falta hacer => edad: edad */
    raza: "Callejero",
    ladrar(){   //  JavaScript ya interpreta que es una function
        console.log("guauuu guauuu!!")
    }
}

console.log(dog);
dog.ladrar();

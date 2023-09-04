
// CLASS (clases):

// creamos la clase de la que luego seran los objetos que instanciemos:

class Tarea{

    // le damos las caracteristicas iniciales que tendran esos objetos:

    constructor(texto, id){
        console.log("Tarea instanciada! con el texto: " + texto);
        this.texto = texto;
        this.id = id;
        this.fecha = new Date();
    }

    // creamos las acciones que podran tener estos objetos, osease los metodos:

    fechaHoy(){
        this.fecha = new Date();
    }

    // metodo PRIVADO, se crea con # y solo es accesible para los objetos de esta class
    #NuevoTexto(texto){
        return this.texto = texto;
    }
}

// instanciar un objeto:

let tarea = new Tarea("comprar leche, 1");

console.log(typeof tarea);  // "typeof" nos devuelve que tipo de dato es -> objeto
console.log(tarea); // Tarea {texto: "comprar leche", id: 1, fecha: {}}


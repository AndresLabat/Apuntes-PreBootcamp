
/* HERENCIA ("extends" permite que las clases hijas hereden de la clase padre
los atributos, contructores y metodos), ejemplo: */

class Rectangle{

    constructor(height, width){
        this.name="Rectangle";
        this.height=height;
        this.width=width;
    }

    sayName(){
        console.log("Hi, I am a " + this.name + ".");
    }

    get area(){
        return this.height * this.width;
    }

    set area(value){
        this.height = this.width = Math.sqrt(value);
    }
    // Math.sqrt devuelve la raiz cuadrada de un numero
}

class Square extends Rectangle{
    constructor(length){
        super(height, width);
        this.name = "Square";
    }
}




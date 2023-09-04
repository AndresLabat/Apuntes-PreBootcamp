
class Vehiculo{

    constructor(marca, matricula, ruedas, puertas, años, velocidad){

        this.marca=marca;
        this.matricula=matricula;
        this.ruedas=ruedas;
        this.puertas=puertas;
        this.años=años;
        this.velocidad=velocidad;
    }

     velocidadInicial(){
        return this.velocidad = 0;
    }

    correr(){
        return this.velocidad += 10;
    }

    frenar(){
        return this.velocidad = 0;
    }

    aparcar(){
        return console.log("Aparcado");
    }
}

class Coche extends Vehiculo{

    constructor(marca, matricula, ruedas, puertas, años) {
        super(marca, matricula, ruedas, puertas, años);
        this.consumo = "Diesel";
    }
}

class Moto extends Vehiculo{

    constructor(marca, matricula, ruedas, puertas, años) {
        super(marca, matricula, ruedas, puertas, años);
    }
}

class Patin extends Vehiculo{

    constructor(marca, matricula, ruedas, años) {
        super(marca, matricula, ruedas, años);
    }
}

class Bicicleta{
    constructor() {
        this.marca="MountainBike";
        this.matricula="Sin matricula";
        this.ruedas=2;
        this.años=0;
    }
}

let coche1 = new Coche("Renault", "6978GTW", 4, 5, 13);

console.log(coche1.consumo);
console.log(coche1);

coche1.velocidadInicial();
coche1.correr();
console.log(coche1.velocidad);

let bicicleta1 = new Bicicleta();
console.log(bicicleta1);











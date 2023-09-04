
class Coche{

    constructor(nombre, marca, velocidad){

        this.nombre=nombre;
        this.marca=marca;
        this.velocidad=velocidad;
    }

    acelerar(){
        return this.velocidad = this.velocidad + 30;
    }

    frenar(){
        return this.velocidad = 0;
    }
}

const coche1 = new Coche("Compresor", "Mercedes", 100);

coche1.acelerar();
coche1.acelerar();
console.log(coche1.velocidad);

coche1.frenar();
console.log(coche1.velocidad);
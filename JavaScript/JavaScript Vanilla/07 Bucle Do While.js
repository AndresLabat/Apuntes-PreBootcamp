/*  EL BUCLE DO WHILE SE EJECUTA SIEMPRE AL MENOS UNA VEZ, Y DESPUES
    SI SE CUMPLE LA CONDICION, SIGUE REPITIENDOSE HASTA QUE DEJE DE CUMPLIRSE */

    // EJEMPLO CON WHILE:

    var tabla = 5;
    var multiplicador = 0;

        while(multiplicador <= 10){
            console.log(tabla + " x " + multiplicador + " = " + (tabla*multiplicador));
            ++multiplicador;
        }

    // EJEMPLO CON DO WHILE:

        do{ //  aqui se pone el cuerpo
            console.log(tabla + " x " + multiplicador + " = " + (tabla*multiplicador));
            ++multiplicador;
        } while(multiplicador <= 10);   //  aqui la condicion que debe cumplirse
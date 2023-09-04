
//  PRACTICA 1:

let edad = 15;
const promesa1 = new Promise((resolve, reject) => {
    if(edad >=18){
        resolve("eres mayor de 18");
    } else{
        reject("Eres menor de edad");
    }
})

promesa1
    .then(value=>{return value + ", asi que puedes entrar";})
    .then(valor=>{console.log(valor);})
    .catch(error=>{console.log(error);})
    .finally(()=>{console.log(" siempre entra");})


//  PRACTICA 2:

let color = "rojo";
const promesa2 = new Promise((resolve, reject)=>{
    if (color == "rojo"){
        resolve("el mejor color es " + color);
    } else if (color == "amarillo"){
        resolve("el autentico mejor color es " + color);
    } else{
        reject("si el color es " + color + ", prefiero no saber el color");
    }
})

promesa2
    .then(value=>{return value;})
    .then(value=>{console.log(value);})
    .catch(value=>{console.log(value + " asi que mejor lo dejamos estar");})
    .finally(value=>{console.log(", cambiemos a otra promesa");})

let nombre = prompt("dime un nombre");
let nombreRobot = [];

for(var i=0; i<2; i++){
    let letra = nombre[i].toUpperCase();
    nombreRobot.push(letra);  
}

let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i=0; i<abecedario.length; i++)
        if(nombreRobot[0] == abecedario[i]){
            let num1 = abecedario.indexOf(abecedario[i]) + 1;
            let num1String = num1.toString();
            nombreRobot.push(num1String);
        }    
        else if(nombreRobot[1] == abecedario[i]){
            let num2 = abecedario.indexOf(abecedario[i]) + 1;
            let num2String = num2.toString();
            nombreRobot.push(num2String);
        }    

console.log(nombreRobot.join(""));


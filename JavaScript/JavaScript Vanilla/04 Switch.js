var nota = 5;

//  ASI SE HACE CON IF Y ELSE:

if(nota < 5){
    console.log("Insuficiente");
} else if (nota >= 5 && nota < 6){
    console.log("Suficiente");
} else if (nota >= 6 && nota < 7){
    console.log("Suficiente");
}else if(nota >= 7 && nota <= 8){
    console.log("Notable");
} else{
    console.log("sobresaliente");
}

// ASI SE HACE CON SWITCH:

switch(nota){
    case 1:
        console.log("insuficiente");
    break;
    case 2:
        console.log("insuficiente");
    break;
    case 3:
        console.log("insuficiente");
    break;
    case 4:
        console.log("insuficiente");
    break;
    case 5:
        console.log("suficiente");
    break;
    case 6:
        console.log("bien");
    break;
    case 7:
        console.log("notable");
    break;
    case 8:
        console.log("notable alto");
    break;
    case 9:
        console.log("sobresaliente");
    break;
    case 10:
        console.log("sobresaliente maximo");
    break;
    default:
        console.log("no esta en el rango de notas");
    break;    
}



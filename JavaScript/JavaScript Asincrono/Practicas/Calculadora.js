   
// seleccionamos los elementos del HTML y los hacemos variables con las que trabajar:   
const aInput = document.querySelector("#a");
const bInput = document.querySelector("#b");

// creamos la funcion con 2 variables de entrada y una variable que es una funcion:
const sumar = (a,b,cb)=>{
    const result = a + b;
    cb(result);
}

const restar = (a,b,cb)=>{
    const result = a - b;
    cb(result);
}

const pintarResultado = r =>{
    document.querySelector(".result").innerText=r;
    /* con document.querySelector(".result2") seleccionamos el elemnto del HTML
    con .innerText=re; hacemos que salga por pantalla */
}


//  seleccionamos el boton y hacemos que cuando se pulse ocurra algo:
document.querySelector(".sumarButton").addEventListener("click", ()=>{

    const a = parseInt(aInput.value); 
    const b = parseInt(bInput.value); 
    sumar(a,b,pintarResultado);
})


document.querySelector(".buttonResta").addEventListener("click", ()=>{

    const a = parseInt(aInput.value); 
    const b = parseInt(bInput.value); 
    restar(a,b,(r)=>{document.querySelector(".result").innerText=r;})
    /* con esto lo sacamos por pantalla en vez de por consola:
    con document.querySelector(".result2") seleccionamos el elemnto del HTML
    con .innerText=re; hacemos que salga por pantalla */
})

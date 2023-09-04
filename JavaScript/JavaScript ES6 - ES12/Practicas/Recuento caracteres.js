
// creamos la funcion contador:
let contador = string => {
    return string.split(" ").reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};

// depositamos el resultado que retorna la funcion a una variable:
let resultado = contador("Hola mundo");

console.log(resultado);

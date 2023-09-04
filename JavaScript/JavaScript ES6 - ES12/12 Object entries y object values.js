
/* OBJECT ENTRIES:
Recibe como parámetro un objeto y nos devuelve un array que contiene tantos arrays 
como propiedades tenga el objeto con la clave y valor de las propiedades. */

const coche = {
    ruedas: 4,
    velocidad: 160,
    color: "rojo"
}

console.log(Object.entries(coche));
// [["ruedas", 1], ["velocidad", 160], ["color", "rojo"]]

/* OBJECT VALUES:
nos permite obtener los valores de las propiedades de un objeto en forma de array */

const coche1 = {
    ruedas: 5,
    velocidad: 180,
    color: "azul"
}

console.log(Object.values(coche1));
// [5, 180, "azul"]

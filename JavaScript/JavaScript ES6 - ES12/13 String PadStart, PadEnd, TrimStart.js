
/*  STRING .PADSTART:
Es un metodo que nos permite rellenar una cadena de texto desde el inicio de ésta 
(primer carácter) hasta la longitud que hayamos indicado con los caracteres que 
queramos. Si no pasamos el segundo parámetro, nos lo rellenará con espacios */

console.log("string".padStart(10));
// "    string"

console.log("string".padStart(10, "abc"));
// abcastring
// todos los huecos son rellenados con abcabcabc...hasta llegar a string



/*  STRING .PADEND:
Funciona igual que el anterior, pero en vez de rellenarlos por el principio
de la cadena, lo rellena por el final de la cadena (último carácter). */

console.log("string".padEnd(10));
// "string    "

console.log("string".padEnd(10, "abc"));
// stringabca

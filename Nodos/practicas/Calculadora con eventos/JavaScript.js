
let valoresPantalla = "";

    function añadirCaracter(numero) {
        valoresPantalla += numero;
        document.getElementById("pantalla").value = valoresPantalla;
    }

    function calculate() {
      try {
        /* La función Eval evalúa la expresión de cadena y devuelve 
        su valor. Por ejemplo, Eval("1 + 1") devuelve 2 */
        const result = eval(valoresPantalla);
        document.getElementById("pantalla").value = result;
        valoresPantalla = result.toString();
      } catch (error) {
        document.getElementById("pantalla").value = "Error";
        valoresPantalla = "";
      }
    }

    function limpiarPantalla() {
      document.getElementById("pantalla").value = "";
      valoresPantalla = "";
    }

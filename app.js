/**
 * Suma dos números.
 *
 * @param {number} numero1 Primer número.
 * @param {number} numero2 Segundo número.
 * @returns {number} Resultado de la suma.
 */
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
/**
 * Muestra el resultado dentro de la página web.
 */
function mostrarResultado() {
    const elementoResultado =
        document.getElementById("resultado");
const resultado = sumar(5, 3);
elementoResultado.textContent =
        `El resultado de 5 + 3 es ${resultado}.`;
}
/*
 * Exportación utilizada únicamente por las pruebas
 * ejecutadas con Node.js.
 */
if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        sumar
    };
}

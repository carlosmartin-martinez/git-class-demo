const { sumar } = require("./app");

/**
 * Ejecuta una prueba y compara el resultado obtenido con el esperado.
 *
 * @param {string} nombre Nombre de la prueba.
 * @param {*} esperado Resultado esperado.
 * @param {*} obtenido Resultado obtenido.
 */
function verificar(nombre, esperado, obtenido) {

    if (esperado !== obtenido) {

        console.error("ERROR: " + nombre);
        console.error("Esperado : " + esperado);
        console.error("Obtenido : " + obtenido);

        process.exit(1);
    }

    console.log("OK: " + nombre);
}

console.log("====================================");
console.log("Iniciando pruebas automatizadas...");
console.log("====================================");

verificar(
    "sumar(2,3) debe devolver 5",
    5,
    sumar(2, 3)
);

verificar(
    "sumar(10,5) debe devolver 15",
    15,
    sumar(10, 5)
);

verificar(
    "sumar(-2,2) debe devolver 0",
    0,
    sumar(-2, 2)
);

console.log("------------------------------------");
console.log("Todas las pruebas fueron exitosas.");
console.log("------------------------------------");

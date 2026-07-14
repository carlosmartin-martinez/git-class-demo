const fs = require("fs");
const path = require("path");

const directorioOrigen = __dirname;
const directorioDestino = path.join(__dirname, "dist");

const archivosAplicacion = [
    "index.html",
    "app.js",
    "style.css"
];

console.log("====================================");
console.log("Proceso de construcción iniciado");
console.log("====================================");

console.log("Origen : " + directorioOrigen);
console.log("Destino: " + directorioDestino);

try {

    if (fs.existsSync(directorioDestino)) {
        fs.rmSync(directorioDestino, {
            recursive: true,
            force: true
        });
    }

    fs.mkdirSync(directorioDestino);

    for (const archivo of archivosAplicacion) {

        const rutaOrigen =
            path.join(directorioOrigen, archivo);

        const rutaDestino =
            path.join(directorioDestino, archivo);

        if (!fs.existsSync(rutaOrigen)) {

            throw new Error(
                "No existe el archivo: " + archivo
            );
        }

        console.log("Copiando " + archivo);

        fs.copyFileSync(
            rutaOrigen,
            rutaDestino
        );
    }

    console.log("------------------------------------");
    console.log("Construcción completada correctamente.");
    console.log("Artefacto generado en el directorio dist.");
    console.log("------------------------------------");

}
catch (error) {

    console.error("------------------------------------");
    console.error("ERROR DURANTE LA CONSTRUCCIÓN");
    console.error(error.message);
    console.error("------------------------------------");

    process.exit(1);
}

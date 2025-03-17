//ejercicio2
function palabraMasLarga(frase) {
    const palabras = frase.split(' ');
    return palabras.reduce((larga, actual) => actual.length > larga.length ? actual : larga, '');
}


const frase = "Bienvenidos a wrestlemania donde estaran los grandes luchadores de la World Wrestling Entertainment (WWE)";
console.log(palabraMasLarga(frase));
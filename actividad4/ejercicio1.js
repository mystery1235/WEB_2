//Ejercicio1
function contarParesImpares(arr) {
    return arr.reduce((xd, num) => {
        if (num % 2 === 0) {
            xd.pares++;
        } else {
            xd.impares++;
        }
        return xd;
    }, { pares: 0, impares: 0 });
}

//ejemplo uso
const numeros = [1, 2, 3, 4, 5, 6, 87, 23, 86];
console.log(contarParesImpares(numeros));
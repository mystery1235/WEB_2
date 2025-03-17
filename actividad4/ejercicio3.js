//ejercicio 3
function invertirNumero(num) {
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

const numero = 12345;
console.log(invertirNumero(numero));
//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.La fórmula del perímetro  es p = 2*(a +b)

const ladoA = parseInt(prompt("Ingrese valor del lado A del rectángulo: "));
const ladoB = parseInt(prompt("Ingrese otro valor del lado B del rectángulo: "));

function perimetro(ladoA,ladoB){
    let p= 2*(ladoA + ladoB);
    document.write(`El perímetro del rectángulo es ${p}`);
}

perimetro(ladoA,ladoB);
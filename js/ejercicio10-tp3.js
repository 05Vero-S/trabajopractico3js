//Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva la temperatura equivalente en grados Fahrenheit.

const tempCelcius= parseFloat(prompt("Ingrese una temperatura en ºC: "));

function tempFahrenheit (tempCelcius){
    let conversion = (tempCelcius * 1.8) + 32;

    return conversion;
}

let conversion = tempFahrenheit(tempCelcius);

document.write(`La temperatura equivalente en grados Fahrenheit de ${tempCelcius}ºC es = ${conversion} ºF`);
//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numero=parseInt(prompt("Ingrese un número: "));

function tablaMultiplicar(numero){
    document.write(`<h2>Tabla de Multiplicar del ${numero}:</h2>`);
document.write(`<ul>`);
for (let i=0; i<=10;i++){
    tabla= numero * i;
    document.write(`<li> ${numero}x${i}= ${tabla}</li>`);
}
document.write(`</ul>`);

}

tablaMultiplicar(numero);
//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

const numero=parseInt(prompt("Ingrese un número entero: "));

function parImpar(numero){
    if (numero %2 == 0){
        document.write(`El número ${numero} es par`);
    }else{
        document.write(`El número ${numero} es impar`);
    }
}

parImpar(numero);
//Escribe una función que tome un arreglo de números como argumento y devuelva el número más grande en el arreglo.

const numeros = [2,5,30,25,50,85,1];
maximo = 0;

function numMax(maximo){
    for(let i=0; i<numeros.length;i++){
        if (maximo < numeros[i]){
            maximo=numeros[i];
        }
    }
    document.write(`El número más grande en el arreglo es: ${maximo}`);
}

numMax(maximo);
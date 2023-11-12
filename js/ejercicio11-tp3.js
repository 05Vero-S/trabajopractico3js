//Escribe una función que tome un número entero como argumento y devuelva un arreglo de todos los números primos menores o iguales a ese número.

const numero= parseInt(prompt("Ingrese un número entero como argumento: "));
const primos = [];
let iteraciones = 0;

function nuevoArreglo(primos){
    for (let i=2; i<=numero;i++){
        let primo=true;
        for(let j=2; j<i; j++){
            iteraciones++;
            if(i%j === 0){
                primo = !primo;
                break;
            }
        }
        if(primo) primos.push(i);
    }
    document.write(`El arreglo de todos los números primos menores o iguales al valor ingresado es: [${primos}]`);
}

nuevoArreglo(primos);


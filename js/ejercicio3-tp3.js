//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const x =parseInt(Math.random()*(5+1)+1);
const y = parseInt(Math.random()*(5+1)+1);
const tabla = [];

function lanzamiento(x,y){
    for (let i = 0; i < 50; i++){
        let sum = x + y;
        tabla.push(sum);

    }
    document.write(tabla); 
}

lanzamiento (x,y);
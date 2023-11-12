//Escribe una función que tome un arreglo de números como argumento y devuelva un nuevo arreglo que contenga solo los números pares del arreglo original.

const grupo1=[2,6,9,10,30,55,11,4];
const pares = [];

function nuevoGrupo(pares){
    for (let i=0;i< grupo1.length; i++){
        let grupo2 = grupo1[i];
        if (grupo2 %2 === 0){
            pares.push(grupo2);
        }
    }
    document.write(`El nuevo arreglo con solo números pares del arreglo original es: [${pares}]`);
    console.log(pares); //solo para controlar

}
    
nuevoGrupo(pares);

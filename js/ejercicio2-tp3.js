//Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
/*A- Mostrar la longitud del arreglo.
B- Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
C- Añade en última posición la ciudad de París.
D- Escribe por pantalla el elemento que ocupa la segunda posición.
E- Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudades =[];

while(true){
    let nombreCiudad=prompt("Ingrese el nombre de una ciudad: (Cancele cuando termine)");

    if(nombreCiudad === null || nombreCiudad === "" ){
        break;
    }

    ciudades.push(nombreCiudad);
}
console.log(ciudades);
document.write(ciudades);

//A
document.write(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`); //no me toma ciudades como array?

//B
document.write(`<ul>`);

    document.write(`<li>Elemento 1er posicion: ${ciudades[0]}</li>`);
    document.write(`<li>Elemento 3er posicion: ${ciudades[2]}</li>`);
    document.write(`<li>Elemento última posicion: ${ciudades[9]}</li>`);

document.write(`</ul>`);

//C
ciudades.push('Paris');
document.write(`<h2>Arreglo de ciudades </h2>`);
document.write(`<ul>`);
for(let i= 0; i<ciudades.length; i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ul>`);

//D
document.write(`<ul>`);

    document.write(`<li>Elemento 2da posicion: ${ciudades[1]}</li>`);
    

document.write(`</ul>`);

//E
ciudades[1]='Barcelona'
document.write(`<h2>Arreglo de ciudades </h2>`);
document.write(`<ul>`);
for(let i= 0; i<ciudades.length; i++){
    document.write(`<li>${ciudades[i]}</li>`);
}
document.write(`</ul>`);






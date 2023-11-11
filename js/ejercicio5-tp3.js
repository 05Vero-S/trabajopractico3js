//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function informacion(cadena){
    if (cadena == cadena.toUpperCase()){
        document.write(`${cadena} esta formada sólo por máyusculas`);
        document.write('<br>');
    }else if(cadena == cadena.toLowerCase()){
        document.write(`${cadena} esta formada sólo por minúsculas`);
        document.write('<br>');

    }else{
        document.write(`${cadena} esta formada por mayúsculas y minúsculas`);
    }
}
 //Para llamar una funcion coomo argumento
 informacion('hola mundo'); 

 informacion('HOLA MUNDO');

 informacion('HoLa MuNdO');
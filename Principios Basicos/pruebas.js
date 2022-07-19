//Que son las funciones?
//ñconsole.log("Hola");

//Function declaradas
/*function estoEsUnaFunction(){
    console.log("Uno")
    console.log("Dos")
}
estoEsUnaFunction();
*/
//




//Funciones declaradas
function valor(){
    console.log('Hola')
    return "La funcion retorno una cadena de texto";
}

//let valorF = valor();
//console.log(valorF);

function saludar(nombre = 'desconocido' ,apellido = 'desconocido'){
    console.log(`Hola soy ${nombre} ${apellido}, un gusto servirle`)
}
saludar()
saludar('Pedro','Telon')

function declarada(){
    console.log('Esto es Esparta');
}

declarada();
//Funcion anonima sin nombre
const Hola = function(){
console.log('Esto es una funcion expresada');
}

Hola();

//TERMINA NUCLEO FUNCIONES
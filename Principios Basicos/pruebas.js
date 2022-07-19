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
//Crea una funcion que acepte 2 variables y las regrese tiene
//que ser una funcion declarada

const datos = function(nombre,apellido){
    return `Hola que tal soy ${nombre} ${apellido} y soy marero`
}
console.log(datos('Pedro','18'))

//Crea una funcion que sume 2 valores y los multiplique por 3
//Tiene que ser expresada y utilizar arrow functions

const sumadora = function(valorA ='Sin valor',valorB ='Sin valor'){
 let aux = ((valorA + valorB)*3) 
 console.log(aux);
}

sumadora(5,3);
 

//TERMINA NUCLEO FUNCIONES
//Que son las funciones?
//ñconsole.log("Hola");

//Function declaradas
/*function estoEsUnaFunction(){
    console.log("Uno")
    console.log("Dos")
}
estoEsUnaFunction();

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
//EMPIEZA EL NUCLEO DE ARREGLOS(ARRAYS)

const a = [];
const b = [1,true,'Hola',[1,2,3]]
console.log(a);
console.log(b);
console.log(b[0])
console.log(b[3][1])
const c = Array.of('Hola','Adios','Peludo');
console.log(c);
//Esta propiedad '.fill' rellena el array con el tipo de valor que quieras,
//si es de 10 posiciones esta propiedad se encarga de rellenarlo con false
const d = Array(100).fill(false);
console.log(d);
//Esta propiedad escanea un arreglo, un array o algo que necesites
// encontrar segun su posicion  variable 1 recoje el elemento
//variable 2 escanea la posicion
b.forEach(
    function(element,i){
        console.log(`<li> '${i}' ${element} </li>`);
    }
);
*/

 // TERMINAN LOS ARRAYS
 //EMPIEZAN LOS OBJETOS

 
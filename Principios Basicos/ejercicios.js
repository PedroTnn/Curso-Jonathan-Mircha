/*console.log('Hola Mundo')

/*1) Programa una función que cuente
 el número de caracteres de una cadena de texto, pe.
  miFuncion("Hola Mundo") devolverá 10.
let hola = 'Hola mundo'
console.log(hola.length)

const contador = function (cadena) {
    if (cadena ==! 'string') {
       console.log('Por favor ingresa una cadena') 
    }
        return cadena.length
       
 
}

console.log(contador('Hola Mundo'))
/*2) Programa una función que te devuelva el texto 
recortado según el número de caracteres indicados,
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

 const cortador = function (cadena,caracteres) {
    if (cadena !== 'string') {
       console.log('Por favor ingresa una cadena') 
    }
     
        return cadena.slice(0,caracteres)
       
 
}
console.log(cortador('Hola Mundo',4))

//EXTRA
/*
//Crear una clase master la cual haga heredar 1 submaster sus atributos
//y sus funciones y hacer una operacion xd

class Master{
   constructor(nombre,apellido,edad){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.Emocion = null;
   }
      get getEmocion(){
        return this.Emocion
      }

      set setEmocion(Emocion){
         this.Emocion = Emocion;
      }

      saludar(){
         console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}`)
      }

}
     class SubMaster extends Master{
      constructor(nombre,apellido,edad){
         super(nombre,apellido,edad)
      }

     }



const Pedro = new Master ('Pedro','Telon',21);
const Pablo  = new SubMaster ('Pablo','Urias',16);


console.log(Pedro)
Pedro.saludar();
console.log(Pablo)
Pablo.saludar();
Pedro.setEmocion = 'Feliz'
console.log(Pedro)

const filtradoedad = function(obj){
   if (obj.edad > 17) {
      console.log('Autorizacion completada')
   }
}

filtradoedad(Pedro)


//3) Programa una función que dada una String te devuelva un Array 
//de textos separados por cierto caracter, pe. miFuncion('hola que tal', 
//' ') devolverá ['hola', 'que', 'tal'].

const Separador = function(String){

    console.log(String.split(' '))
}

Separador('Hola que tal')

/*4) Programa una función que repita un texto X veces, pe. 
miFuncion('Hola Mundo', 3)
 devolverá Hola Mundo Hola Mundo Hola Mundo.


const repetidor = function (String = null,veces = 0) {
  //Se ejecuta hasta que la condicion no se cumpla
   for (let aux = 1; aux <= veces; aux++) {
      console.log(String)
   }
 
}

repetidor('Platanos fritos',5)


const repeat = function (String,round) {
   console.log(String.repeat(round))
}

repeat('Platanos fritos',5)







//EJERCICIO 1 SOLUCION DECLARADA
function contar(cadena = '') {
   if(!cadena){
      console.warn('No ingresaste ninguna cadena')
   }else{
      console.info(`La cadena '${cadena}' tiene ${cadena.length} caracteres`)
   }
}
//EJERCICIO 1 SOLUCION EXPRESADA
const contador = (cadena = '') =>
   (!cadena)
   ? console.warn('No ingresaste ninguna cadena')
   :console.info(`La cadena '${cadena}' tiene ${cadena.length} caracteres`)
      
   




contar();
contar('Hola mundo');




const recortarTexto = (cadena='',longitud=undefined)=>
(!cadena)
?console.warn('No ingresaste el texto')
:(longitud=== undefined)
   ?console.warn('No ingresaste la longitud')
   :console.info(cadena.slice(0,longitud))
 recortarTexto('HOla',)
*/
const cadenar= (cadena='',separador = undefined)=>
(!cadena)
?console.warn('No ingresaste el texto')
:(separador === undefined)
   ?console.warn('No ingresaste el caracter separador')
   :console.info(cadena.split(separador))

   cadenar("HOla mundo",",")
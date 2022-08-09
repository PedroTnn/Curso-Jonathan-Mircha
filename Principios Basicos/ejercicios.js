console.log('Hola Mundo')

/*1) Programa una función que cuente
 el número de caracteres de una cadena de texto, pe.
  miFuncion("Hola Mundo") devolverá 10.*/
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
 pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

 const cortador = function (cadena,caracteres) {
    if (cadena !== 'string') {
       console.log('Por favor ingresa una cadena') 
    }
     
        return cadena.slice(0,caracteres)
       
 
}
console.log(cortador('Hola Mundo',4))
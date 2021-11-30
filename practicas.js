/*

///Problema 1
function Calcular(string,x){
string = "Caca de mono";
x = string.length
console.log(x)
return x;
}

Calcular();


///Problema2
function Extraer(Palabra,Extracto){
Palabra = "Hola mundo";
Extracto = Palabra.substring(0,4) 
console.log(Extracto)
return Extracto
}

Extraer()

// Tercer Problema
function Arrayto(pString,Arraisito){
    pString = "Me gusta el camote"
    //Arraisito = Array.from(pString)
    Arraisito = pString.split(" ")
  console.log(Arraisito)
  return Arraisito
}

Arrayto()

function Repetir(){
let Ole = "Hola mundo";
for (let i = 0;i < 5; i++) {
    console.log("Hola mundo")
    
    }   
}
Repetir()
*/

 /* 
 5) Programa una función que invierta las palabras de una cadena 
 de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

 6) Programa una función para contar el número de veces que se repite una
 palabra en un texto largo, pe. miFuncion("hola mundo adios mundo",
  "mundo") devolverá 2.

7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 (que se lee igual en un sentido que en otro),
  pe. mifuncion("Salas") devolverá true.

8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  
   "1, 2, 3, 4 y 5.

 */

   const saludo = function() {
       console.log("Hola")
   }
   saludo();

   //Quinto problema
   const Revertir = function(pString){
      let  Arraisito = pString.split("")
      let reverse = Arraisito.reverse();
      let unir = reverse.join("");
      console.log(unir)
    }
    Revertir("Hola")
    
   // Arrayto()

   
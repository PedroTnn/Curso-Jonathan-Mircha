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
    //Solución Profesor


    const invertir = (cadena = "")=>
    (!cadena)
    ? console.warn("No ingresaste nada")
    :console.info(cadena.split("").reverse().join(""));
    invertir();
    invertir("Hola mundo")
  
    /*6) Programa una función para contar el número de veces que se repite una
    palabra en un texto largo, pe. miFuncion("hola mundo adios mundo",
     "mundo") devolverá 2.*/
/*
//Solución
const textoCadena = (cadena = "",texto = "") => {
  if(!cadena)return console.warn("No ingresaste un texto largo");

  if(!texto)return console.warn("No ingresaste la palabra a evaluar");
let i = 0,
contador = 0;
while(i !== -1){
  i = cadena.indexOf(texto,i);
  if(i !== -1){
    i++;
    contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

textoCadena();
textoCadena("Hola Coche Hola Jirafa Hola Hola Hola Hola" ,"Hola")
/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 (que se lee igual en un sentido que en otro),
  pe. mifuncion("Salas") devolverá true.
  const palindromo = (palabra = "")=>{
    if(!palabra)return console.warn("No ingresaste una palabra");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    return(palabra === alReves)
    ? console.info(`Si es palindroma la palabra ${palabra} de la palabra ${alReves}`)
    : console.info(`No es palindroma la palabra ${palabra} de la palabra ${alReves}`)
  }
  palindromo("Hola")


  
 
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  
  "1, 2, 3, 4 y 5.
  const eliminarCaracteres = (texto = "",patron = "")=>
  (!texto)
  ? console.warn("No ingresaste un texto")
  :(!patron)
  ? console.warn("No ingresaste un patron de caracteres")
  :console.info(texto.replace(new RegExp(patron,"ig"),""));
  eliminarCaracteres();
  eliminarCaracteres("xyz1, xyz2, xyz3, xyz4","xyz");

  */
 /*

  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
  */
 /* const aleatorio = () => console.info(Math.round(Math.random()* 100)+ 500)
 aleatorio()
  /*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (numero = 0)=>{
  if(!numero) return console.warn("No ingresaste un número")
  if(typeof numero !== "number") return console.error(`El valor ${numero} no es un numero`);
  numero = numero.toString()
  let alReves = numero.split ("").reverse().join("");
  //numero = numero.parseInt()
 // return (parseInt(numero) === parseInt(alReves))
 
 return (numero === alReves)
  ? console.info(`Si es una capicua ${numero} de ${alReves}`)
  :console.info(`No es una capicua ${numero} de ${alReves}`)
  
}
/*
capicua()
capicua()
capicua(2000)
capicua(2002)

const factorial =(numero = undefined)=>{
  if(numero === undefined)return console.warn("no ingresaste un numero");
  if(typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`);

  if(numero === 0)return console.error("el numero no puede ser cero");
  if(Math.sign(numero)===-1)return console.error("El numero no puede ser negativo");

  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
     // factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`)
}

factorial();
factorial(-5);
factorial(0);
factorial(5);
factorial(10);




/*
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 
  1 hasta n), pe. miFuncion(5) devolverá 120.*/





  
 /* 12) Programa una función que determine si un número es primo (aquel que solo es 
     divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
    */  
     const primo =(numero = undefined)=>{
     if(numero === undefined)return console.error('No ingresaste nada')
      if(typeof numero !== 'number') return console.warn("El caracter tiene que ser un numero")
      if(Math.sign(numero)=== -1)return console.warn('El numero tiene que ser positivo')
      
      let divisible = false;
      for(let i = 2;i < numero;i++){
        if((numero %i)== 0){   2.5
          divisible = true;
          break;
        }
      }
      
      return(divisible)
      ?console.log(`El numero ${numero}, No es primo`)
      :console.log(`El numero ${numero}, Es primo`)
      
      }
      primo(1000)

  
  /*
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

      const Par =(numero = undefined)=>{
        if(typeof numero !== 'number')return console.warn('EL valor tiene que ser un numero');
     //   if(numero === 0) return console.error('El numero no puede ser 0');
        if(Math.sign(numero)=== -1)return console.warn("El numero no puede ser menor a 0")

        let divisor
        
        let residuo  = 2
          if ((numero %residuo) === 0 ) {
            divisor = false;
        }else{  
          divisor = true;
        }
        return(divisor)
        ?console.log(`El numero ${numero} no un numero par `)
        :console.log(`El numero ${numero} es un numero par`)
      }

            Par(100);


/*

/*
Versión Mircha
*/
const Par1 =(numero = undefined)=>{
  if(typeof numero !== 'number')return console.warn('EL valor tiene que ser un numero');
   if(numero === 0) return console.error('El numero no puede ser 0');
  if(Math.sign(numero)=== -1)return console.warn("El numero no puede ser menor a 0")

    return((numero %2)===0)
    //Si se cumple la condicióne es verdadero
    ? console.log('El numero es primo')
    //Si se cumple la condición es falso
    : console.log('El numero no es primo');



}

Par1(10)
/*



    

14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
  
  */ 
 const Convertidor =(numero = 0)=>{
if(typeof numero !== 'number')return console.warn('EL valor tiene que ser un numero');
//if(numero === 0) return console.error('El numero no puede ser 0');//
//if(Math.sign(numero)=== -1)return console.warn("El numero no puede ser menor a 0");
 let tipo
let resultado,resultado2
switch (3) {
  case 1:
   tipo = "Fahrenheit"
   resultado =  (((9 * numero)/5)+32)
    break;

    case 2:
      tipo = "Celcius"
      resultado =  (((numero -32)* 5)/9)
      resultado = Math.round(resultado)
      break;

  default:
  tipo = "Celcius y Fahrenheit"
  resultado =  (((numero -32)* 5)/9)
  resultado2 =  (((9 * numero)/5)+32)

    break;
}
  return  console.log(`El resultado En ${tipo} es ${resultado} y ${resultado2}` );
   


   }
 
 Convertidor(0)                                                                                     




 const Grados = (grados = undefined, unidad = undefined)=>{
  if(grados === undefined)return console.error('Los grados no pueden ir vacios');

  if(unidad === undefined)return console.error('LA unidad no puede ir vacia');

  if(typeof grados !== 'number') return console.warn('Tienes que ingresar un numero de grados');

  if(typeof unidad !== 'string') return console.warn('Tienes que ingresar una letra');

  if(unidad.length !== 1 ||  !/(C|F)/.test(unidad))return console.warn('Valor de unidad desconocido');

  if(unidad == "C"){
    console.info(`La conversión de Celcius ${grados}º a Farenheit es ${Math.round(grados *(9/5)+32)}º`)
  }else if (unidad == "F"){
    console.info(`La conversión de Farenheit ${grados}º a Celcius es ${Math.round(((grados-32)*5)/9)}º`)
    
  }






 }

 Grados(0,"F")
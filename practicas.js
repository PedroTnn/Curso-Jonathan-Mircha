
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
/*
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

 */
/*
 const contarLetras = (cadena = "")=>{
  if (!cadena)return console.warn("No ingresaste una cadena de texto");
  if(typeof cadena !== "string")return console.log(`El valor ${cadena} no es una cadena de texto`);
  
  let vocales = 0,
  consonantes = 0;
  cadena = cadena.toLocaleLowerCase();
  for(let letra of cadena){
    if(/[aeiouáéíóú]/.test(letra)){
    vocales++;
  }
    if(/[qwrtypsdfghjklñzxcvnbm]/.test(letra)){
      consonantes++;
    }
  }
  return console.info({
    cadena,
    vocales,
    consonantes,
  })
 }
 contarLetras("Hola Mundo");
 contarLetras("ñoño")
 contarLetras("lorem")
*/
/*
const validarNombre =(nombre = "") =>{
  if (!nombre)return console.warn("No ingresaste una cadena de texto");
  if(typeof nombre !== "string")return console.log(`El valor ${nombre} no es una cadena de texto`);
  let expReg = /^[A-Za-zÑñ\s]+$/g.test(nombre);
  return (expReg)
  ?console.warn(`${nombre}, es un nombre valido`)
  :console.warn(`${nombre}, No es un nombre valido`);
}
validarNombre();
validarNombre(3);
validarNombre("Pedro Telón");

const validarcorreo =(correo = "")=>{
  if (!correo)return console.warn("No ingresaste una cadena de texto");
  if(typeof correo !== "string")return console.log(`El valor ${nombre} no es una cadena de texto`);
 // let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
  let expReg = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(correo);
  return (expReg)
  ?console.info(`${correo}, es un corre valido`)
  :console.error(`${correo}, Es un correo invalido`);
}
validarcorreo();
validarcorreo();
validarcorreo("jon´mic,cha@gmail")
validarcorreo("hola");
validarcorreo("ArvoreGroup@gmail.shop")

const fusion =(correo = "")=>{
  if (!correo)return console.warn("No ingresaste una cadena de texto");
  if(typeof correo !== "string")return console.log(`El valor ${nombre} no es una cadena de texto`);
  let expReg =/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(correo);
  return (expReg)
  ?console.warn(`${correo}, es un corre valido`)
  :console.warn(`${correo}, Es un correo invalido`);
}

const devolverCuadrados = (arr=undefined)=>{
  if (arr === undefined)return console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array))return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0)return console.error("El arreglo está vacio");

  for (let num  of arr) {
    if(typeof num !== "number")return console.error(`El valor ${num} no es un numero`);
  }
    const newArr = arr.map(a => a * a);
    return console.info(`Arreglo original ${arr}\nArreglo elevado al cuadrado ${newArr}`)

}
devolverCuadrados([1,4,8,]);

const arrayMInMax = (arr = undefined)=>{
  if (arr === undefined)return console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array))return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0)return console.error("El arreglo está vacio");

  for (let num  of arr) {
    if(typeof num !== "number")return console.error(`El valor ${num} no es un numero`);
  }
return console.info(`Arreglo Original ${arr}\nValor Mayor ºº${Math.max(...arr)}\nValor Menor ${Math.min(...arr)}`)
}

arrayMInMax()
arrayMInMax([4,5,10,40])

const separar = (arr=undefined)=>{
  if (arr === undefined)return console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array))return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0)return console.error("El arreglo está vacio");

  for (let num  of arr) {
    if(typeof num !== "number")return console.error(`El valor ${num} no es un numero`);
  }
  return console.info({
    pares:arr.filter(num => num %2 ===0),
    impares:arr.filter(num => num%2 ===1)
  })
}

separar([5,10,20])

const ordenarArreglo = (arr=undefined)=>{
  if (arr === undefined)return console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array))return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0)return console.error("El arreglo está vacio");

  for (let num  of arr) {
    if(typeof num !== "number")return console.error(`El valor ${num} no es un numero`);
  }

  return console.info({
    arreglo:arr,
    asc:arr.map(el=> el).sort(),
    des:arr.map(el=>el).sort().reverse()
  })

  

}

//ordenarArreglo();
//ordenarArreglo([]);
//ordenarArreglo([5,5,5])

const quitar =(arr=undefined)=>{
  if (arr === undefined)return console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array))return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0)return console.error("El arreglo está vacio");

  for (let num  of arr) {
    if(typeof num !== "number")return console.error(`El valor ${num} no es un numero`);
  }

  return console.info({
    original:arr,
    sinDuplicados:arr.filter((value,index,self)=>self.indexOf(value) ===index)

  })
    
}


let id = Symbol("hola");
let id2 = Symbol("hola");
console.log (id === id2);
console.log (id, id2);
console.log (typeof id,typeof id2);
const SALUDAR = Symbol();
const NAME = Symbol();
const  persona = {
  [NAME]:"Daniel"
};

console.log(persona);
persona.NAME = "Pedro Telón";
console.log(persona);
console.log(persona.NAME);
console.log(persona[NAME]);
persona[SALUDAR] = function(){
  console.log(`Hola`);
}

console.log(persona);
persona[SALUDAR]();

for(let property in persona){
  console.log(property);
  console.log(persona[property]);
}

const set = new Set([
  1,2,3,3,4,5,true,true,false,{},{},"hola","Hola"
]); 
console.log(set);
console.log(set.size);
const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});
console.log(set2);
console.log(set2.size);
console.log("Recorriendo set");

for(let item of set){
  console.log(item);
}
console.log("Recorriendo set2");
set2.forEach(item => console.log((item)));
let arr = Array.from(set);
console.log(arr);
console.log(arr[9])
set.delete("Hola");
console.log(set);

console.log(set.has(2))
set2.clear();
console.log(set2)
*/
/*
let mapa = new Map();
mapa.set("nombre","Jon");
mapa.set("apellido","Mircha");
mapa.set("edad",35);
console.log(mapa)
console.log(mapa.size)
console.log(mapa.has("nombre"))
console.log(mapa.get("nombre"));
console.log(mapa.set("nombre","Jonathan Mircha"));
mapa.delete("apellido")
console.log(mapa);

for(let [key,value] of mapa){
  console.log(` Llave ${key}  Valor:${value}`)
}

const mapa2 = new Map([
  ["nombre","kenai"],
  ["edad",7],
  ["animal","perro"],
  [null,"nulo"]
]);
console.log(mapa2)

*/
 
/*const ws = new WeakSet([1,2,3,4
])

const ws = new WeakSet();
let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};
ws.add(valor1);
ws.add(valor2);
console.log(ws);
console.log(ws.has(valor1))
ws.delete(valor2)
console.log(ws);
ws.add(valor2);
ws.add(valor3);
setInterval(() =>  console.log(ws)
  
, 10000);

setTimeout(() => {
  console.log("Limpiado!")
  valor1 = null;
  valor2 = null;
  valor3 = null;
  
}, 2000);

const wn = new WeakMap([
  ["nombre","kenai"],
  ["edad",7],
  ["animal","perro"],
  [null,"nulo"]

])

const wn = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wn.set(llave1,1);
wn.set(llave2,2);
console.log(wn.has(llave1));
console.log(wn.has(llave3));
console.log(wn.get(llave1));
wn.set(llave3,3);


console.log(wn)

setInterval(() => console.log(wn)
  
, 2000);

setTimeout(() => {
  console.log("Limpiado!")
  llave1 = null;
  llave2 = null;
  llave3 = null;
}, 5000);*/

const ITERABLE = new Set ([1,2,3,9,3,4,5,4,5,"HOla",8]);
//const ITERABL = "Hola mundo"
//Accedemos al iteradir del iterable
const ITERADOR = ITERABLE[Symbol.iterator]();
/*console.log(ITERABLE)
console.log(ITERADOR);
console.log(ITERADOR.next());
console.log(ITERADOR.next());
console.log(ITERADOR.next());
console.log(ITERADOR.next());
console.log(ITERADOR.next());
console.log(ITERADOR.next());

let next = ITERADOR.next();
while(next.done === false){ //!next.done
  console.log(next.value);
  next = ITERADOR.next();
}

*/

function* Iterable(){
  yield "hola"
  console.log("Hola Consola");
  yield "hola 2";
  console.log("Soy una papa");
  yield "hola 3";
  yield "hola 4";
}

let iterador = Iterable();
/*
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

for(let y of iterador){
  console.log(y);
}

const arr = [...Iterable()];
console.log(arr);

function cuadrado(valor){

    setTimeout(() => {
     return console.log({valor,resultado: valor*valor});
  },Math.random()*1000);
  
}

function* generador(){
  console.log("Inicia Generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("Termina Generator");
}
let gen = generador();
for (let y of gen ){
  console.log(y);
}



 const persona = {
   nombre: "",
   apellido: "",
   edad: 0,

 }
/*
const manejador = {
  set(obj,prop,valor){
    if(Object.keys(obj).indexOf(prop)=== -1){
      return console.error(`La propiedad ${prop} no existe en el objeto persona`)
    }

    if(
      (prop === "nombre"||prop === "apellido" )&&
    ){
  //No se cerro esta excepcion   prop ===
    }
      obj[prop] = valor;
  }
}

 const jon = new Proxy(persona,manejador);
 jon.nombre = "Jon";
 jon.apellido = "Mircha";
 jon.edad = 35;
jon.twitter = "@JohnMircha"

 console.log(jon);
 
let aleatorio = Math.round(Math.random()*100 + 5);

 const objUsuarios = {
   
   [`id_${aleatorio}`]:"Valor aleatorio"
}
 console.log(objUsuarios);
 const usuarios = ["Jon","Irma","Miguel","Roberto","Kenai"];
 usuarios.forEach((usuario,index)=> objUsuarios[`id_${index}`] = usuario);
 console.log(objUsuarios);

 

 console.log(this);
 console.log(window)
 console.log(this === window);
 this.nombre = "Contexto Global";
 console.log(this.nombre);

 function imprimir(){
   console.log(this.nombre);
 }

 imprimir();

 const obj = {
   nombre: "Contexto objeto",
   imprimir:function(){
     console.log(this.nombre);
   }
 }

 obj.imprimir();

 const obj2 = {
   nombre:"contexto Objeto 2",
   imprimir
 }

 obj2.imprimir();

 const obj3 = {
  nombre:"contexto Objeto 2",
  imprimir:() => {
    console.log(this.nombre)
  }
}
obj3.imprimir()

function Persona(nombre){
  this.nombre = nombre;
 // return console.log(this.nombre);

/* return function (){
  console.log(this.nombre);
 }
 return()=> console.log(this.nombre,77);
}

let jon = new Persona("Jon")
jon()


console.log(this)
this.lugar = "Contexto global";

function saludar (saludo,quien){
  console.log(`${saludo} ${quien} desde el ${this.lugar}`);
}

saludar();

const obj ={
  lugar :"Contexto Objeto"
}

saludar.call(obj,"Hola","Jon");
saludar.call(null,"Hola","Jon");
saludar.call(this,"Hola","Jon");
saludar.apply(obj,["Adios","Mircha"]);

const persona = {
  nombre: "Jon",
  saludar: function(){
    console.log(`Hola ${this.nombre}`)
  }
}

persona.saludar();

const otraPersona = {
  saludar:persona.saludar.bind(this)
}

otraPersona.saludar();


const persona = {
  cadena: "Pedro",
  numero: 35
}
console.log(JSON)

console.log(JSON.parse)
console.log(JSON.parse("{}"));
console.log(JSON.parse("true"));
console.log(JSON.stringify("Hola"));
console.log(JSON.stringify(persona));
*/
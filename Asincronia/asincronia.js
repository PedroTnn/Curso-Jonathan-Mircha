//console.log('Inicio')
/*

SIRVEN PARA CREAR TEMPORIZADORES DENTRO DE LA MISMA APLICACION
setTimeout(() => {
   console.log('Ejecutando un setTimeout') 
}, 1000);


setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 3000);


let temporizador = setTimeout(() => {
    console.log('Ejecutando un setTimeout') 
 }, 1000);

 clearTimeout(temporizador);
 console.log('final')

 clearInterval()
 */
/*
 function cuadrado(value,callback){
    setTimeout(() => {
        callback(value,value*value)
    },0|Math.random()*100 );
 }


 cuadrado(0,(value,resultado)=>{
    console.log('Inicia CallBack');
   console.log(`Callback: ${value},${resultado}`);
   cuadrado(1,(value))
 })





//RESUMEN ASINCRONIA
//CALLBACKS
//Las callbacks nos ayudan a esperar componentes los cuales no sabemos cuanto tiempo
//se van a tardar, esto se hace para evitar errores, variables no declaradas
//Y demas tipo de componentes que son indispensables para poder arrancar la web
function cuadradop(value) {
   if(typeof value !== "number")return Promise.reject(`El valor ${value} no es un numero`);
   return new Promise ((resolve,reject)=>{
      setTimeout(() => {
         resolve({
            value:value,
            result: value*value
         });
         },0|Math.random()*100);
});
}



cuadradop(0)
.then((obj) => {
  console.log('Inicio promises');
  console.log(`Promise ${obj.value}, ${obj.result}`)
  return(cuadradop(1));
})
.then(obj=>{
   console.log(`Promise ${obj.value}, ${obj.result}`)
   return cuadradop(2);
})
.then(obj=>{
   console.log(`Promise ${obj.value}, ${obj.result}`)
   return cuadradop(3);
})
.then(obj=>{
   console.log(`Promise ${obj.value}, ${obj.result}`)
   return cuadradop('5');
})
.then(obj=>{
   console.log(`Promise ${obj.value}, ${obj.result}`)
   return cuadradop(5);
})
.then(obj=>{
   console.log(`Promise ${obj.value}, ${obj.result}`)
  console.log('Fin de la promesa')
})
.catch((err => console.error(err)));*/

/*
function cuadradope(value) {
   if(typeof value !== "number")
   return Promise.reject(`El valor ${value} no es un numero`);
   return new Promise ((resolve,reject)=>{
      setTimeout(() => {
         resolve({
            value:value,
            result: value*value
         });
         },0|Math.random()*100);
});
}
//Cuando declaramos una funcion asincrona podemos utilizar AWAIT esto
//hace que espere el resultado de la funcion que se esta iterando
async function AsincronaD() {
   try {
      console.log('Inicio Async Function');
      let obj = await cuadradope(0);
      console.log(`Async Function ${obj.value},${obj.result}`);

      obj = await cuadradope(1);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(2);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(3);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(4);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(5);
      console.log(`Async Function ${obj.value},${obj.result}`)
      console.log ('Fin async Function')
   } catch (error) {
      
   }
}

AsincronaD();
 const funcionA = async () =>{
   try {
      console.log('Inicio Async Function');
      let obj = await cuadradope(0);
      console.log(`Async Function ${obj.value},${obj.result}`);

      obj = await cuadradope(6);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(7);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(8);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(9);
      console.log(`Async Function ${obj.value},${obj.result}`)

      obj = await cuadradope(10);
      console.log(`Async Function ${obj.value},${obj.result}`)
      console.log ('Fin async Function')
   } catch (error) {
      
   }
 }

funcionA()


const NOMBRE = Symbol();
//Nuevos tipos de datos
const NAME = Symbol() ;
const persona = {
   [NOMBRE]: 'JON'
}


persona[NOMBRE] = 'Jonathan Mircha'


console.log(persona);

console.log(persona[NOMBRE])



const set = new Set([1,2,3,3,4,5,true,false,false,{},
   'hola','HOLA']);

console.log(set);

console.log(set.size)

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(true);
set2.add(false);
set2.add(true);
console.log(set2)
console.log(set2.size)


for (let item of set2) {
   console.log(item)
}
console.log('Segunda Iteracion')
set2.forEach(item => console.log((item))) 
let arr = Array.from(set);
console.log(arr);


set.delete('hola')
console.log(set)

//Validar si el dato es verdadero
console.log(set.has(1))
//Limpiar completamente un arreglo
set2.clear()

*/

/*
let mapa = new Map();
mapa.set('nombre','jon');
mapa.set('apellido','mircha');
mapa.set('edad',35)
console.log(mapa)
console.log(mapa.size)

mapa.set('nombre','jonathan')

console.log(mapa.get('nombre'))

for (let [key,value] of mapa) {
   console.log(`${key} = ${value}`)
}
*/
//RESUMEN 3 clases anteriores
/*Los simbols son elementos a los cuales se les asigna un identificador unico
e irrepetible, 

Los sets son tipos de arreglos los cuales no pueden repetir un valor en especifico

//Estos nos ayuda a tener una mejor optimizacion del rendimiento de nuestra aplicacion
 la cual nos ayuda a tener un tipo de dato debil que se borra al momento
 de que JAVASCRIPT borre la basura que no necesite

*/ 
/*setTimeout(() => {
    console.log("Ejecutando")
}, 1000);

let int = setInterval(() => {
    console.log("Ejecutando un intervalo")  
}, 5000);


let tempo = setTimeout(() => {
    console.log(new Date().toLocaleString());
}, 1000);
clearTimeout(tempo);
clearInterval(int);

//Codigo sincrono bloqueante
(()=>{
console.log("Hola mundo");

function dos(){
    console.log("2")
}

function uno(){
    console.log("Uno");
    dos();
    console.log("Tres");
}
uno();
console.log("Adios")
})();



//Codigo asincrono  no bloqueante
(()=>{

})();

*
//Se está declarando una función que eleva al cuadrado la variable
//value
function Cuadrado(value,callback){
    setTimeout(() => {
        callback(value,value*value)//Respuesta que espera del servidor
    }, 0|Math.random()*1000);
}


Cuadrado(0,(value,result)=>{
console.log("Inicia CallBack");
console.log(`Callback: ${value},${result}`);

Cuadrado(1,(value,result)=>{
    console.log("Inicia CallBack");
    console.log(`Callback: ${value},${result}`);
    
    
    Cuadrado(2,(value,result)=>{
        console.log("Inicia CallBack");
        console.log(`Callback: ${value},${result}`);
        
        Cuadrado(3,(value,result)=>{
            console.log("Inicia CallBack");
            console.log(`Callback: ${value},${result}`);

            Cuadrado(4,(value,result)=>{
                console.log("Inicia CallBack");
                console.log(`Callback: ${value},${result}`);
                
                
                Cuadrado(5,(value,result)=>{
                    console.log("Inicia CallBack"); 
                    console.log(`Callback: ${value},${result}`);
                    
                    
                    });
                });
            
            });
        });
    });
});*/

/*
function Promesa(value,){
    if(typeof value !== "number"){return Promise.reject(`Error el valor 
    ${value} no es un numero`);

}
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           resolve({
               value: value,
               result: value * value
           });
        }, 0|Math.random()*1000);

    });
  
}

Promesa(0)
.then((obj)=>{
    console.log("Inicio Promesa")
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return Promesa(1);
})
.then(obj =>{
   
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return Promesa(2);
})
.then(obj =>{
   
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return Promesa("j");
})
.then(obj =>{
   
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return Promesa(4);
})
.then(obj =>{
   
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return Promesa(5);
})
.then(obj =>{
   
    console.log("Fin promesa");

})
.catch(err => console.error(err))
*/


/*function Promesa(value,){
    if(typeof value !== "number"){return Promise.reject(`Error el valor 
    ${value} no es un numero`);
}
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           resolve({
               value: value,
               result: value * value
           });
        }, 0|Math.random()*1000);

    });
  
}


const Promesa = (numero1, numero2)=>{
    const resultado = numero1 + numero2
    return new Promise(resolve =>{
setTimeout(() => {
   resolve(resultado) 
        }, 500);
    })
}

Promesa(1,3)
.then(result => console.log(result))

function Promesa(value){
if(typeof value !== "number"){return Promise.reject(`Error el valor 
    ${value} no es un numero`);
}
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
           resolve({
               value,
               result: value * value
           });
        }, 0|Math.random()*1000);

    });
  
}

async function asincronaDeclarada() {
    try{
        console.log("Inicio de ASync Function");
        let obj = await cuadradoPromesa(0);
        console.log(`Async Function ${obj.value},${obj.result}`);

        obj = await cuadradoPromesa(1);
        console.log(`Async Function ${obj.value},${obj.result}`);
        obj = await cuadradoPromesa(1)
        console.log(`Async Function ${obj.value},${obj.result}`)
            
    }catch(err){

    }
}
asincronaDeclarada();


function cuadradoPromise(value) {
    if (typeof value !== "number") {
      return Promise.reject(`Error, el valor " ${value} " ingresado no es un número`);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          value,
          result: value * value
        });
      }, 0 | Math.random() * 1000);
    });
  }


  async function funcionAsincronaDeclarada() {
    try {
      console.log('Inicio Async Function');
      let obj = await cuadradoPromise(0);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(1);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      
      obj = await cuadradoPromise(2);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);

      obj = await cuadradoPromise(3);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
    }catch(err){
        console.error(err)
    }
}

funcionAsincronaDeclarada()


const funcionAsincronaExpresada = async()=>{
    try {
        console.log('Inicio Async Function');
        let obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
  
        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
  
        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}`);
      }catch(err){
          console.error(err)
      }
}

funcionAsincronaExpresada()
*/














































































































































































































































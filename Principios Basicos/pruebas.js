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


 // TERMINAN LOS ARRAYS
 //EMPIEZAN LOS OBJETOS

 const b ={

 }

const c = new Object()
console.log(c)
//dentro de un objeto a las variables se les va a llamar atributos,
// y a las funciones metodos
const Pedro ={
    nombre:'Pedro',
    apellido:'Telon',
    pasatiempos:['correr','nadar','comer'],
    saludar:function(){
console.log(`Hola, mi nombre es ${this.nombre}${this.apellido} y mis
pasatiempos los agregue a un array  [${this.pasatiempos}]`)
    }
}
//En los objetos el . significa acceder a los atributos
console.log(Pedro.pasatiempos);
Pedro.saludar()

console.log(Object.keys(Pedro))
console.log(Object.values(Pedro))


console.log(aux = Pedro.hasOwnProperty('nombre'));
if(aux === true){
    console.log('Soy un camello')
}else{
    console.log('Soy un buyayo')
}

function digitalizer() {
    aux = Pedro.hasOwnProperty('nombre')
    if(aux === true){
        console.log('Soy un camello')
    }else{
        console.log('Soy un buyayo')
    }
}
digitalizer()


//Ejercicio
//Hacer una funcion que almacene un valor y despues evalue un valor
//en un arreglo y despues verifique si esta dentro del mismo

function Hola(){
    let element
return element > 3
}
const agregar = function(){

const persona= []
persona.push(5,3,4)
//UTILIZANDO SENTENCIAS BASICAS
const filtrado = persona.filter(function(valor){
    return valor > 3
})

Const = valoresPositivos = (valor)=> valor>0

//Utilizando ARROW FUNCTIONS ONE LINER
const filtrado2 = persona.filter((value)=> value > 3)
return filtrado2
}


console.log(agregar())

//Completado !!!!
//Empieza bloque try-catch
console.log(9 === 5||9 =='8')
try {

} catch (error) {
    console.log(error)
}


try {
    let numero = 10;
    if (isNaN(numero)) {
        throw new Error('Tienes que colocar un numero')
    }
    console.log(numero * numero)
} catch (error) {
    console.log(`Se produjo el error ${error} no es un numero`)
}

//Crea un programa que evalue un string y ejecute un pedazo
//de codigo
let nombre = 'Cochinero'
console.log(typeof(nombre))
//VALIDACION CON typeof
if (typeof (nombre) === 'string' ) {
    console.log('Hola Juilin')
}
//Crea un programa que diga si lo que se esta
//colocando se puede multiplicar y si no diga el
//error
try {
  
 const multiplicadora = ((a)=>console.log(a =  a * a ))
 multiplicadora(j)
} catch (error) {
    console.log(`El error es ${error}`)
}

//Crea un array function

const Anuel = ((valor)=>   console.log(valor * 4) );
Anuel(5)

//Crea un objeto y saca un datos y diga Hola mundo ✔
const Juilin = {
 nombre:'mono',
 apellido:'Micky',
  Array: [4,5,6],
  saludar:function(){
    console.log('Hola mundo')
  }
}

//Crea un array
const camiones = ['mitsubishi','Hiunday','Foton']
if(camiones[1]=== 'Hiunday'){
    console.log('Bebesita')
  }else{
    console.log('Hola')
  }
  
/*

  const pelon = {
   nombree:'mono',
    apellido:'Guzman',
    edad:'36'
  }
//la destructuracion sirve para separar los elementos de un objeto, separarlos en variables
//las cuales despues podemos utilizar 
  const{nombree,apellido,edad}=pelon;
  console.log(nombree,apellido,edad);

  let pablo = 'laika',
  real = 7;

  const perro = {
    pablo:pablo,
    real:real,
    ladrar:function() {
        console.log('guaaau guaaau')
    }
  }


  console.log(perro)
  perro.ladrar()

//Creando objeto literales,
//Los objetos literales funcionan de manera que no tienes que volver
//a restablecer el valor de la variable como se hace comunmente de
//colocar nombre:nombre,(JAVA)
//Simplemente sirve para no tener que volver a escribir codigo innecesario
//y mas entendible para tu equipo de trabajo
  const dog ={
    pablo,
    real,
    ladrar(){
    console.log('guaaa guaagu')
    }
  }

  console.log()
  dog.ladrar()

  //Iniciamos parametros de propagacion REST OPERADOR SPREAD
  function sumar(a,b,...c) {
    let resultado = a + b;
    c.forEach(function (n) {
        resultado += n
    });
    return resultado;
  }

  console.log(sumar(1,2));
  console.log(sumar(1,2,3));
  console.log(sumar(1,2,3,10));

 //UTILIZANDO EL OPERADOR DE propagacion
 const arr1 = [1,2,3]
 const arr2 = [4,5,6]
 console.log(arr1,arr2)
 const arr3 = [...arr1,...arr2]
 console.log(arr3)
/*
 //Crear un objeto de un estudiante utilizando PO
  function Estudiante(nombre,apellido,edad) {
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad = edad;
  
     
    }

    Estudiante.prototype.sonar = function() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad}`)
         }

    const Estudiante1 = new Estudiante('Pedro','Telon',21),
    Estudiante2 = new Estudiante ('Elmer','Dennilson',45)
    console.log(Estudiante1)
    Estudiante1.sonar()

    console.log(Estudiante2)
    Estudiante2.sonar()




            //Creacion de clase Estudiante
     class Estudiante {
    //constructor es un metodo que se ejecuta
    //en el momento de instanciar la clase
     constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
      
     }
     Estudia(){
        console.log('Estudio en harvard');
     }
     saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
     }
     //un metodo estatico e puede ejecutar sin necesidad de instanciar
     //la clase
     static hola(){
        console.log('Real hasta la muerte')
     }
     
    }
    Estudiante.hola();
    //extends de que vas a heredar los atributos a esta clase
    class Secundaria extends Estudiante{
        constructor(nombre,genero,tamano){
            //super invoca al constructor de la clase la cual
            //herede
            super(nombre,genero);
            
            this.tamano = tamano;
            this.raza = null;
        }

        static hola(){
            console.log('Hola mundo')
        }
        //Con get recibimos la propiedad que declaramos al momento
        //de ejecutar la función
        get getRaza(){
            return this.raza;
         }
         //Declaramos la función mediante la manipulacion del objeto
         set setRaza(raza){
            this.raza = raza;
         }
    }
    
        const mimi = new Estudiante('Katherin','Hembra');
        const Hola = new Secundaria('Pedro','Macho',1.76);
        

        console.log(mimi);
        mimi.Estudia()
        mimi.saludar()

        console.log(Hola)

         
        Hola.setRaza = 'Gran danez'
        console.log(Hola)
        
        console.log(Hola.getRaza)   
       //PROPIEDADES/ATRIBUTOS                METODOS/FUNCIONES
       //EJERCICIO POO BASICO PARA REPASAR CONCEPTOS
        //Crear una clase padre de trabajador con 2 propiedades
        //y 2 funciones 
        //despues utilizar extends y super para crear una clase trabajador
        // y heredar sus propiedades y cambiar sus metodos
        //y utilizarlas en una operacion
        //Utilizar getters y setters para declararle una propiedad y despues
        //mostrarla


        class Trabajador{
            constructor(nombre,puesto,salario){
                this.nombre = nombre;
                this.puesto = puesto;
                this.salario = salario;
                this.emocion = null;
            }
            Presentarse(){
                console.log(`Hola que tal mi nombre es ${this.nombre} y trabajo de ${this.puesto}  `)
            }

            Salario(){
                console.log(`Mi salario es de: ${this.salario}`)
            }
            get getEmocion(){
                return this.emocion;
             }
             set setEmocion(emocion){
                 this.emocion = emocion;
             }
          
        }
        
        class Jefe extends Trabajador{
            constructor(nombre,puesto,salario){
            super(nombre,puesto,salario)
          }
          Oficio(){
            console.log(`Yo como ${this.puesto} me pongo a regañar a la mara`)
           }
          
        }
        
        class Secretaria extends Trabajador{
            constructor(nombre,puesto,salario){
            super(nombre,puesto,salario)
          }
          Oficio(){
            console.log(`Yo como ${this.puesto} me pongo a contestar llamadas`)
           }
        }
        




        const trabajador = new Trabajador
        const Pedro = new Jefe ('Pedro','Jefe',10000);
        const Helen = new Secretaria('Helen','Secretaria',5000)
        
        console.log(Pedro)
        Pedro.Presentarse()
        Pedro.Salario()
        Pedro.Oficio()

        console.log(Helen)
        Helen.Oficio()

        //MUY BIEN PEDRO, TE FELICITO, ERES BIEN INTELIGENTE!!!!
        const Identificador = function(obj) {
            if (obj.salario>5000) {
                console.log('Soy el jefe')
            }
            if(obj.salario <= 5000){
                console.log('Soy Secretaria')
            }
        }
       


        console.log(Pedro['salario'])
        Identificador(Pedro)


        Pedro.setEmocion='Triste'
        Helen.setEmocion='Feliz'
        console.log(Pedro,Helen)
        console.log(Pedro.emocion)
        */

        //NOTAS
        //OBJETO MAP
        //ALERT,CONFIRM,PROMPT


      /*  //FUNCIONES ANONIMAS AUTOEJECUTABLES
        (function(){
                console.log('Hola mundo')
        })();
        (function(){
            console.log('Adios Mundo')
         })();*/

//Crea 2 funciones y exportalas para el archivo 
//index.js

function sumar(a,b) {
    return a+b
}

function mulitplicar(a,b) {
    return a*b
}

export const aritmetica = {
    sumar,
    mulitplicar
}

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

*/
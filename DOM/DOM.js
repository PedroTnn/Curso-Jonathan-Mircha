/*//Anteriormente Usados
//Agarra cualquier selector con la etiqueta que tenemos
console.log(document.getElementsByTagName("li"))
//Agarra cualquier selector con la clase que tenemos
console.log(document.getElementsByClassName("card"))


//Nuevas opciones de utilizar elementos
//agarra cualquier selector con el ID que tenemos
console.log(document.getElementById("menu"));
/*Agarra cualquier selector con la clase,id, tagname solo se le tiene que 
especificar*/
/*
console.log(document.querySelector("#menu"));
//Agarra todos los selectores de lo anteriormente dicho 
//tambien se le pueden pasar parametros
console.log(document.querySelectorAll(".card")[2] );
//document.querySelectorAll(".card").forEach(el => console.log(el))*/
//CLASE 62
console.log(document.getElementsByTagName("li"))
console.log(document.querySelector("#menu"))
console.log(document.querySelectorAll("a")[2]);
//CLASE 63
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang","VIVA ESPAÑAAA")
console.log(document.documentElement.getAttribute("lang"))







document.documentElement.setAttribute("lang","ENG")
const $linkDOM = document.querySelector(".link-dom")
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://agar.io");
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)
const d = document
console.log(d.querySelector("#menu"));

Inicio
    Public insertarAlFinal(nodo liga,Entero valor)
Inicio
    (Esta operacion requiere minimo de una lista)
Fin
Sino 
    Inicio Q=PrimerNODO;
        Mientras (Nodo != null)
Inicio 
            Q=Q
Fin
    Nodo nuevo = new Nodo (valor);
        Nuevo.Nodo=Q.Nodo;
                Q.Nodo= Nuevo
    Fin
Fin1
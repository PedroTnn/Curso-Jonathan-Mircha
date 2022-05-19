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

document.documentElement.setAttribute("lang","Pendejo")
const $linkDOM = document.querySelector(".link-dom")
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://agar.io");
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)

/*
console.log(document);
console.log(document.charset)
console.log(document.title)



console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("img").length);
document.querySelectorAll("img").forEach((el) => console.log(el));
console.log(document.querySelectorAll(".card")[3]);
console.log(document.querySelectorAll("#menu li"));
*/

/*
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
document.documentElement.lang = "es";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.getAttribute("lang"));

const $linkDOM = document.querySelector(".link-dom");

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("href","https://agar.io");
$linkDOM.setAttribute("rel","noopener");

console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"));
/*
console.log($linkDOM.getAttribute("data-description")); 
console.log($linkDOM.dataset);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset);
$linkDOM.dataset.description = "Suscribete"
console.log($linkDOM.dataset);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id")
console.log($linkDOM.hasAttribute("data-id"));*/
/*
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.backgroundColor);
$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
$linkDOM.style.width ="50%";
$linkDOM.style.textAlign= "center";
$linkDOM.style.marginLeft ="auto";
$linkDOM.style.marginRight ="auto";
$linkDOM.style.padding ="1rem"
$linkDOM.style.borderRadius = "1rem";
console.log($linkDOM.getAttribute("style"))

const $html = document.documentElement,$body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor =varDarkColor;
$body.style.color = varYellowColor;
 
$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",varDarkColor);

*/

/*
const $card = document.querySelector(".card");
$card.classList.add("clash","royale");
$card.classList.remove("clash","royale");
$card.classList.replace("clash","royale");
$card.classList.toggle("clash","royale");


console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("clash","royale");
$card.classList.remove("clash","royale");
$card.classList.toggle("clash","royale");
*/
/*const $whatDOM = document.getElementById("Que");
let text =  `<p><b>Hola</p>`
;
//$whatDOM.innerText = text;
$whatDOM.textContent = text;
$whatDOM.innerHTML = text;
$whatDOM.outerHTML = text;*/
/*
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children[2]);
console.log($cards.parentNode);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.children[3].closest("section"));

const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");
$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card")
$figure2 = document.createElement("figure");
$figure.appendChild($img);
$figcaption.appendChild($figcaptionText)
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src = "https://placeimg.com/200/200/people" alt ="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment =document.createDocumentFragment(),
cardContent =[{
    title: "Tecnologia",
    img:"https://placeimg.com/200/200/tech",
},
{
    title: "Animales",
    img:"https://placeimg.com/200/200/amimals",
},
{
    title: "Arquitectura",
    img:"https://placeimg.com/200/200/arch",
},
{
    title: "Gente",
    img:"https://placeimg.com/200/200/people",
},
{
    title: "Naturaleza",
    img:"https://placeimg.com/200/200/nature",
},
];
cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;
    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment);


const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaptio>Any</figcaption>
`;

$newCard.classList.add("card");
//$cards.replaceChild($newCard,$cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard,$cards.firstElementChild);
$cloneCards = $cards.cloneNode(true);
document.body.appendChild($cloneCards)


const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaptio>Any</figcaption>
`;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//$cards.insertAdjacentElement("afterbegin",$newCard);
//$cards.insertAdjacentElement("afterbegin",$newCard);

$cards.prepend($newCard);
$cards.before($newCard);
$cards.after($newCard);

function holaMundo(){
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "cuca"){
    alert(`Hola ${nombre}`);
    console.log(event)
}



const $semantico = document.getElementById("semantico"),
$multimetro = document.getElementById("multiple"),
$removin = document.getElementById("removen");
$semantico.onclick = holaMundo;
$semantico.onclick = function(e){
    alert("manejador semantico")
    console.log(e);
    console.log(event);
}
$multimetro.addEventListener("click",holaMundo);
$multimetro.addEventListener("click",(e) => {
    alert('Manejador multiple ready');
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});

$multimetro.addEventListener("click",()=>{
saludar()
saludar("Jon");
});

const Remover=(e)=>{
    alert(`removiendo el evento ${e.type}`);
    console.log(e);
    $removin.removeEventListener("dblclick",Remover); 
    $removin.disabled = true;
}

$removin.addEventListener("click",Remover);


*/

const $divs = document.querySelectorAll(".eventos div"),
$linkEvents = document.querySelector(".eventos a");
console.log($divs);

function flujoEvents(e){
   console.log(`Hola te saluda ${this.className},
    el click lo origino ${e.target.className}`);
    e.stopPropagation();
}
$divs.forEach(div =>{
   div.addEventListener("click",flujoEvents);
    //Fase de captura
    //=false
    }); 

$linkEvents.addEventListener("click",(e)=>{
 alert("Peligro su computadora se llena de virus")
 e.preventDefault();
 e.stopPropagation();
});
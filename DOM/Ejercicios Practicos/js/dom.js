import hamburgerMenu from "./menuguesa.js";
import {digitalClock,alarm} from "../js/reloj.js"; 
import { shortcurts }  from "./keyboard.js";
const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-relog","#desactivar-relog");
    alarm("assets/alarm.mp3","#activar-alarma","#desactivar-alarma");

});

d.addEventListener("keydown", e=>{
    shortcurts(e);
})

import hamburgerMenu from "./menuguesa.js";
import {digitalClock,alarm} from "../js/reloj.js"; 
import {moveBall,shortcurts }  from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopButtom from "./bottom_scroll.js";
const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-relog","#desactivar-relog");
    alarm("assets/alarm.mp3","#activar-alarma","#desactivar-alarma");
    countdown(
        "countdown",
     "May 12,2050 3:23:19",
     "Feliz Cumpleaños amigo y docente digital");
     scrollTopButtom(
         ".scroll-top-btn"
     );
});

d.addEventListener("keydown", e=>{
    shortcurts(e);
    moveBall(e,".ball",".stage");
})

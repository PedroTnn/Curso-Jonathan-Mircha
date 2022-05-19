import hamburgerMenu from "./menuguesa.js";
import {digitalClock,alarm} from "../js/reloj.js"; 
import {moveBall,shortcurts }  from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopButtom from "./bottom_scroll.js";
import darkTheme from "./dark-theme.js";
import responsiveMedia from "./object_responsive.js";
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
    responsiveMedia("youtube",
    "(min-width:1024px)",
    `<a href ="https://www.youtube.com/watch?v=BUULBlDcju4&t=63s" target="_blank"
    rel="noopener">Ver Video</a>`,

    `<iframe width="560" 
    height="315"
     src="https://www.youtube.com/embed/BUULBlDcju4"
      title="YouTube video player"
       frameborder="0" allow="accelerometer;
        autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture"
         allowfullscreen></iframe>`)

  responsiveMedia("gmaps",
"(min-width:1024px)",
`<a href ="https://goo.gl/maps/onQVCmCzAmMRqsBJA" target="_blank"
    rel="noopener">Ver Mapa</a>`,
    `<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60989.96970623725!2d-89.67099012801769!3d17.176382784457715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5fa6cb21a7bd6d%3A0x587d714d81a09cdd!2sTemplo%20del%20Gran%20Jaguar!5e0!3m2!1ses-419!2sgt!4v1652893597061!5m2!1ses-419!2sgt" 
    width="600"
     height="450"
      style="border:0;"
       allowfullscreen=""
        loading="lazy"
         referrerpolicy="no-referrer-when-downgrade"
         ></iframe>`)
}); 

d.addEventListener("keydown", e=>{
    shortcurts(e);
    moveBall(e,".ball",".stage");
})
darkTheme(".dark-theme-btn","dark-mode");
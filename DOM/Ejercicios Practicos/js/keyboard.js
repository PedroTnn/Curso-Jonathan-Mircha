const d = document;
let x = 0,
    y = 0;
   

export function moveBall(e,ball,stage){
const $ball = d.querySelector(ball),
$stage = d.querySelector(stage),
limitsBall = $ball.getBoundingClientRect(),
limitsStage = $stage.getBoundingClientRect();
/*console.log(e.keyCode);
console.log(e.key);
console.log(limitsBall,limitsStage);*/
//*const move = (direction)=>{
  
//}
switch (e.keyCode) {
    case 37:
             //1move("left");
        
        if(limitsBall.left>limitsStage.left){
         e.preventDefault();
            x--;
        }
        break;
        case 38:
           
      //  move("up")
       //y--;
       if(limitsBall.top > limitsStage.top){
           e.preventDefault();
           y--
    };
            break;
            case 39:
               
         //   move("right");
         if(limitsBall.right < limitsStage.right){
            e.preventDefault();
            x++
            };
         //x++;
                break;
                case 40:
               
          //  move("down")
          if(limitsBall.bottom < limitsStage.bottom)
          {
            e.preventDefault();
              y++
        };
        //  y++;
                    break;
    default:
        break;
}
$ball.style.transform = `translate(${x*10}px,${y*10}px)`;
}

export function shortcurts (e){
  /*  console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode)
    console.log(e.ctrlKey);
    console.log(e.altKey);
    if(e.key === "a"&&e.altKey){
        alert("haz lanzado una alerta")
    }
    if(e.key === "e"&&e.altKey){
        confirm("haz lanzado una alerta")
    }
    if(e.key === "i"&&e.altKey){
        prompt("haz lanzado una alerta")
    }*/
}
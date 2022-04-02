const d = document;
export function shortcurts (e){
    console.log(e);
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
    }
}
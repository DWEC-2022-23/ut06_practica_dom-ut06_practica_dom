document.getElementById("boton").onclick = function(){
    let colores = document.getElementById("color").value;
    document.getElementsByTagName("h1")[0].style.color = colores;
}
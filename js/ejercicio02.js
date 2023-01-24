document.getElementById("boton").onclick = ()=>{
    var a = document.getElementsByTagName("body")[0];
    var b = document.getElementById("boton").innerHTML;

    if(b == "fondo oscuro"){
        a.classList.add("inverso");
        document.getElementById("boton").innerHTML = "fondo claro";
    }
    else{
        a.classList.remove("inverso");
        document.getElementById("boton").innerHTML = "fondo oscuro";
    }  
}
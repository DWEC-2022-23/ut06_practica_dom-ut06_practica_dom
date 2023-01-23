
document.getElementsByClassName("BotonAñadir")[0].addEventListener("click",()=>{
    var a = document.getElementsByClassName("AñadirElemento")[0].value;
    var b = document.createElement("li");
    var c = document.getElementById("lista");
    b.innerHTML = a;
    c.appendChild(b);
});
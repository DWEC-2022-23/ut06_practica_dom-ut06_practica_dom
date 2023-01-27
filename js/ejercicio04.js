document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    var a = document.getElementsByClassName("AñadirElemento")[0].value;
    var b = document.createElement("li");
    var c = document.getElementById("lista");
    b.innerHTML = a;
    c.appendChild(b);
});

document.getElementsByTagName("button")[2].addEventListener("click",()=>{
    var a = document.getElementsByTagName("li");
    var c = document.getElementById("lista");
    c.removeChild(a[0]);
});

document.getElementsByTagName("button")[1].addEventListener("click",()=>{
    var a = document.getElementsByTagName("li");
    var c = document.getElementById("lista");
    c.removeChild(a[a.length-1]);
});
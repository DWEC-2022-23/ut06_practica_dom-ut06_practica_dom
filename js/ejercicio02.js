document.getElementById("boton").onclick = ()=>{
    let a = document.getElementsByTagName("p");
    let b = document.getElementById("boton").innerHTML;

    if(b = "fondo claro"){

        for(let i=0;i<=a.length;i++){
            a[i].style.color = "white";
        }

        document.getElementById("boton").innerHTML = "fondo claro";
        document.body.style.backgroundColor = "black";
    }
    else{
        for(let i=0;i<=a.length;i++){
            a[i].innerHTML =`<p class="inverso">parrafo ${i}.`;
            a[i].style.color = "black";
        }  
    }
}
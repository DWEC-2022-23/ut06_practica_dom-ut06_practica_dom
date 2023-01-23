document.getElementById("boton").onclick = ()=>{
    var a = document.getElementsByTagName("p");
    var b = document.getElementById("boton").innerHTML;
    var c = document.getElementsByTagName("body");

    if(b == "fondo oscuro"){

        /*for(let i=0;i<a.length;i++){
            a[i].classList.add(".inverso");
            //a[i].innerHTML =`<p class="inverso">parrafo ${i}.</p>`;
        }  
        document.body.style = ".inverso body";*/
        //document.getElementById("boton").innerHTML = "fondo claro";

    }
    else{
        for(let i=0;i<a.length;i++){
            a[i].innerHTML =`<p class="normal">parrafo ${i}.</p>`;
        }  
        document.getElementById("boton").innerHTML = "fondo oscuro";
    }
}
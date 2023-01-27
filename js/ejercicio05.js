const h3 = document.getElementsByTagName("h3");
const h2 = document.getElementsByTagName("h2");
const ul =  document.getElementsByTagName("ul");
const create = document.createElement("div");


for(let i=0;i<h3.length;i++){
    h3[i].addEventListener("click",(e)=>{
        let texto = `Has elegido ${espaciado(e.target.innerHTML)} que se imparte en turno de ${e.target.parentNode.id}. Los nº de grupos que se imparten son 3: ${horario(e.target.nextElementSibling.innerHTML)}`;
          let p = document.createTextNode(texto);
          create.appendChild(p);

          let inser = document.getElementsByTagName("lista")[3];
          let bod = document.body.insertBefore(create,inser);
          document.body.onload = bod;
    });
}

function espaciado(e){
    let mensaje = e.split(";");
    let mensajes = "";
    for(let i=0;i<mensaje.length;i++){
        if(mensaje[i] != "&nbsp"){
            mensajes = mensaje[i];
        }
    }
    return mensajes;
}

function horario(e){
    let mensaje = e.split("</li>");
    let mensa = "";

    for(let i=0;i<mensaje.length;i++){
      let a = mensaje[i].replace("<","");
      let b = a.replace("l","");
      let c = b.replace("i","");
      let d = c.replace(">","");

      if(i < mensaje.length){
        mensa += d+",";
      }
      else if(i == mensaje.length){
        mensa += d;
      }
      
    }
    return mensa;
}
